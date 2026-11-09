import { Injectable } from '@nestjs/common';
import mariadb from 'mariadb';

@Injectable()
export class EnterprisePlanService {
  private pool: ReturnType<typeof mariadb.createPool> | null = null;

  async isActiveForEmail(email: string) {
    const rows = await this.getPool().query(
      'SELECT is_active FROM enterprise WHERE LOWER(email) = LOWER(?) LIMIT 1',
      [email.trim()]
    );

    return rows.length > 0 && Number(rows[0].is_active) === 1;
  }

  async assertActiveForEmail(email: string) {
    if (!(await this.isActiveForEmail(email))) {
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