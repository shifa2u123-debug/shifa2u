import { Metadata } from "next";
import Link from "next/link";
import BlueSection from "@/components/BlueSection";

export const metadata: Metadata = {
    title: "Resources",
    description:
        "Access helpful healthcare resources from trusted organizations including CDC, HHS, and American Diabetes Association.",
};

const resources = [
    {
        id: 1,
        name: "Centers for Disease Control and Prevention",
        url: "https://www.cdc.gov",
        description: "The nation's leading public health protection agency.",
    },
    {
        id: 2,
        name: "Agency for Healthcare Research and Quality",
        url: "https://www.ahrq.gov",
        description: "The lead Federal agency charged with improving the safety and quality of healthcare.",
    },
    {
        id: 3,
        name: "National Organization for Rare Disorders",
        url: "https://rarediseases.org",
        description: "A leading patient advocacy organization for rare disease patients.",
    },
    {
        id: 4,
        name: "U.S. Department of Health & Human Services",
        url: "https://www.hhs.gov",
        description: "The U.S. government's principal agency for protecting the health of Americans.",
    },
    {
        id: 5,
        name: "American Diabetes Association",
        url: "https://diabetes.org",
        description: "Leading organization in the fight to end diabetes.",
    },
];

export default function ResourcesPage() {
    return (
        <>
            {/* Page Header */}
             <BlueSection>
                <h1 className="text-center text-4xl font-serif">Resources</h1>
            </BlueSection>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                       

                        <div className="space-y-4">
                            {resources.map((resource) => (
                                <a
                                    key={resource.id}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card flex items-center gap-6 p-4 hover:border-primary-300 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
                                            {resource.name}
                                        </h3>
                                       
                                        <p className="text-xs text-primary-600 mt-1">{resource.url}</p>
                                    </div>
                                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
