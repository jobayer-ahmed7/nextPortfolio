import nodemailer from "nodemailer";

/**
 * Returns a Nodemailer transporter configured for Gmail.
 * Server-only — never import this in client components.
 */
export function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variables."); 
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}
