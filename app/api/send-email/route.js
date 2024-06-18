// app/api/send-email/route.js
import { NextResponse } from "next/server";
import { sendEmail } from "../../../utils/nodemailer";

export async function POST(request) {
  const { name, company, email, details } = await request.json();

  try {
    await sendEmail({ name, company, email, details });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
