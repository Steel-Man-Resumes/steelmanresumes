import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, situation, situationDetails, timeline, preferredContact } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'SMR Contact Form <onboarding@resend.dev>',
      to: ['troyrichardcarr@gmail.com'],
      replyTo: email,
      subject: `🔥 New Contact Form Submission from ${name}`,
      headers: {
        'X-Priority': '1',
        'Importance': 'high',
      },
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%); color: #D4A84B; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #D4A84B; }
            .label { font-weight: bold; color: #1a1a1a; margin-bottom: 5px; }
            .value { color: #4a4a4a; }
            .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
            .urgent { background: #fff3cd; border-left-color: #ff6b6b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔥 New Lead from Steel Man Resumes</h1>
            </div>
            <div class="content">
              <div class="field urgent">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>

              ${phone ? `
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}

              ${situation ? `
              <div class="field">
                <div class="label">🎯 Current Situation:</div>
                <div class="value">${situation}</div>
              </div>
              ` : ''}

              ${situationDetails ? `
              <div class="field">
                <div class="label">📝 Details:</div>
                <div class="value">${situationDetails.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}

              ${timeline ? `
              <div class="field">
                <div class="label">⏰ Timeline:</div>
                <div class="value">${timeline}</div>
              </div>
              ` : ''}

              ${preferredContact ? `
              <div class="field">
                <div class="label">💬 Preferred Contact Method:</div>
                <div class="value">${preferredContact}</div>
              </div>
              ` : ''}

              <div class="footer">
                <p>Submitted from steelmanresumes.com contact form</p>
                <p>Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
