import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, ageGroup, message, department } = body as {
    name: string;
    phone: string;
    ageGroup: string;
    message: string;
    department: string;
  };

  if (!name || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Log the submission — wire an email provider (e.g. Resend) here when ready
  console.log('[Consult] New booking request', {
    department,
    name,
    phone,
    ageGroup,
    message,
    receivedAt: new Date().toISOString(),
  });

  /*
  // ── Example: send via Resend ────────────────────────────────────────────
  // npm install resend
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@hamooninstitute.com',
  //   to: 'info@hamooninstitute.com',
  //   subject: `[${department}] New consultation request — ${name}`,
  //   text: `Department: ${department}\nName: ${name}\nPhone: ${phone}\nAge group: ${ageGroup}\nMessage: ${message}`,
  // });
  // ────────────────────────────────────────────────────────────────────────
  */

  return NextResponse.json({ ok: true });
}
