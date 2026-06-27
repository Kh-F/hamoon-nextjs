'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Props {
  context?: 'general' | 'english';
  onClose: () => void;
}

const WELCOME: Record<string, string> = {
  general: 'سلام! من مشاور هوشمند آکادمی هامون هستم. درباره دوره‌ها، ثبت‌نام یا هر سؤالی می‌توانم کمک کنم.',
  english: "Hi! I'm your Hamoon English mentor. Let's practise together — ask me anything or just start a conversation!",
};

const PLACEHOLDER: Record<string, string> = {
  general: 'پیام خود را بنویسید...',
  english: 'Type a message…',
};

const SEND_LABEL: Record<string, string> = {
  general: 'ارسال',
  english: 'Send',
};

const ERROR_MSG: Record<string, string> = {
  general: 'خطایی رخ داد. لطفاً دوباره تلاش کنید.',
  english: 'Something went wrong. Please try again.',
};

export function TextChatbot({ context = 'general', onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const isEn = context === 'english';

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg], context }),
      });
      const { content, error } = (await res.json()) as { content?: string; error?: string };
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: content ?? (error ? ERROR_MSG[context] : '…') },
      ]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: ERROR_MSG[context] }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, context]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    [send],
  );

  return (
    <div className="text-chat-panel" dir={isEn ? 'ltr' : 'rtl'}>
      <div className="text-chat-header">
        <span className="text-chat-header-title">
          {isEn ? 'English Speaking Room' : 'مشاوره هوشمند'}
        </span>
        <button className="text-chat-close" onClick={onClose} aria-label="بستن">✕</button>
      </div>

      <div className="text-chat-messages">
        <p className="text-chat-welcome">{WELCOME[context]}</p>
        {messages.map((m, i) => (
          <div key={i} className={`text-chat-msg text-chat-msg--${m.role}`}>
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="text-chat-msg text-chat-msg--assistant text-chat-msg--loading">
            <span className="voice-spinner" aria-hidden="true" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="text-chat-input-row">
        <textarea
          ref={inputRef}
          className="text-chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={PLACEHOLDER[context]}
          rows={1}
          disabled={loading}
          dir={isEn ? 'ltr' : 'rtl'}
        />
        <button
          className="text-chat-send"
          onClick={send}
          disabled={loading || !input.trim()}
        >
          {SEND_LABEL[context]}
        </button>
      </div>
    </div>
  );
}
