import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form endpoint (migrated from PHP submit.php).
 *
 * The original PHP saved messages to an InfinityFree MySQL database. Those
 * credentials won't work on Vercel, so this route validates the payload and
 * logs it server-side. To persist messages, wire up a database (e.g. Vercel
 * Postgres / KV) or an email service (Resend, Postmark) in the marked section.
 */

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  // --- Validation (mirrors the original PHP rules) ---
  if (!name || !email || !message) {
    return NextResponse.json({
      success: false,
      message: "Please fill in all fields.",
    });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  if (message.length < 10) {
    return NextResponse.json({
      success: false,
      message:
        "Message is too short. Please write at least 10 characters.",
    });
  }

  // --- Persist the message ------------------------------------------------
  // TODO: replace this with a real integration. Examples:
  //   • Email: await resend.emails.send({ ... })
  //   • DB:    await sql`INSERT INTO messages ...`
  // For now we just log so the form works end-to-end in dev/preview.
  console.log("[contact] new message", {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: "Thank you for your message. I will get back to you soon.",
  });
}

export function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed." },
    { status: 405 }
  );
}
