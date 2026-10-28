import { MediaLayoutComponent } from '@gitroom/frontend/components/new-layout/layout.media.component';
import { Metadata } from 'next';
import { pageTitle } from '@gitroom/frontend/utils/brand';

export const metadata: Metadata = {
  title: pageTitle('Mídia'),
  description: '',
};

export default async function Page() {
  return <MediaLayoutComponent />
}
