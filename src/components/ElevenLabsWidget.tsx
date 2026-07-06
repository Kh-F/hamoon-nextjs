'use client';

import React, { useState } from 'react';
import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
} from '@elevenlabs/react';
import { MessageCircle } from 'lucide-react';

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
          boxShadow: isConnected
            ? '0 4px 15px rgba(225, 29, 72, 0.35)'
            : '0 4px 15px rgba(37, 99, 235, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          zIndex: 9999,
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {isOpen ? '✕' : <MessageCircle size={28} color="white" />}
      </button>

      {!isOpen && (
        <span style={{
          position: 'fixed',
          bottom: '45px',
          right: '100px',
          backgroundColor: 'white',
          padding: '8px 15px',
          borderRadius: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#333',
          zIndex: 9999,
        }}>
          پشتیبان هامون
        </span>
      )}

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
  if (!agentId) return null;

  return (
    <ConversationProvider textOnly={true}>
      <ChatBubble agentId={agentId} />
    </ConversationProvider>
  );
}
