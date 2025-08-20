import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Beehive Drones" <${process.env.EMAIL_USER}>`,
      to: "tujuan@example.com", // ganti dengan email tujuan contact
      subject: "Contact Form Submission",
      text: `
        Nama: ${body.name}
        WhatsApp: ${body.whatsapp}
        Email: ${body.email}
        Address: ${body.address}
        Requirements: ${body.requirements}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Error kirim email:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
