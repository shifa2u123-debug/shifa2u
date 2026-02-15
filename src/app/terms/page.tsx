import { Metadata } from "next";
import Link from "next/link";
import BlueSection from "@/components/BlueSection";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Read the Terms & Conditions for Al-Shifa Home Health Care Agency, including SMS messaging terms.",
};

export default function TermsPage() {
    return (
        <>
            {/* Page Header */}
            {/* <div className="page-header">
                <div className="container-custom">
                    <h1>Terms & Conditions</h1>
                    <div className="breadcrumb text-primary-100">
                        <Link href="/" className="text-white hover:underline">
                            Home
                        </Link>
                        <span className="mx-2">»</span>
                        <span>Terms & Conditions</span>
                    </div>
                </div>
            </div> */}

            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Terms & Conditions</h1>
            </BlueSection>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto prose prose-neutral">
                        <p className="text-sm text-red-400 mb-8">
                            Last Updated: December 2025
                        </p>

                        <h2 className="mt-6 text-2xl font-bold">SMS Terms & Conditions</h2>

                        <h3 className="mt-6 text-xl font-bold">Product Description</h3>
                        <p>
                            By providing your mobile phone number, you consent to receive SMS messages
                            from <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong> related to appointment reminders,
                            service updates, care coordination notifications, billing related
                            communications, and occasional informational or promotional messages related
                            to home healthcare services.
                        </p>

                        <h3 className="mt-6 text-xl font-bold">Message Frequency</h3>
                        <ul>
                            <li>Message frequency may vary.</li>
                            <li>You may receive 4-6 SMS messages per month.</li>
                        </ul>

                        <h3 className="mt-6 text-xl font-bold">Message and Data Rates</h3>
                        <p>Standard message and data rates may apply.</p>

                        <h3 className="mt-6 text-xl font-bold">Opting Out</h3>
                        <p>
                            You may opt out of receiving SMS messages at any time by replying with
                            "STOP" to any SMS message you receive from us. After opting out, you will
                            receive a confirmation message, and we will cease sending SMS messages to
                            your number.
                        </p>

                        <h3 className="mt-6 text-xl font-bold">Help and Support</h3>
                        <p>
                            If you need assistance or have questions about our SMS service, reply with
                            "HELP" to any SMS message you receive, or contact our customer support team.
                        </p>

                        <h3 className="mt-6 text-xl font-bold">Privacy Policy</h3>
                        <p>
                            Your phone number will be handled in accordance with our{" "}
                            <Link href="/privacy" className="text-primary-600 hover:underline">
                                Privacy Policy
                            </Link>
                            . No mobile information will be shared with third parties/affiliates for
                            marketing/promotional purposes. All the above categories exclude text
                            messaging originator opt-in data and consent; this information will not be
                            shared with any third parties.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
