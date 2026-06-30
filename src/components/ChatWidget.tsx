'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: '/api/chat',
  });

  const isLoading = status === 'streaming' || status === 'submitted';

  // Auto-scroll to latest message
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>

      {/* ── Chat window ── */}
      {open && (
        <div style={{
          width: 'min(380px, calc(100vw - 2rem))',
          height: '520px',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--surface-card)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
        }}>

          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.875rem 1rem',
            background: 'var(--blue-900)',
            flexShrink: 0,
          }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--blue-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Bot size={18} color="#fff" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: 'var(--fs-sm)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>دستیار هامون</p>
              <p style={{ margin: 0, fontSize: 'var(--fs-xs)', color: 'var(--blue-200)', lineHeight: 1.4 }}>Hamoon Academy Assistant</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: 'rgba(255,255,255,.12)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'background .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.22)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.12)')}
            >
              <X size={16} color="#fff" />
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
                <Bot size={36} style={{ margin: '0 auto 0.5rem', opacity: 0.4 }} />
                <p style={{ fontSize: 'var(--fs-sm)', margin: 0 }}>سلام! چطور می‌تونم کمکتون کنم؟</p>
                <p style={{ fontSize: 'var(--fs-xs)', margin: '0.25rem 0 0', color: 'var(--text-faint)' }}>Hi! How can I help you?</p>
              </div>
            )}

            {messages.map(msg => {
              const isUser = msg.role === 'user';
              return (
                <div key={msg.id} style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexDirection: isUser ? 'row-reverse' : 'row',
                  alignItems: 'flex-end',
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: isUser ? 'var(--color-accent)' : 'var(--blue-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {isUser
                      ? <User size={14} color="#fff" />
                      : <Bot size={14} color="var(--blue-700)" />
                    }
                  </div>

                  {/* Bubble */}
                  <div style={{
                    maxWidth: '75%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: isUser
                      ? 'var(--radius-lg) var(--radius-md) var(--radius-xs) var(--radius-lg)'
                      : 'var(--radius-lg) var(--radius-md) var(--radius-lg) var(--radius-xs)',
                    background: isUser ? 'var(--blue-600)' : 'var(--surface-sunken)',
                    color: isUser ? '#fff' : 'var(--text-body)',
                    fontSize: 'var(--fs-sm)',
                    lineHeight: 'var(--lh-relaxed)',
                    wordBreak: 'break-word',
                  }}>
                    {msg.content}
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--blue-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Bot size={14} color="var(--blue-700)" />
                </div>
                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-lg) var(--radius-md) var(--radius-lg) var(--radius-xs)',
                  background: 'var(--surface-sunken)',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{
                      width: 6, height: 6,
                      borderRadius: '50%',
                      background: 'var(--text-muted)',
                      display: 'inline-block',
                      animation: 'hmPulse 1.2s ease-in-out infinite',
                      animationDelay: `${i * 0.2}s`,
                    }} />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              borderTop: '1px solid var(--border-subtle)',
              background: 'var(--surface-card)',
              flexShrink: 0,
            }}
          >
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="پیام خود را بنویسید… / Type your message…"
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                border: '1.5px solid var(--border-default)',
                borderRadius: 'var(--radius-pill)',
                fontSize: 'var(--fs-sm)',
                color: 'var(--text-body)',
                background: 'var(--surface-sunken)',
                outline: 'none',
                transition: 'border-color .15s',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-default)')}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send"
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: isLoading || !input.trim() ? 'var(--slate-200)' : 'var(--color-primary)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                flexShrink: 0,
                transition: 'background .15s',
              }}
            >
              {isLoading
                ? <Loader2 size={16} color="var(--text-muted)" style={{ animation: 'spin 1s linear infinite' }} />
                : <Send size={16} color={input.trim() ? '#fff' : 'var(--text-muted)'} />
              }
            </button>
          </form>
        </div>
      )}

      {/* ── FAB toggle button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--blue-600)',
          border: 'none',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background .15s, transform .15s',
          flexShrink: 0,
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--blue-700)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--blue-600)')}
        onMouseDown={e => (e.currentTarget.style.transform = 'scale(.94)')}
        onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {open
          ? <X size={24} color="#fff" />
          : <MessageCircle size={24} color="#fff" />
        }
      </button>

      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
