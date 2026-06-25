import { NextResponse } from 'next/server';

const AGENT_ID = 'agent_6901kvx2pxa4evqsz6bfm578n0a0';

export async function GET() {
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${AGENT_ID}`,
      { headers: { 'xi-api-key': apiKey }, cache: 'no-store' },
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'ElevenLabs error' }, { status: res.status });
    }

    const { signed_url } = (await res.json()) as { signed_url: string };
    return NextResponse.json({ signedUrl: signed_url });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
