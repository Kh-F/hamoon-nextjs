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
const STYLE_ID = 'hamoon-el-mobile';

// Inject a <style> into the shadow root so the widget's own cascade
// cannot hide itself on small screens.
function injectMobileStyle(sr: ShadowRoot) {
  if (sr.querySelector(`#${STYLE_ID}`)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = `
    :host {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      z-index: 2147483647 !important;
      pointer-events: auto !important;
    }
  `;
  sr.appendChild(s);
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

  // ── Mobile visibility (re-runs on each route / agent change) ─────────────
  useEffect(() => {
    const shadowObs = new MutationObserver(applyVisibility);

    function applyVisibility() {
      const host = document.querySelector('elevenlabs-convai') as HTMLElement | null;
      if (!host) return;

      // Force host element visible via inline important
      host.style.setProperty('display',     'block',       'important');
      host.style.setProperty('visibility',  'visible',     'important');
      host.style.setProperty('opacity',     '1',           'important');
      host.style.setProperty('z-index',     '2147483647',  'important');
      host.style.setProperty('pointer-events', 'auto',     'important');

      // Inject into shadow root so widget's internal CSS cannot hide itself
      if (host.shadowRoot) {
        injectMobileStyle(host.shadowRoot);
        // Keep watching for late-added shadow content
        shadowObs.observe(host.shadowRoot, { childList: true, subtree: true });
      }
    }

    applyVisibility();
    const iv  = setInterval(applyVisibility, 400);
    const to  = setTimeout(() => clearInterval(iv), 20_000);

    return () => {
      clearInterval(iv);
      clearTimeout(to);
      shadowObs.disconnect();
    };
  }, [agentId]);

  // key={agentId} remounts the custom element on every agent/route change.
  return (
    <div key={agentId}>
      <elevenlabs-convai agent-id={agentId} />
    </div>
  );
}
