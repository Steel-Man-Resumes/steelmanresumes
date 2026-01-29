'use server'

import { Resend } from 'resend';
import { headers } from 'next/headers';

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getClientIP(): string {
  const headersList = headers();
  const forwarded = headersList.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0].trim() : 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

export async function submitContactForm(formData: FormData) {
  const ip = getClientIP();

  // Check rate limit: 5 submissions per hour
  if (!checkRateLimit(ip)) {
    console.log(`[CONTACT FORM] Rate limit exceeded: ${ip}`);
    return {
      success: false,
      error: 'Too many submissions. Please try again in an hour or call (262) 391-8137.'
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const situation = formData.get('situation') as string;
  const situationDetails = formData.get('situationDetails') as string;
  const timeline = formData.get('timeline') as string;
  const preferredContact = formData.get('preferredContact') as string;

  // Validation
  if (!name || !email) {
    return { success: false, error: 'Name and email are required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Invalid email address' };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'SMR Contact Form <onboarding@resend.dev>',
      to: ['troyrichardcarr@gmail.com'],
      replyTo: email,
      subject: `🔥 New Contact Form - ${name}`,
      headers: {
        'X-Priority': '1',
        'Importance': 'high',
      },
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%); color: #D4A84B; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1>🔥 New Lead from Steel Man Resumes</h1>
            </div>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px;">
              <div style="margin-bottom: 15px; padding: 15px; background: #fff3cd; border-radius: 4px; border-left: 4px solid #D4A84B;">
                <strong>👤 Name:</strong><br>${name}
              </div>
              <div style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #D4A84B;">
                <strong>📧 Email:</strong><br><a href="mailto:${email}">${email}</a>
              </div>
              ${phone ? `<div style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #D4A84B;">
                <strong>📱 Phone:</strong><br><a href="tel:${phone}">${phone}</a>
              </div>` : ''}
              ${situation ? `<div style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #D4A84B;">
                <strong>🎯 Situation:</strong><br>${situation}
              </div>` : ''}
              ${situationDetails ? `<div style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #D4A84B;">
                <strong>📝 Details:</strong><br>${situationDetails.replace(/\n/g, '<br>')}
              </div>` : ''}
              ${timeline ? `<div style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #D4A84B;">
                <strong>⏰ Timeline:</strong><br>${timeline}
              </div>` : ''}
              ${preferredContact ? `<div style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 4px; border-left: 4px solid #D4A84B;">
                <strong>💬 Preferred Contact:</strong><br>${preferredContact}
              </div>` : ''}
              <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
                <p>Submitted from steelmanresumes.com</p>
                <p>${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to process submission' };
  }
}
