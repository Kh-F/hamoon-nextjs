'use client';

import { useRef, useState, FormEvent } from 'react';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';
import PersonalInfoFields from './PersonalInfoFields';

interface Props {
  workshopTitle: string;
}

const L = {
  workshopLabel: 'نام کارگاه',
  name: 'نام',
  namePh: 'مثلاً سارا',
  lastName: 'نام خانوادگی',
  lastNamePh: 'مثلاً محمدی',
  gender: 'جنسیت',
  genderPh: 'انتخاب کنید',
  genderFemale: 'خانم',
  genderMale: 'آقا',
  phone: 'شماره تماس',
  phonePh: '۰۹۱۲ ۳۴۵ ۶۷۸۹',
  email: 'ایمیل',
  emailPh: 'example@email.com',
  age: 'رده سنی',
  agePh: 'انتخاب کنید',
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
  const [gender, setGender] = useState('');

  const nameRef     = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef    = useRef<HTMLInputElement>(null);
  const emailRef    = useRef<HTMLInputElement>(null);
  const msgRef      = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      // The Workshops sheet has no dedicated "workshop" column, so fold the
      // workshop title into the message field to keep it from getting lost.
      const userMsg = msgRef.current?.value ?? '';
      const message = `کارگاه: ${workshopTitle}${userMsg ? `\n\n${userMsg}` : ''}`;

      await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:          nameRef.current?.value     ?? '',
          lastName:      lastNameRef.current?.value ?? '',
          gender,
          phone:         phoneRef.current?.value    ?? '',
          email:         emailRef.current?.value    ?? '',
          ageCategory:   age !== null ? c.ages[age] : '',
          message,
          workshopTitle,
          sourcePage: 'Workshops',
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
    setGender('');
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

          <PersonalInfoFields
            idPrefix="wr"
            labels={L}
            ages={c.ages}
            nameRef={nameRef}
            lastNameRef={lastNameRef}
            phoneRef={phoneRef}
            emailRef={emailRef}
            messageRef={msgRef}
            gender={gender}
            onGenderChange={setGender}
            ageIndex={age}
            onAgeChange={setAge}
          />

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? '…' : L.submit}
          </button>
        </form>
      )}
    </div>
  );
}
