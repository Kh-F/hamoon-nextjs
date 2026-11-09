
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
    !name ||
    !lastName ||
    !gender ||
    !phone ||
    !ageCategory ||
    !grade
  ) {
    return NextResponse.json(
      { ok: false, error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

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
      signal: AbortSignal.timeout(15000),
    });

    const responseText = await response.text();

    let result: { ok?: boolean; saved?: boolean } | null = null;

    try {
      result = JSON.parse(responseText);
    } catch {
      result = null;
    }

    // Success requires explicit confirmation of Google Sheets storage.
    if (
      response.ok &&
      result?.ok === true &&
      result?.saved === true
    ) {
      return NextResponse.json({
        ok: true,
        message: 'Submission saved successfully',
      });
    }

    console.error('[Consult] Submission not confirmed:', {
      httpStatus: response.status,
      validConfirmation: result?.saved === true,
    });

    return NextResponse.json(
      {
        ok: false,
        error: 'Submission could not be confirmed. Please try again later.',
      },
      { status: 502 }
    );
  } catch (error) {
    console.error('[Consult] Failed to contact n8n:', error);

    return NextResponse.json(
      {
        ok: false,
        error: 'Submission service is unavailable. Please try again later.',
      },
      { status: 502 }
    );
  }
}
