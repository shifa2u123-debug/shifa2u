import nodemailer from "nodemailer";

interface EmailData {
  formName: string;
  pageSource: string;
  fields: Record<string, string>;
  attachments?: {
    name: string;
    content: string; // base64
    type: string;
  }[];
}

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

/**
 * Send an email with form submission data
 */
export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  const { formName, pageSource, fields, attachments } = data;

  // Build email body
  const fieldEntries = Object.entries(fields)
    .filter(([_, value]) => value && value.trim() !== "") // Hide empty fields
    .map(([label, value]) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eee; width: 40%; color: #555; font-weight: 600;">${label}</td>
        <td style="padding: 12px; border-bottom: 1px solid #eee; color: #333;">${value}</td>
      </tr>
    `)
    .join("");

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .header { background: #1749A9; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; color: white; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
        .content { padding: 30px; }
        .meta { margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid #f0f0f0; }
        .meta p { margin: 5px 0; font-size: 14px; color: #666; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${formName}</h1>
        </div>
        <div class="content">
          <div class="meta">
            <p><strong>Source:</strong> ${pageSource}</p>
            <p><strong>Received:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles", dateStyle: "full", timeStyle: "long" })}</p>
          </div>
          
          <table cellspacing="0" cellpadding="0">
            ${fieldEntries}
          </table>

          ${attachments && attachments.length > 0 ? `
            <div style="margin-top: 25px; padding: 15px; background: #f0f9ff; border-radius: 8px; border: 1px solid #e0f2fe;">
              <p style="margin: 0; color: #0369a1; font-weight: 600;">📎 ${attachments.length} Attachment(s) Included</p>
            </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>Secure Submission via Al-Shifa Home Health Care Website</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const mailOptions: any = {
      from: `"Al-Shifa Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Submission: ${formName}`,
      html: htmlBody,
    };

    // Attach files if present
    if (attachments && attachments.length > 0) {
      mailOptions.attachments = attachments.map(att => ({
        filename: att.name,
        content: Buffer.from(att.content, 'base64'),
        contentType: att.type
      }));
    }

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send email" };
  }
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  return /^[\d\s\-\(\)\+]{10,}$/.test(phone);
}
