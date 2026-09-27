import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    name,
    lastName,
    gender,
    phone,
    email,
    ageCategory,
    grade,
    message,
    sourcePage,
    workshopTitle,
  } = body as {
    name: string;
    lastName: string;
    gender: string;
    phone: string;
    email?: string;
    ageCategory: string;
    grade: string;
    message: string;
    sourcePage: string;
    workshopTitle?: string;
  };

  if (!name || !lastName || !gender || !phone || !ageCategory || !grade) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  console.log('[Consult] New booking request', {
    sourcePage,
    workshopTitle,
    name,
    lastName,
    gender,
    phone,
    email,
    ageCategory,
    grade,
    message,
    receivedAt: new Date().toISOString(),
  });

  // Forward to the n8n automation workflow (Google Sheets append + confirmation
  // email). Skipped when unset so local/dev submissions don't need it configured.
  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(webhookSecret
            ? { 'x-webhook-secret': webhookSecret }
            : {}),
        },
        body: JSON.stringify({
          name,
          lastName,
          gender,
          phone,
          email: email ?? '',
          ageCategory,
          grade,
          message: message ?? '',
          sourcePage,
          workshopTitle: workshopTitle ?? '',
        }),
      });
    } catch (err) {
      // Never fail the user's submission because the automation backend is down.
      console.error(
        '[Consult] Failed to forward to n8n webhook',
        err
      );
    }
  }

  return NextResponse.json({ ok: true });
}