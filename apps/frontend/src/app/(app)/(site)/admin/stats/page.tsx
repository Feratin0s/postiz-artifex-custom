export const dynamic = 'force-dynamic';
import { AdminStatsComponent } from '@gitroom/frontend/components/admin/admin-stats.component';
import { Metadata } from 'next';
import { pageTitle } from '@gitroom/frontend/utils/brand';

export const metadata: Metadata = {
  title: pageTitle('Admin Stats'),
  description: '',
};

export default async function Page() {
  return (
    <div className="bg-newBgColorInner flex-1 min-w-0 flex-col flex p-[20px] gap-[12px]">
      <AdminStatsComponent />
    </div>
  );
}
