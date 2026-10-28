export const dynamic = 'force-dynamic';
import { Forgot } from '@gitroom/frontend/components/auth/forgot';
import { Metadata } from 'next';
import { pageTitle } from '@gitroom/frontend/utils/brand';
export const metadata: Metadata = {
  title: pageTitle('Esqueci minha senha'),
  description: '',
};
export default async function Auth() {
  return <Forgot />;
}
