'use client';

import { useRef, useState, FormEvent } from 'react';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

interface Props {
  workshopTitle: string;
}

const L = {
  workshopLabel: 'نام کارگاه',
  name: 'نام و نام خانوادگی',
  namePh: 'مثلاً سارا محمدی',
  phone: 'شماره تماس',
  phonePh: '۰۹۱۲ ۳۴۵ ۶۷۸۹',
  email: 'ایمیل (اختیاری)',
  emailPh: 'example@email.com',
  age: 'سن / رده سنی',
  msg: 'پیام (اختیاری)',
  msgPh: 'سؤال یا نکته‌ای برای ما دارید؟',
  submit: 'ثبت‌نام در کارگاه',
  success: 'ثبت‌نام شما با موفقیت انجام شد! به‌زودی اطلاعات تکمیلی کارگاه برایتان ارسال می‌شود.',
  reset: 'ثبت‌نام نفر دیگر',
};

export default function WorkshopRegisterForm({ workshopTitle }: Props) {
  const { c } = useLang();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState<number | null>(null);

  const nameRef  = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef   = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:          nameRef.current?.value  ?? '',
          phone:         phoneRef.current?.value ?? '',
          email:         emailRef.current?.value ?? '',
          ageGroup:      age !== null ? c.ages[age] : '',
          message:       msgRef.current?.value   ?? '',
          workshopTitle,
          department: `Workshop: ${workshopTitle}`,
        }),
      });
    } finally {
      setLoading(false);
      setSent(true);
    }
  }

  function handleReset() {
    setSent(false);
    setAge(null);
  }

  return (
    <div className="form-card">
      {sent ? (
        <div className="form-success">
          <span className="success-icon">
            <Icon name="check" size={34} />
          </span>
          <p className="success-msg">{L.success}</p>
          <button type="button" className="btn-reset" onClick={handleReset}>
            {L.reset}
          </button>
        </div>
      ) : (
        <form className="form-fields" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">{L.workshopLabel}</label>
            <input
              type="text"
              value={workshopTitle}
              readOnly
              disabled
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="wr-name" className="form-label">{L.name}</label>
            <input
              id="wr-name"
              ref={nameRef}
              type="text"
              required
              placeholder={L.namePh}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="wr-phone" className="form-label">{L.phone}</label>
            <input
              id="wr-phone"
              ref={phoneRef}
              type="text"
              required
              placeholder={L.phonePh}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="wr-email" className="form-label">{L.email}</label>
            <input
              id="wr-email"
              ref={emailRef}
              type="email"
              placeholder={L.emailPh}
              className="form-input"
            />
          </div>

          <div className="age-group">
            <span className="age-label">{L.age}</span>
            <div className="age-btns" role="radiogroup" aria-label={L.age}>
              {c.ages.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  role="radio"
                  aria-checked={age === i}
                  className={`age-btn${age === i ? ' active' : ''}`}
                  onClick={() => setAge(i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="wr-msg" className="form-label">{L.msg}</label>
            <textarea
              id="wr-msg"
              ref={msgRef}
              rows={3}
              placeholder={L.msgPh}
              className="form-textarea"
            />
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? '…' : L.submit}
          </button>
        </form>
      )}
    </div>
  );
}
