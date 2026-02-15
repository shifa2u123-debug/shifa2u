import BlueSection from "@/components/BlueSection";
import ContactUsForm from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Al-Shifa Home Health Care Agency",
    description: "Contact Al-Shifa Home Health Care Agency for inquiries, support, or to schedule an appointment. We are here to help.",
};

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Contact Us</h1>
            </BlueSection>

            <section className="section bg-white pb-0">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-md text-neutral-600 mb-8 p-1">
                            Your voice matters. Whether you have inquiries or simply want to connect,
                            we&apos;re here to listen and assist. Reach out to <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong> through our contact form below, and let&apos;s engage in a
                            conversation that leads to better understanding and support. We&apos;re
                            eager to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="section bg-white pt-0 pb-10">
                <div className="container-custom">
                    <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-neutral-200">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=501%20N%20Brookhurst%20St%20Suite%20300A,%20Anaheim,%20CA%2092801,%20USA+(Al-Shifa%20Home%20Health%20Care%20Agency)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            title="Al-Shifa Home Health Care Agency Location"
                            aria-label="Map showing location of Al-Shifa Home Health Care Agency"
                        ></iframe>
                    </div>
                </div>
            </section>

            <ContactUsForm />

        </>
    );
}
