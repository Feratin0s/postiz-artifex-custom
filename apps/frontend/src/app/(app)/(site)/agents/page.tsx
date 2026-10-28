import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { pageTitle } from '@gitroom/frontend/utils/brand';

export const metadata: Metadata = {
  title: pageTitle('Agente'),
  description: '',
};

export default async function Page() {
  return redirect('/agents/new');
}
