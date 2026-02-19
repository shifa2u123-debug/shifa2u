"use client";

import Link from "next/link";
import Image from "next/image";

const contactInfo = {
    address: "501 N Brookhurst St., Suite 300A, Anaheim, California 92801",
    phone: "714-687-1912",
    fax: "877-500-3106",
    email: "admin@shifa2u.com",
    hours: "Mon - Fri: 08:30am - 04:30pm",
};

const serviceAreas = [
    "Orange", "Los Angeles", "Ventura", "Santa Barbara", "Kern",
    "San Bernardino", "Riverside", "San Diego", "Imperial",
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full">
            {/* Top Section - White Background */}
            <div className="bg-gray-200">
                <div className="container-custom">
                    <div className="flex flex-col justify-between items-center gap-10 md:gap-8">
                        {/* Logos Section */}
                        <div className="flex items-center p-4 gap-5 lg:gap-10">
                            <Image
                                src="https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175773/achc-logo.png"
                                alt="Medicare Certified Homehealth Agency"
                                width={120}
                                height={120}
                                className="object-contain w-[90px] md:w-[130px] h-auto"
                            />
                            <Image
                                src="https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175901/medicare-logo.png"
                                alt="Medicare Certified Homehealth Agency"
                                width={240}
                                height={84}
                                className="object-contain w-[160px] md:w-[240px] h-auto"
                            />
                        </div>

                        {/* Contact Information */}
                        <div className="text-center">
                            <h3 className="text-xl tracking-[0.2em]">
                                GET IN TOUCH
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-4 mb-6">
                                <span className="text-black">  Service Areas Covered:</span>
                                <p className=" text-neutral-600">
                                    Orange, Los Angeles, Ventura, Santa Barbara, Kern, San Bernardino, Riverside, San Diego, Imperial counties in California.
                                </p>

                                <div className="flex flex-col items-center gap-3 mt-6">
                                    <div className="flex items-start gap-2 justify-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600 shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">{contactInfo.address}</a>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <p>Call Us at: <a href={`tel:${contactInfo.phone}`} className="hover:text-primary-600 transition-colors">{contactInfo.phone}</a></p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-primary-600">Fax:</span>
                                            <a href={`tel:${contactInfo.fax}`} className="hover:text-primary-600 transition-colors">{contactInfo.fax}</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <p>Email Us at: <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-600 transition-colors">{contactInfo.email}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Primary 600 Background */}
            {/* Bottom Section - Primary 600 Background */}
            <div className="bg-[var(--primary-600)] text-white flex flex-col items-center pt-20 pb-10">
                <div className="relative w-64 h-32 mb-8 bg-white rounded-3xl flex items-center justify-center p-4">
                    <Image
                        src="https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175881/footer-logo.png"
                        alt="Al-Shifa Home Health Care Agency"
                        width={220}
                        height={100}
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col items-center gap-3 text-center text-lg">
                    <p className="font-medium">
                        Working Hours: {contactInfo.hours}
                    </p>
                    <Link href="/terms" className="hover:underline">
                        Terms and Conditions
                    </Link>
                    <p>
                        © Copyright {new Date().getFullYear()}
                    </p>
                    <Link href="https://x.com/mubashir_builds?lang=en" className="hover:underline">
                        Inked by Digispark
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                </div>
            </div>

            {/* Scroll to Top - Red Bar */}
            <div
                onClick={scrollToTop}
                className="w-full bg-red-600 hover:bg-red-700 transition-colors cursor-pointer py-3 flex justify-center items-center group"
            >
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center group-hover:-translate-y-1 transition-transform bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </div>
        </footer>
    );
}

