import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourdemoemail@gmail.com", // ganti dengan email demo
        pass: "your-app-password", // ganti dengan App Password Gmail
      },
    });

    await transporter.sendMail({
      from: `"Beehive Drones" <yourdemoemail@gmail.com>`,
      to: "tujuan@example.com", // ganti dengan email tujuan
      subject: "Demo Drone Request",
      text: `
        Nama: ${body.fullName}
        Email: ${body.email}
        Telepon: ${body.phone}
        Perusahaan: ${body.company}
        Industri: ${body.industry}
        Drone: ${body.preferredDrone}
        Lokasi: ${body.location}
        Negara Lain: ${body.otherCountry}
        Tanggal: ${body.date}
        Sumber: ${body.source}
        Sumber Lain: ${body.otherSource}
        Catatan: ${body.notes}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Error kirim email:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
