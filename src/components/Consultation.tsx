'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import Icon from './Icon';

export default function Consultation() {
  const { c } = useLang();
  const { formTitle, formLead, contact, form, ages } = c;

  const [sent, setSent] = useState(false);
  const [age, setAge] = useState<number | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  function handleReset() {
    setSent(false);
    setAge(null);
  }

  return (
    <section id="consult">
      <div className="section">
        <div className="consult-box">
          <div className="consult-blob" />

          {/* Left: info panel */}
          <div className="consult-info">
            <Image
              src="/logo.png.png"
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
              {sent ? (
                <div className="form-success">
                  <span className="success-icon">
                    <Icon name="check" size={34} />
                  </span>
                  <p className="success-msg">{form.success}</p>
                  <button type="button" className="btn-reset" onClick={handleReset}>
                    {form.reset}
                  </button>
                </div>
              ) : (
                <form className="form-fields" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="hm-name" className="form-label">{form.name}</label>
                    <input
                      id="hm-name"
                      type="text"
                      required
                      placeholder={form.namePh}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hm-phone" className="form-label">{form.phone}</label>
                    <input
                      id="hm-phone"
                      type="text"
                      required
                      placeholder={form.phonePh}
                      className="form-input"
                    />
                  </div>

                  <div className="age-group">
                    <span className="age-label">{form.age}</span>
                    <div className="age-btns" role="radiogroup" aria-label={form.age}>
                      {ages.map((label, i) => (
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
                    <label htmlFor="hm-msg" className="form-label">{form.msg}</label>
                    <textarea
                      id="hm-msg"
                      rows={3}
                      placeholder={form.msgPh}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-submit">{form.submit}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
