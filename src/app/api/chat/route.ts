import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: `You are an expert assistant for Hamoon Academy (آکادمی هامون), an educational institute offering courses in English, Mathematics, Artificial Intelligence, and specialised workshops.
Only answer questions directly related to Hamoon Academy — its departments, courses, instructors, schedules, enrolment, and teaching approach.
If a question is unrelated to the academy, politely let the user know that you can only help with Hamoon Academy topics.
Reply in the same language the user writes in (Persian or English).`,
    messages,
  });

  return result.toDataStreamResponse();
}
