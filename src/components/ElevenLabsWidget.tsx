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
const STYLE_ID = 'hamoon-el-pos';

// Inject CSS into the shadow root so :host overrides the widget's internal position.
function injectShadowStyle(sr: ShadowRoot) {
  if (sr.querySelector(`#${STYLE_ID}`)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = `
    :host {
      position: fixed !important;
      bottom: 32px !important;
      right: 32px !important;
      left: unset !important;
      z-index: 10000 !important;
      display: block !important;
      visibility: visible !important;
    }
    @media (max-width: 640px) {
      :host { bottom: 20px !important; right: 20px !important; }
    }
  `;
  sr.appendChild(s);
}

// Force inline !important on any element — defeats widget-set inline styles.
function forcePosition(el: HTMLElement) {
  const small = window.innerWidth <= 640;
  const offset = small ? '20px' : '32px';
  el.style.setProperty('position', 'fixed',  'important');
  el.style.setProperty('bottom',   offset,   'important');
  el.style.setProperty('right',    offset,   'important');
  el.style.setProperty('left',     'unset',  'important');
  el.style.setProperty('z-index',  '10000',  'important');
  el.style.setProperty('display',  'block',  'important');
  el.style.setProperty('visibility', 'visible', 'important');
}

export default function ElevenLabsWidget() {
  const pathname = usePathname();
  const agentId = AGENT_MAP[pathname] ?? FALLBACK_AGENT;

  // ── Script injection (once per browser session) ──────────────────────────
  useEffect(() => {
    if (!document.querySelector('script[src*="convai-widget-embed"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  // ── Position override (runs per agentId / route change) ──────────────────
  useEffect(() => {
    const shadowObs = new MutationObserver(applyAll);
    const bodyObs   = new MutationObserver(applyAll);

    function applyAll() {
      // 1. Host element — inline !important overrides any widget-set inline styles
      const host = document.querySelector('elevenlabs-convai') as HTMLElement | null;
      if (host) {
        forcePosition(host);

        // 2. Shadow root — inject :host CSS so internal fixed elements move too
        if (host.shadowRoot) {
          injectShadowStyle(host.shadowRoot);
          // Watch for late-rendered shadow DOM content
          shadowObs.observe(host.shadowRoot, { childList: true, subtree: true });
        }
      }

      // 3. Portaled element — some widget versions append a container to <body>
      document.querySelectorAll<HTMLElement>(
        '[id*="elevenlabs"],[id*="convai"],[class*="elevenlabs"],[class*="convai"]'
      ).forEach(forcePosition);
    }

    // Watch for portaled elements added to body
    bodyObs.observe(document.body, { childList: true });

    // Poll for the first 20 s in case the widget initializes asynchronously
    applyAll();
    const iv = setInterval(applyAll, 500);
    const to = setTimeout(() => clearInterval(iv), 20_000);

    return () => {
      clearInterval(iv);
      clearTimeout(to);
      shadowObs.disconnect();
      bodyObs.disconnect();
    };
  }, [agentId]);

  // key={agentId} forces a full unmount/remount of the custom element
  // whenever the route changes to a different agent.
  return (
    <div key={agentId}>
      <elevenlabs-convai agent-id={agentId} />
    </div>
  );
}
