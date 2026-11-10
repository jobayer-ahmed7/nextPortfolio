import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getTransporter } from "@/lib/mailer";

// Server-side schema — always re-validate on the server, never trust the client
const contactSchema = z.object({
  username: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate input server-side 
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { username, email, message } = parsed.data;

    const toEmail = process.env.EMAIL_USER;

    // 2. Send email via Nodemailer
    const transporter = getTransporter();

    await transporter.sendMail({
      // from must match the authenticated Gmail user
      from: `"Portfolio Contact" <${toEmail}>`,
      // replyTo is the visitor's email — hitting Reply goes directly to them
      replyTo: `"${username}" <${email}>`,
      to: toEmail,
      subject: `Portfolio Contact: ${username}`,
      text: `Name: ${username}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#1A1A1A;color:#F5F5F5;border-radius:12px">
          <h2 style="color:#D4AF37;margin-top:0">New message from your portfolio</h2>
          <p style="margin:8px 0"><strong>Name:</strong> ${username}</p>
          <p style="margin:8px 0"><strong>Email:</strong> <a href="mailto:${email}" style="color:#D4AF37">${email}</a></p>
          <hr style="border:none;border-top:1px solid #2A2A2A;margin:20px 0"/>
          <p style="margin:8px 0"><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;color:#CCCCCC">${message}</p>
        </div>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
