export const dynamic = 'force-dynamic';
import { Login } from '@gitroom/frontend/components/auth/login';
import { Metadata } from 'next';
import { pageTitle } from '@gitroom/frontend/utils/brand';
export const metadata: Metadata = {
  title: pageTitle('Entrar'),
  description: '',
};
export default async function Auth() {
  return <Login />;
}
