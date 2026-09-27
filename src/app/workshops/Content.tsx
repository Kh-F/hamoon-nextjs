'use client';

import { useRef, useState, FormEvent } from 'react';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';
import PersonalInfoFields from './PersonalInfoFields';

interface Props {
  workshopTitle?: string;
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
  grade: 'پایه تحصیلی',
  gradePh: 'انتخاب کنید',
  msg: 'پیام (اختیاری)',
  msgPh: 'سؤال یا نکته‌ای برای ما دارید؟',
  submit: 'ثبت‌نام در کارگاه',
  success: '.ثبت‌نام شما با موفقیت انجام شد! به‌زودی با شما تماس می‌گیریم.',
  error: 'خطایی در ثبت اطلاعات رخ داد. لطفاً دوباره تلاش کنید.',
  reset: 'ثبت‌نام نفر دیگر',
};

export default function WorkshopRegisterForm({ workshopTitle }: Props) {
  const { c } = useLang();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState('');
  const [grade, setGrade] = useState('');

  const nameRef     = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef    = useRef<HTMLInputElement>(null);
  const emailRef    = useRef<HTMLInputElement>(null);
  const msgRef      = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:         nameRef.current?.value     ?? '',
          lastName:     lastNameRef.current?.value ?? '',
          gender,
          phone:        phoneRef.current?.value    ?? '',
          email:        emailRef.current?.value    ?? '',
          ageCategory:  age !== null ? c.ages[age] : '',
          grade,
          message:      msgRef.current?.value ?? '',
          workshopTitle,
          sourcePage: 'Workshops',
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setErrorMessage(L.error);
      }
    } catch (err) {
      setErrorMessage(L.error);
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSent(false);
    setErrorMessage('');
    setAge(null);
    setGender('');
    setGrade('');
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
            grade={grade}
            onGradeChange={setGrade}
          />

          {errorMessage && (
            <p
              className="error-msg"
              style={{
                color: '#ff4d4f',
                marginTop: '10px',
                fontSize: '14px',
              }}
            >
              {errorMessage}
            </p>
          )}

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? '…' : L.submit}
          </button>
        </form>
      )}
    </div>
  );
}