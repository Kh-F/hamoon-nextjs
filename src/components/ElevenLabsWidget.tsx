'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
} from '@elevenlabs/react';
import { MessageCircle } from 'lucide-react';

const agentMapping: Record<string, string> = {
  '/': 'agent_6901kvx2pxa4evqsz6bfm578n0a0',
  '/departments/english': 'agent_1001kw4vb0hjf45ayky9a9js9hnv',
  '/departments/math': 'agent_0001kw4wt7v5f6v80qda85r31pv8',
  '/departments/mathematics': 'agent_0001kw4wt7v5f6v80qda85r31pv8',
  '/departments/workshops': 'agent_9301kw4xp6sjf9h8p82vh766myv6',
  '/workshops': 'agent_9301kw4xp6sjf9h8p82vh766myv6',
  '/departments/ai': 'agent_7301kw4x38zyeektfz5jez981720',
};

function ChatBubble({ agentId }: { agentId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { startSession, endSession } = useConversationControls();
  const { status } = useConversationStatus();

  return (
    <>
      <button
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
            startSession({ agentId: agentId });
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
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
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

      {isOpen && (
        <div
          style={{
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
          }}
        >
          <div
            style={{
              padding: '15px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MessageCircle size={18} color="#2563eb" />
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
  const pathname = usePathname();
  const resolvedAgentId = agentMapping[pathname] ?? agentId;

  if (!resolvedAgentId) return null;

  return (
    <ConversationProvider textOnly={true}>
      <ChatBubble agentId={resolvedAgentId} />
    </ConversationProvider>
  );
}
