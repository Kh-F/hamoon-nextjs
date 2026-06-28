'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AGENT_MAP: Record<string, string> = {
  '/':                        'agent_6901kvx2pxa4evqsz6bfm578n0a0',
  '/departments/english':     'agent_1001kw4vb0hjf45ayky9a9js9hnv',
  '/departments/mathematics': 'agent_0001kw4wt7v5f6v80qda85r31pv8',
  '/departments/ai':          'agent_7301kw4x38zyeektfz5jez981720',
  '/workshops':               'agent_9301kw4xp6sjf9h8p82vh766myv6',
};

const FALLBACK_AGENT = AGENT_MAP['/'];

export default function ElevenLabsWidget() {
  const pathname = usePathname();
  const agentId = AGENT_MAP[pathname] ?? FALLBACK_AGENT;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // key={agentId} forces React to unmount + remount the custom element
  // whenever the agent changes, triggering a fresh widget initialization.
  return (
    <div key={agentId} style={{ zIndex: 9999, position: 'relative' }}>
      <elevenlabs-convai agent-id={agentId} />
    </div>
  );
}
