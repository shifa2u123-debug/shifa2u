import { Metadata } from "next";
import Link from "next/link";
import BlueSection from "@/components/BlueSection";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
    title: "Blogs - Patient Education Materials",
    description:
        "Download patient education materials on various health conditions including diabetes, hypertension, COPD, and more.",
};

export default function BlogsPage() {
    return (
        <>
            {/* Page Header */}
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Blogs</h1>
            </BlueSection>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-semibold text-neutral-800 text-center mb-8">
                            Patient Education Materials
                        </h2>

                        <BlogsClient />

                        <p className="p-2 text-sm text-neutral-500 mt-8">
                            Note: PDF files will open in a new tab. These educational materials are
                            provided for informational purposes only.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
