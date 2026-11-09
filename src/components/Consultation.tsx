'use client';

import { useRef, useState, FormEvent } from 'react';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';
import PersonalInfoFields from './PersonalInfoFields';

interface Props {
  /** Source page label sent to the automation workflow (e.g. 'English', 'Math', 'AI', 'Workshops'). */
  department?: string;
}

export default function Consultation({ department = 'Home Page' }: Props) {
  const { c } = useLang();
  const { formTitle, formLead, contact, form, ages } = c;

  const [sent, setSent] = useState(false);
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState('');
  const [grade, setGrade] = useState('');

  const nameRef     = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef    = useRef<HTMLInputElement>(null);
  const emailRef    = useRef<HTMLInputElement>(null);
  const msgRef      = useRef<HTMLTextAreaElement>(null);

 function handleSubmit(e: FormEvent) {
  e.preventDefault();
  setSent(true);
}

  function handleReset() {
    setSent(false);
    setAge(null);
    setGender('');
    setGrade('');
  }

  // Add the new education-grade labels required by PersonalInfoFields.
  const personalInfoLabels = {
    ...form,
    grade: 'پایه تحصیلی',
    gradePh: 'انتخاب کنید',
  };

  

const successMsg = (
  <>
    متأسفانه در حال حاضر امکان تکمیل ثبت‌نام از طریق این فرم وجود ندارد.
    برای ثبت‌نام و دریافت راهنمایی می‌توانید از طریق شماره تماس{' '}
    <a href="tel:09129474553" dir="ltr">۰۹۱۲۹۴۷۴۵۵۳</a>
    {' '}یا ایمیل{' '}
    <a href="mailto:hamooninstitute.info@gmail.com">
      hamooninstitute.info@gmail.com
    </a>
    {' '}با مؤسسه هامون در ارتباط باشید.
  </>
);


  return (
    <section id="consult">
      <div className="section">
        <div className="consult-box">
          <div className="consult-blob" />

          {/* Left: info panel */}
          <div className="consult-info">
            <Image
              src="/logo.png"
              alt=""
              width={80}
              height={80}
              className="img-logo-consult"
            />
            <h2 className="consult-title">{formTitle}</h2>
            <p className="consult-lead">{formLead}</p>

            <div className="contact-items">
              {contact.map(ci => (
                <div key={ci.label} className="contact-item">
                  <span className="contact-icon">
                    <Icon name={ci.ic} size={20} />
                  </span>
                  <div>
                    <div className="contact-label">{ci.label}</div>
                    <div className="contact-value">{ci.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form panel */}
          <div className="consult-form-wrap">
            <div className="form-card">

              {/* Department tag — visible when browsing a specific dept page */}
              {department !== 'Home Page' && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginBottom: 'var(--space-4)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--blue-50)',
                  border: '1px solid var(--blue-200)',
                  fontSize: 'var(--fs-xs)', fontWeight: 700,
                  color: 'var(--blue-700)',
                }}>
                  <Icon name="graduation" size={13} />
                  {department}
                </div>
              )}

              {sent ? (
                <div className="form-success">
                  <span className="success-icon">
                    <Icon name="check" size={34} />
                  </span>
                  <p className="success-msg">{successMsg}</p>
                  <button type="button" className="btn-reset" onClick={handleReset}>
                    {form.reset}
                  </button>
                </div>
              ) : (
                <form className="form-fields" onSubmit={handleSubmit}>
                  <PersonalInfoFields
                    idPrefix="hm"
                    labels={personalInfoLabels}
                    ages={ages}
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

                  <button type="submit" className="btn-submit">
                  {form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}