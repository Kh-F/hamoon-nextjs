'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ConversationProvider, useConversation } from '@elevenlabs/react';
import Icon from './Icon';
import { TextChatbot } from './TextChatbot';

type ActiveChat = 'text' | 'voice' | null;

// Routes that get the ElevenLabs voice button and which agent to use.
const VOICE_ROUTES: Record<string, string> = {
  '/': 'agent_6901kvx2pxa4evqsz6bfm578n0a0',
  '/departments/english': 'YOUR_ENGLISH_AGENT_ID',
};

// Text chatbot context: English Speaking Room on the English dept page.
function textContext(pathname: string): 'general' | 'english' {
  return pathname === '/departments/english' ? 'english' : 'general';
}

// ── VoiceSession ────────────────────────────────────────────────────────────
// Only mounts inside ConversationProvider (after user clicks voice button).
// Auto-starts on mount to avoid triggering mic permissions on page load.
function VoiceSession({ agentId, onClose }: { agentId: string; onClose: () => void }) {
  const hasConnected = useRef(false);
  const { status, mode, startSession, endSession } = useConversation();

  const isConnecting = status === 'connecting';
  const isConnected  = status === 'connected';
  const isListening  = isConnected && mode === 'listening';

  useEffect(() => {
    async function start() {
      try {
        const res = await fetch(`/api/elevenlabs-token?agentId=${encodeURIComponent(agentId)}`);
        if (res.ok) {
          const { signedUrl } = (await res.json()) as { signedUrl: string };
          startSession({ signedUrl });
        } else {
          startSession({ agentId });
        }
      } catch {
        startSession({ agentId });
      }
    }
    start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-close the voice panel when the agent ends the session remotely.
  useEffect(() => {
    if (status === 'connected') hasConnected.current = true;
    if (status === 'disconnected' && hasConnected.current) onClose();
  }, [status, onClose]);

  const handleClick = useCallback(() => {
    if (isConnected) endSession();
    else onClose();
  }, [isConnected, endSession, onClose]);

  return (
    <button
      className={`voice-btn${isConnected ? ' voice-btn--active' : ''}`}
      onClick={handleClick}
      disabled={isConnecting}
      aria-label={isConnected ? 'پایان گفتگوی صوتی' : 'مشاور صوتی'}
    >
      {isConnecting ? (
        <><span className="voice-spinner" aria-hidden="true" />در حال اتصال...</>
      ) : isConnected ? (
        <>
          <span className={isListening ? 'voice-mic--pulse' : undefined} aria-hidden="true">
            <Icon name="mic" size={17} />
          </span>
          {isListening ? 'در حال شنیدن...' : 'در حال پاسخ...'}
        </>
      ) : (
        <><Icon name="mic" size={17} />مشاور صوتی</>
      )}
    </button>
  );
}

// ── ChatManager ─────────────────────────────────────────────────────────────
export function ChatManager() {
  const pathname = usePathname();
  const [active, setActive] = useState<ActiveChat>(null);

  const voiceAgentId = VOICE_ROUTES[pathname] ?? null;
  const showVoice    = voiceAgentId !== null;
  const ctx          = textContext(pathname);
  const isEnglish    = ctx === 'english';

  const close       = useCallback(() => setActive(null), []);
  const toggleText  = useCallback(() => setActive(a => (a === 'text'  ? null : 'text')),  []);
  const toggleVoice = useCallback(() => setActive(a => (a === 'voice' ? null : 'voice')), []);

  return (
    <div className="chat-manager" dir="rtl">
      {/* ── Text chat panel (appears above buttons) ── */}
      {active === 'text' && <TextChatbot context={ctx} onClose={close} />}

      {/* ── Button stack ── */}
      <div className="chat-manager-btns">
        {/* Voice button — homepage & English dept only */}
        {showVoice && (
          active === 'voice' ? (
            <ConversationProvider>
              <VoiceSession agentId={voiceAgentId!} onClose={close} />
            </ConversationProvider>
          ) : (
            <button
              className="voice-btn"
              onClick={toggleVoice}
              aria-label={isEnglish ? 'English Speaking Room' : 'مشاور صوتی'}
            >
              <Icon name="mic" size={17} />
              {isEnglish ? 'Speaking Room' : 'مشاور صوتی'}
            </button>
          )
        )}

        {/* Text chat button — always visible */}
        <button
          className={`chat-btn-text${active === 'text' ? ' chat-btn-text--close' : ''}`}
          onClick={active === 'text' ? close : toggleText}
          aria-label={active === 'text' ? 'بستن گفتگو' : 'مشاوره هوشمند'}
        >
          <Icon name="chat" size={17} />
          {active === 'text'
            ? (isEnglish ? 'Close' : 'بستن')
            : (isEnglish ? 'Smart advisor' : 'مشاوره هوشمند')}
        </button>
      </div>
    </div>
  );
}
