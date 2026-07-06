'use client';

import React, { useState } from 'react';
import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
} from '@elevenlabs/react';

function ChatBubble({ agentId }: { agentId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { startSession, endSession } = useConversationControls();
  const { status } = useConversationStatus();

  const isConnected = status === 'connected';

  return (
    <>
      <button
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
            startSession({ agentId });
          } else {
            setIsOpen(false);
            endSession();
          }
        }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: isConnected ? '#e11d48' : '#2563eb',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 9999,
        }}
      >
        {isOpen ? '✕' : ''}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          width: '320px',
          height: '450px',
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 9998,
        }}>
          <div style={{ padding: '15px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
            پشتیبان هامون
          </div>

          <div style={{ flex: 1, padding: '15px', overflowY: 'auto' }}>
            <p style={{ color: '#475569' }}>سلام! چطور می‌توانم در بخش ریاضی به شما کمک کنم؟</p>
            <div style={{ fontSize: 'small', color: '#666' }}>
              وضعیت: {status === 'connected' ? 'آماده چت' : 'در حال اتصال...'}
            </div>
          </div>

          <div style={{ padding: '10px', borderTop: '1px solid #eee' }}>
            <input
              type="text"
              placeholder="پیام خود را بنویسید..."
              style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #ddd' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  console.log('Message sent:', e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function ElevenLabsWidget({ agentId }: { agentId: string }) {
  return (
    <ConversationProvider textOnly={true}>
      <ChatBubble agentId={agentId} />
    </ConversationProvider>
  );
}
