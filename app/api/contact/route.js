import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (err) {
      return NextResponse.json({ success: false, error: "Invalid or empty JSON request body" }, { status: 400 });
    }
    const { email, company, name, message, sourcePage } = body || {};

    // Basic length validations to prevent DoS via huge payloads
    if (!email || typeof email !== 'string' || !email.trim() || email.length > 254) {
      return NextResponse.json({ success: false, error: "Valid email is required" }, { status: 400 });
    }

    if (!company || typeof company !== 'string' || !company.trim() || company.length > 200) {
      return NextResponse.json({ success: false, error: "Valid company name is required" }, { status: 400 });
    }

    if (name && (typeof name !== 'string' || name.length > 100)) {
      return NextResponse.json({ success: false, error: "Name must be less than 100 characters" }, { status: 400 });
    }

    if (message && (typeof message !== 'string' || message.length > 2000)) {
      return NextResponse.json({ success: false, error: "Message must be less than 2000 characters" }, { status: 400 });
    }

    await connectToDatabase();

    const newContact = await Contact.create({
      email: email.trim(),
      company: company.trim(),
      name: name ? name.trim() : "",
      message: message ? message.trim() : "",
      sourcePage: (typeof sourcePage === 'string' && sourcePage.length <= 100) ? sourcePage : "contact_form",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact request saved successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    // Log the actual error on the server for debugging
    console.error("Error submitting contact form to database:", error);
    // Mask the error returned to the client to avoid leaking DB info
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
