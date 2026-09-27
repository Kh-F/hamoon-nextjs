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
  const [loading, setLoading] = useState(false);
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

    try {
      await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:        nameRef.current?.value     ?? '',
          lastName:    lastNameRef.current?.value ?? '',
          gender,
          phone:       phoneRef.current?.value    ?? '',
          email:       emailRef.current?.value     ?? '',
          ageCategory: age !== null ? ages[age] : '',
          grade,
          message:     msgRef.current?.value      ?? '',
          sourcePage:  department,
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
    setGrade('');
  }

  // Add the new education-grade labels required by PersonalInfoFields.
  const personalInfoLabels = {
    ...form,
    grade: 'پایه تحصیلی',
    gradePh: 'انتخاب کنید',
  };

  // Success message includes the department name so the user sees which
  // department their request was submitted to.
  const successMsg = department !== 'Home Page'
    ? `${form.success.replace(/[.!]$/, '')} (${department}).`
    : form.success;

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

                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? '…' : form.submit}
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