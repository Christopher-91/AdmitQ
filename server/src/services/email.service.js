import nodemailer from 'nodemailer';
import config from '../config/index.js';

// Create a transporter using Gmail SMTP
// Note: Requires SMTP_USER (email) and SMTP_PASS (App Password) in .env
const createTransporter = () => {
  if (config.env === 'development' && (!process.env.SMTP_USER || !process.env.SMTP_PASS)) {
    console.warn('⚠️ SMTP credentials not found in .env. Using mock transporter. Emails will not actually be sent.');
    return {
      sendMail: async (options) => {
        console.log('\n--- MOCK EMAIL SENT ---');
        console.log(`To: ${options.to}`);
        console.log(`Subject: ${options.subject}`);
        console.log(`Body:\n${options.text || options.html}`);
        console.log('-----------------------\n');
        return { messageId: 'mock-id' };
      }
    };
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const transporter = createTransporter();

export const sendOTP = async (to, otp) => {
  const mailOptions = {
    from: `"Neverland Support" <${process.env.SMTP_USER || 'noreply@neverland.com'}>`,
    to,
    subject: 'Your Neverland Verification Code',
    text: `Your verification code is: ${otp}. This code expires in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
        <h2 style="color: #6366f1; text-align: center;">Welcome to Neverland!</h2>
        <p style="font-size: 16px; color: #333;">Thank you for registering. Please use the following 6-digit code to verify your email address:</p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #111; padding: 15px 30px; background-color: #f5f5f5; border-radius: 8px;">
            ${otp}
          </span>
        </div>
        <p style="font-size: 14px; color: #666; text-align: center;">This code will expire in 10 minutes.</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;" />
        <p style="font-size: 12px; color: #999; text-align: center;">If you didn't request this code, you can safely ignore this email.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send verification email');
  }
};
