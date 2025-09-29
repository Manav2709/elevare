import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Mock: log to server console. Replace with email/CRM integration later.
    console.log('New contact submission:', { name, email, company, budget, message });

    return NextResponse.json({ message: 'Thanks! We’ll get back to you shortly.' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }
}
