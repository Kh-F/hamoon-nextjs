
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }

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
  } = body;

  if (
    !name || !lastName || !gender || !phone ||
    !ageCategory || !grade
  ) {
    return NextResponse.json(
      { ok: false, error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  // Never report success if the automation is not configured.
  if (!webhookUrl) {
    console.error('[Consult] N8N_WEBHOOK_URL is not configured');

    return NextResponse.json(
      { ok: false, error: 'Submission service is unavailable' },
      { status: 503 }
    );
  }

  try {
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

    const response = await fetch(webhookUrl, {
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
        sourcePage: sourcePage ?? 'Home Page',
        workshopTitle: workshopTitle ?? '',
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(
        '[Consult] n8n returned HTTP error:',
        response.status
      );

      return NextResponse.json(
        { ok: false, error: 'Submission could not be confirmed' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[Consult] Failed to contact n8n:', error);

    return NextResponse.json(
      { ok: false, error: 'Submission service is unavailable' },
      { status: 502 }
    );
  }
}