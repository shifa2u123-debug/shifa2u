import { NextRequest, NextResponse } from "next/server";
import { sendEmail, isValidEmail, isValidPhone } from "@/lib/mail";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { formName, pageSource, fields, attachments } = body;

        // Validate required fields
        if (!formName || !pageSource || !fields) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate email if present
        if (fields.Email && !isValidEmail(fields.Email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email address" },
                { status: 400 }
            );
        }

        // Send email with attachments
        const result = await sendEmail({
            formName,
            pageSource,
            fields,
            attachments // Pass attachments to sendEmail
        });

        if (result.success) {
            return NextResponse.json(
                { success: true, message: "Form submitted successfully" },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { success: false, message: result.message },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
