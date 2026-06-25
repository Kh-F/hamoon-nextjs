'use client';

import { useCallback, useState } from 'react';
import { ConversationProvider, useConversation } from '@elevenlabs/react';
import Icon from './Icon';

interface Props {
  agentId: string;
  buttonText: string;
  title: string;
  description: string;
}

function VoiceWidget({ agentId, buttonText, title, description }: Props) {
  const [partialText, setPartialText] = useState<string>('');

  const { status, mode, message, startSession, endSession, isListening } = useConversation({
    onAgentChatResponsePart: (props: { partialText?: string; text?: string }) => {
      setPartialText(props.partialText ?? props.text ?? '');
    },
    onModeChange: () => {
      setPartialText('');
    },
  });

  const handleToggle = useCallback(async () => {
    if (status === 'connected') {
      endSession();
      return;
    }
    if (status !== 'disconnected') return;
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
  }, [status, agentId, startSession, endSession]);

  const isConnecting = status === 'connecting';
  const isConnected  = status === 'connected';

  const displayText = partialText || message || '';

  return (
    <div className="dept-voice-section">
      <div className="dept-voice-card" dir="rtl">
        <div className="dept-voice-card-icon">
          <Icon name="mic" size={28} />
        </div>

        <h3 className="dept-voice-card-title">{title}</h3>
        <p className="dept-voice-card-desc">{description}</p>

        {/* Live transcript micro-card */}
        {isConnected && (
          <div className="dept-voice-transcript" aria-live="polite" aria-atomic="false">
            <span
              className={`dept-voice-transcript-dot${isListening ? ' dept-voice-transcript-dot--listen' : ''}`}
            />
            <span className={`dept-voice-transcript-text${isListening && !displayText ? ' dept-voice-transcript-text--muted' : ''}`}>
              {displayText || (isListening ? 'در حال گوش دادن…' : '…')}
            </span>
          </div>
        )}

        {/* Action button */}
        <button
          type="button"
          className={`dept-voice-btn${isConnected ? ' dept-voice-btn--active' : ''}`}
          onClick={handleToggle}
          disabled={isConnecting}
          aria-label={buttonText}
        >
          {isConnecting ? (
            <>
              <span className="voice-spinner" aria-hidden="true" />
              در حال اتصال...
            </>
          ) : isConnected ? (
            <>
              <span className={isListening ? 'voice-mic--pulse' : undefined} aria-hidden="true">
                <Icon name="mic" size={18} />
              </span>
              {isListening ? 'در حال شنیدن...' : 'در حال پاسخ...'}
            </>
          ) : (
            <>
              <Icon name="mic" size={18} />
              {buttonText}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function DeptVoiceAssistant(props: Props) {
  return (
    <ConversationProvider>
      <VoiceWidget {...props} />
    </ConversationProvider>
  );
}
