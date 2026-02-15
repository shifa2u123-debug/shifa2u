import { Metadata } from "next";
import Link from "next/link";
import BlueSection from "@/components/BlueSection";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read the Privacy Policy for Al-Shifa Home Health Care Agency to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <>
            {/* Page Header */}
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Privacy Policy</h1>
            </BlueSection>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto prose prose-neutral">
                        <p className="text-sm text-red-400 text-neutral-500 mb-8">
                            Last Updated: September 2024
                        </p>

                        <p>
                            At <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong>, we value your privacy and are
                            committed to protecting your personal information. This Privacy Policy is
                            designed to help you understand how we collect, use, disclose, and safeguard
                            your personal information when you visit our website or use our products and
                            services.
                        </p>

                        <p>
                            By accessing our website or using our products and services, you consent to
                            the practices described in this Privacy Policy. Please read this policy
                            carefully to understand your rights and responsibilities regarding your
                            personal information.
                        </p>

                        <h2 className="mt-6 text-xl font-bold">1. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li>
                                <strong>Personal Information:</strong> This may include your name, email
                                address, phone number, postal address, and any other information you
                                provide when filling out forms on our website or when contacting us.
                            </li>
                            <li>
                                <strong>Usage Information:</strong> We may collect information about your
                                interactions with our website and services, such as your IP address,
                                browser type, operating system, and browsing behavior.
                            </li>
                            <li>
                                <strong>Cookies:</strong> We use cookies and similar tracking technologies
                                to collect information about your browsing preferences, such as the pages
                                you visit, the links you click, and other actions you take on our website.
                            </li>
                        </ul>

                        <h2 className="mt-6 text-xl font-bold">2. How We Use Your Information</h2>
                        <p>We may use your personal information for the following purposes:</p>
                        <ul>
                            <li>To provide and maintain our products and services.</li>
                            <li>To communicate with you and respond to your inquiries.</li>
                            <li>To improve and personalize your experience on our website.</li>
                            <li>
                                To send you marketing communications, promotions, and updates if you have
                                provided your consent.
                            </li>
                            <li>To monitor and analyze website usage and trends.</li>
                        </ul>

                        <h2 className="mt-6 text-xl font-bold">3. Sharing Your Information</h2>
                        <p>We may share your personal information with third parties, including:</p>
                        <ul>
                            <li>
                                <strong>Service Providers:</strong> We may share information with trusted
                                service providers who assist us in providing our products and services and
                                maintaining our website.
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> We may disclose your information if
                                required by law, such as in response to a court order or government
                                request.
                            </li>
                        </ul>

                        <h2 className="mt-6 text-xl font-bold">4. Your Choices</h2>
                        <p>You have the following choices regarding your personal information:</p>
                        <ul>
                            <li>
                                <strong>Access and Correction:</strong> You can access, update, or correct
                                your personal information by contacting us.
                            </li>
                            <li>
                                <strong>Opt-Out:</strong> You can opt out of receiving marketing
                                communications by following the instructions in the communication.
                            </li>
                        </ul>

                        <h2 className="mt-6 text-xl font-bold">5. Data Security</h2>
                        <p>
                            We employ reasonable security measures to protect your personal information
                            from unauthorized access, disclosure, alteration, and destruction.
                        </p>

                        <h2 className="mt-6 text-xl font-bold">6. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy to reflect changes in our practices or
                            legal requirements. Any updates will be posted on our website, and the "Last
                            Updated" date will be modified accordingly.
                        </p>

                        <h2 className="mt-6 text-xl font-bold">7. Contact Us</h2>
                        <p>
                            If you have any questions or concerns regarding this Privacy Policy or your
                            personal information, please{" "}
                            <Link href="/contact" className="text-primary-600 hover:underline">
                                contact us
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
