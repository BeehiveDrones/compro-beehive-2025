import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // langsung hardcode akun Gmail (⚠️ kurang aman untuk production)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "youremail@gmail.com",   // ganti dengan email kamu
        pass: "your_app_password",     // gunakan App Password, bukan password asli Gmail
      },
    });

    await transporter.sendMail({
      from: `"Beehive Drones" <youremail@gmail.com>`, // ganti dengan email pengirim
      to: "tujuan@example.com", // ganti dengan email tujuan
      subject: "Contact Form Submission",
      text: `
        Nama: ${body.name}
        WhatsApp: ${body.whatsapp}
        Email: ${body.email}
        Address: ${body.address}
        Requirements: ${body.requirements}
        Waktu: ${body.time}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Error kirim email:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
