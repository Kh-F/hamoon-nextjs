'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { ConversationProvider, useConversation } from '@elevenlabs/react';
import Icon from './Icon';

const DEFAULT_AGENT_ID = 'agent_6901kvx2pxa4evqsz6bfm578n0a0';

interface Props {
  agentId?: string;
}

// Mounts only after user clicks — avoids triggering mic permissions on page load.
function VoiceSession({ agentId, onClose }: { agentId: string; onClose: () => void }) {
  const hasConnected = useRef(false);
  const { status, mode, startSession, endSession } = useConversation();

  const isConnecting = status === 'connecting';
  const isConnected  = status === 'connected';
  const isListening  = isConnected && mode === 'listening';

  // Auto-start as soon as this component mounts.
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

  // Close the floating button if the agent ends the session remotely.
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
      aria-label={isConnected ? 'پایان گفتگو' : 'گفتگو با مشاور هوشمند هامون'}
    >
      {isConnecting ? (
        <>
          <span className="voice-spinner" aria-hidden="true" />
          در حال اتصال...
        </>
      ) : isConnected ? (
        <>
          <span className={isListening ? 'voice-mic--pulse' : undefined} aria-hidden="true">
            <Icon name="mic" size={17} />
          </span>
          {isListening ? 'در حال شنیدن...' : 'در حال پاسخ...'}
        </>
      ) : (
        <>
          <Icon name="chat" size={17} />
          گفتگو با مشاور هوشمند
        </>
      )}
    </button>
  );
}

export function HamoonVoiceAssistant({ agentId = DEFAULT_AGENT_ID }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="voice-assistant" dir="rtl">
      {open ? (
        <ConversationProvider>
          <VoiceSession agentId={agentId} onClose={() => setOpen(false)} />
        </ConversationProvider>
      ) : (
        <button
          className="voice-btn"
          onClick={() => setOpen(true)}
          aria-label="گفتگو با مشاور هوشمند هامون"
        >
          <Icon name="chat" size={17} />
          گفتگو با مشاور هوشمند
        </button>
      )}
    </div>
  );
}
