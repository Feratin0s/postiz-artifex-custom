import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
import { AgentChat } from '@gitroom/frontend/components/agents/agent.chat';
import { pageTitle } from '@gitroom/frontend/utils/brand';
export const metadata: Metadata = {
  title: pageTitle('Agente'),
  description: '',
};
export default async function Page() {
  return (
    <AgentChat />
  );
}
