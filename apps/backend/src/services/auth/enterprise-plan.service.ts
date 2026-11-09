import { Injectable } from '@nestjs/common';
import mariadb from 'mariadb';

@Injectable()
export class EnterprisePlanService {
  private pool: ReturnType<typeof mariadb.createPool> | null = null;

  private getEnterpriseId(organizationName: string) {
    const match = organizationName.match(/###(\d+)$/);
    if (!match) {
      return null;
    }

    const enterpriseId = Number(match[1]);
    return Number.isSafeInteger(enterpriseId) && enterpriseId > 0
      ? enterpriseId
      : null;
  }

  isEnterpriseOrganization(organizationName: string) {
    return this.getEnterpriseId(organizationName) !== null;
  }

  async isActiveForOrganization(organizationName: string) {
    const enterpriseId = this.getEnterpriseId(organizationName);
    if (!enterpriseId) {
      return true;
    }

    const rows = await this.getPool().query(
      'SELECT is_active FROM enterprise WHERE id = ? LIMIT 1',
      [enterpriseId]
    );

    return rows.length > 0 && Number(rows[0].is_active) === 1;
  }

  async assertUserHasActiveEnterprise(organizationNames: string[]) {
    const enterpriseOrganizations = organizationNames.filter((name) =>
      this.isEnterpriseOrganization(name)
    );

    if (!enterpriseOrganizations.length) {
      return;
    }

    const activeOrganizations = await Promise.all(
      enterpriseOrganizations.map((name) =>
        this.isActiveForOrganization(name)
      )
    );

    if (!activeOrganizations.some(Boolean)) {
      throw new Error('Enterprise plan is inactive');
    }
  }

  private getPool() {
    if (this.pool) {
      return this.pool;
    }

    const { ENTERPRISE_DB_HOST, ENTERPRISE_DB_USER, ENTERPRISE_DB_NAME } =
      process.env;
    if (!ENTERPRISE_DB_HOST || !ENTERPRISE_DB_USER || !ENTERPRISE_DB_NAME) {
      throw new Error('Enterprise database configuration is missing');
    }

    const port = Number(process.env.ENTERPRISE_DB_PORT || 3306);
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      throw new Error('Enterprise database port is invalid');
    }

    this.pool = mariadb.createPool({
      host: ENTERPRISE_DB_HOST,
      port,
      user: ENTERPRISE_DB_USER,
      password: process.env.ENTERPRISE_DB_PASSWORD || '',
      database: ENTERPRISE_DB_NAME,
      connectionLimit: 2,
    });

    return this.pool;
  }
}