import BlueSection from "@/components/BlueSection";
import { Info } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Essential Items For Sale",
    description: "Browse essential healthcare items available for sale at Al-Shifa Home Health Care Agency.",
};

export default function ItemsForSale() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Items For Sale</h1>
            </BlueSection>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-primary-50 rounded-2xl p-12">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                                Coming Soon
                            </h2>
                            <p className="text-neutral-600 mb-6">
                                We are finalizing our items and the healhcare products will be live soon.
                            </p>
                            <Link href="/contact" className="btn btn-primary">
                                Contact Us for Inquiries
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}