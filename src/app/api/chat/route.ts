import { NextResponse } from 'next/server';

const SYSTEM_PROMPTS: Record<string, string> = {
  english: `You are Hamoon Academy's AI English language mentor for the English Speaking Room. Your role is to help students practise English conversation in a warm, judgment-free environment. Engage naturally in conversation, gently point out grammar errors constructively, suggest vocabulary alternatives when relevant, and always encourage the student. Respond entirely in English so the student gets maximum practice. Keep a supportive, friendly tone suitable for teens and young adults (ages 12–18).`,

  general: `شما مشاور هوشمند آکادمی هامون هستید. آکادمی هامون یک پلتفرم آموزش آنلاین دوزبانه برای کودکان و نوجوانان است که سه دپارتمان اصلی دارد: زبان انگلیسی (برنامه Oxford Discover)، ریاضیات (ریاضی مفهومی و گسسته)، و سواد هوش مصنوعی. شما به والدین و دانش‌آموزان در شناخت برنامه‌ها، انتخاب دوره و ثبت‌نام کمک می‌کنید. به فارسی روان و گرم پاسخ دهید مگر اینکه کاربر به انگلیسی بنویسد. پاسخ‌ها را کوتاه و کاربردی نگه دارید (۲ تا ۴ جمله). برای ثبت‌نام، کاربر را به فرم مشاوره رایگان در صفحه اصلی راهنمایی کنید.`,
};

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 500 });
  }

  const { messages, context = 'general' } = (await request.json()) as {
    messages: ChatMessage[];
    context?: string;
  };

  const systemPrompt = SYSTEM_PROMPTS[context] ?? SYSTEM_PROMPTS.general;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    const data = (await res.json()) as { content: { type: string; text: string }[] };
    const text = data.content.find(b => b.type === 'text')?.text ?? '';
    return NextResponse.json({ content: text });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
