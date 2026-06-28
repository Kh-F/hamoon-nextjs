'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const AGENT_MAP: Record<string, string> = {
  '/':                'agent_6901kvx2pxa4evqsz6bfm578n0a0',
  '/courses/english': 'agent_1001kw4vb0hjf45ayky9a9js9hnv',
  '/courses/math':    'agent_0001kw4wt7v5f6v80qda85r31pv8',
  '/courses/ai':      'agent_7301kw4x38zyeektfz5jez981720',
  '/workshops':       'agent_9301kw4xp6sjf9h8p82vh766myv6',
};

const FALLBACK_AGENT = AGENT_MAP['/'];
const SCRIPT_URL = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

// Singleton promise — script is injected once per page load, never twice.
let scriptReady: Promise<void> | null = null;

function loadWidgetScript(): Promise<void> {
  if (scriptReady) return scriptReady;
  scriptReady = new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = SCRIPT_URL;
    s.async = true;
    s.onload  = () => resolve();
    s.onerror = (e) => reject(e);
    document.head.appendChild(s);
  });
  return scriptReady;
}

export function ElevenLabsWidget() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const agentId = AGENT_MAP[pathname] ?? FALLBACK_AGENT;

  useEffect(() => {
    let cancelled = false;

    loadWidgetScript()
      .then(() => {
        if (cancelled || !containerRef.current) return;

        // Unmount existing widget before mounting the new one.
        containerRef.current.innerHTML = '';

        const el = document.createElement('elevenlabs-convai');
        el.setAttribute('agent-id', agentId);
        containerRef.current.appendChild(el);
      })
      .catch((err) => console.error('[ElevenLabsWidget] script load failed:', err));

    return () => {
      cancelled = true;
    };
  }, [agentId]); // re-runs only when the mapped agent changes

  return <div ref={containerRef} />;
}
