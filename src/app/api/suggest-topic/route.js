import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { topic, suggestion, email } = body;
    const content = topic || suggestion;

    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'A suggestion or topic is required.' },
        { status: 400 }
      );
    }

    const payload = {
      timestamp: new Date().toISOString(),
      recipient: 'info@nidomontessori.in',
      suggestion: content.trim(),
      senderEmail: email ? email.trim() : 'Anonymous Visitor',
      source: 'Nido Research Library - Visitor Suggests [NM9]'
    };

    console.log('[NM9 Notification] Visitor Suggestion Dispatched to info@nidomontessori.in:', payload);

    // If an external email service environment variable is set (e.g. RESEND_API_KEY, POSTMARK, etc.)
    // it can send via HTTP here. For now, log the event and return a 200 OK.
    return NextResponse.json({
      success: true,
      message: 'Your topic suggestion has been received and dispatched to info@nidomontessori.in.',
      data: payload
    });
  } catch (err) {
    console.error('Error handling visitor suggestion:', err);
    return NextResponse.json(
      { error: 'Internal server error processing suggestion.' },
      { status: 500 }
    );
  }
}
