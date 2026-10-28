import { SettingsPopup } from '@gitroom/frontend/components/layout/settings.component';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { pageTitle } from '@gitroom/frontend/utils/brand';
export const metadata: Metadata = {
  title: pageTitle('Configurações'),
  description: '',
};
export default async function Index(props: {
  searchParams: Promise<{
    code: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  return <SettingsPopup />;
}
