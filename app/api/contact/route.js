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

    if (!email || !email.trim()) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    if (!company || !company.trim()) {
      return NextResponse.json({ success: false, error: "Company is required" }, { status: 400 });
    }

    await connectToDatabase();

    const newContact = await Contact.create({
      email: email.trim(),
      company: company.trim(),
      name: name ? name.trim() : "",
      message: message ? message.trim() : "",
      sourcePage: sourcePage || "contact_form",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact request saved successfully in oneninecontact collection",
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form to database:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to save contact request" },
      { status: 500 }
    );
  }
}
