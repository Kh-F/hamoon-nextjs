'use client';

import type { RefObject } from 'react';

export interface PersonalInfoLabels {
  name: string; namePh: string;
  lastName: string; lastNamePh: string;
  gender: string; genderPh: string; genderFemale: string; genderMale: string;
  phone: string; phonePh: string;
  email: string; emailPh: string;
  age: string; agePh: string;
  grade: string; gradePh: string;
  msg: string; msgPh: string;
}

interface Props {
  idPrefix: string;
  labels: PersonalInfoLabels;
  ages: string[];
  nameRef: RefObject<HTMLInputElement | null>;
  lastNameRef: RefObject<HTMLInputElement | null>;
  phoneRef: RefObject<HTMLInputElement | null>;
  emailRef: RefObject<HTMLInputElement | null>;
  messageRef: RefObject<HTMLTextAreaElement | null>;
  gender: string;
  onGenderChange: (value: string) => void;
  ageIndex: number | null;
  onAgeChange: (index: number) => void;
  grade: string;
  onGradeChange: (value: string) => void;
}

/** The shared field set (name, last name, gender, phone, email, age, grade, message) used by every form on the site. */
export default function PersonalInfoFields({
  idPrefix, labels, ages,
  nameRef, lastNameRef, phoneRef, emailRef, messageRef,
  gender, onGenderChange, ageIndex, onAgeChange,
  grade, onGradeChange,
}: Props) {
  return (
    <>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`${idPrefix}-name`} className="form-label">{labels.name}</label>
          <input
            id={`${idPrefix}-name`}
            ref={nameRef}
            type="text"
            required
            placeholder={labels.namePh}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor={`${idPrefix}-last-name`} className="form-label">{labels.lastName}</label>
          <input
            id={`${idPrefix}-last-name`}
            ref={lastNameRef}
            type="text"
            required
            placeholder={labels.lastNamePh}
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor={`${idPrefix}-gender`} className="form-label">{labels.gender}</label>
        <select
          id={`${idPrefix}-gender`}
          required
          value={gender}
          onChange={e => onGenderChange(e.target.value)}
          className="form-input form-select"
        >
          <option value="" disabled>{labels.genderPh}</option>
          <option value={labels.genderFemale}>{labels.genderFemale}</option>
          <option value={labels.genderMale}>{labels.genderMale}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor={`${idPrefix}-phone`} className="form-label">{labels.phone}</label>
        <input
          id={`${idPrefix}-phone`}
          ref={phoneRef}
          type="tel"
          required
          placeholder={labels.phonePh}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${idPrefix}-email`} className="form-label">{labels.email}</label>
        <input
          id={`${idPrefix}-email`}
          ref={emailRef}
          type="email"
          placeholder={labels.emailPh}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor={`${idPrefix}-age`} className="form-label">{labels.age}</label>
        <select
          id={`${idPrefix}-age`}
          required
          value={ageIndex === null ? '' : ageIndex}
          onChange={e => onAgeChange(Number(e.target.value))}
          className="form-input form-select"
        >
          <option value="" disabled>{labels.agePh}</option>
          {ages.map((label, i) => (
            <option key={label} value={i}>{label}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor={`${idPrefix}-grade`} className="form-label">{labels.grade}</label>
        <select
          id={`${idPrefix}-grade`}
          required
          value={grade}
          onChange={e => onGradeChange(e.target.value)}
          className="form-input form-select"
        >
          <option value="" disabled>{labels.gradePh}</option>
          <option value="پیش‌دبستانی">پیش‌دبستانی</option>
          <option value="اول ابتدایی">اول ابتدایی</option>
          <option value="دوم ابتدایی">دوم ابتدایی</option>
          <option value="سوم ابتدایی">سوم ابتدایی</option>
          <option value="چهارم ابتدایی">چهارم ابتدایی</option>
          <option value="پنجم ابتدایی">پنجم ابتدایی</option>
          <option value="ششم ابتدایی">ششم ابتدایی</option>
          <option value="هفتم">هفتم</option>
          <option value="هشتم">هشتم</option>
          <option value="نهم">نهم</option>
          <option value="دهم">دهم</option>
          <option value="یازدهم">یازدهم</option>
          <option value="دوازدهم">دوازدهم</option>
          <option value="دانشجو">دانشجو</option>
          <option value="فارغ‌التحصیل">فارغ‌التحصیل</option>
          <option value="سایر">سایر</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor={`${idPrefix}-msg`} className="form-label">{labels.msg}</label>
        <textarea
          id={`${idPrefix}-msg`}
          ref={messageRef}
          rows={3}
          placeholder={labels.msgPh}
          className="form-textarea"
        />
      </div>
    </>
  );
}