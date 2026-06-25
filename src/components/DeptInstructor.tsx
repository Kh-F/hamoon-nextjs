'use client';

import Link from 'next/link';
import Icon from './Icon';

interface Props {
  name: string;
  role: string;
  bio: string;
  creds: readonly string[];
  skills: readonly string[];
  linkedin: string;
  initials: string;
  bg: string;
  ink: string;
  linkedinLabel: string;
  sectionLabel: string;
}

export default function DeptInstructor({
  name, role, bio, creds, skills, linkedin,
  initials, bg, ink, linkedinLabel, sectionLabel,
}: Props) {
  return (
    <div className="dept-instructor-wrap">
      <p className="dept-section-label">{sectionLabel}</p>
      <div className="instructor-profile">
        <div className="ip-avatar" style={{ background: bg, color: ink }}>{initials}</div>
        <div className="ip-body">
          <h3 className="ip-name">{name}</h3>
          <div className="ip-role">{role}</div>
          {creds.length > 0 && (
            <div className="ip-creds">
              {creds.map(c => <span key={c} className="ip-cred">{c}</span>)}
            </div>
          )}
          <p className="ip-bio">{bio}</p>
          {skills.length > 0 && (
            <div className="ip-skills">
              {skills.map(s => <span key={s} className="ip-skill">{s}</span>)}
            </div>
          )}
          {linkedin && linkedin !== '#' && (
            <div className="ip-actions">
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="founder-link founder-link--linkedin"
              >
                <Icon name="linkedin" size={14} />
                {linkedinLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
