import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
import { pageTitle } from '@gitroom/frontend/utils/brand';
export const metadata: Metadata = {
  title: pageTitle('Agente'),
  description: 'agents',
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Agent>{children}</Agent>;
}
