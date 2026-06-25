'use client';

import { useCallback } from 'react';
import { ConversationProvider, useConversation } from '@elevenlabs/react';
import Icon from './Icon';

const AGENT_ID = 'agent_6901kvx2pxa4evqsz6bfm578n0a0';

function VoiceButton() {
  const { status, mode, startSession, endSession } = useConversation();

  const handleToggle = useCallback(async () => {
    if (status === 'connected') {
      endSession();
      return;
    }
    if (status !== 'disconnected') return;

    try {
      const res = await fetch('/api/elevenlabs-token');
      if (res.ok) {
        const { signedUrl } = (await res.json()) as { signedUrl: string };
        startSession({ signedUrl });
      } else {
        startSession({ agentId: AGENT_ID });
      }
    } catch {
      startSession({ agentId: AGENT_ID });
    }
  }, [status, startSession, endSession]);

  const isConnecting = status === 'connecting';
  const isConnected  = status === 'connected';
  const isListening  = isConnected && mode === 'listening';

  return (
    <div className="voice-assistant" dir="rtl">
      <button
        className={`voice-btn${isConnected ? ' voice-btn--active' : ''}`}
        onClick={handleToggle}
        disabled={isConnecting}
        aria-label="گفتگو با مشاور هوشمند هامون"
      >
        {isConnecting ? (
          <>
            <span className="voice-spinner" aria-hidden="true" />
            در حال اتصال...
          </>
        ) : isConnected ? (
          <>
            <span className={isListening ? 'voice-mic--pulse' : undefined}>
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
    </div>
  );
}

export function HamoonVoiceAssistant() {
  return (
    <ConversationProvider>
      <VoiceButton />
    </ConversationProvider>
  );
}
