"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface ServiceItem {
    title: string;
    description: string;
}

const otherServices: ServiceItem[] = [
    {
        title: "Parkinson's Care",
        description:
            "Our specialized Parkinson's care focuses on managing symptoms, improving mobility, and ensuring safety.",
    },
    {
        title: "Dementia Care",
        description:
            "We offer personalized dementia care that prioritizes safety, routine, and cognitive engagement.",
    },
    {
        title: "Alzheimer's Care",
        description:
            "Our Alzheimer's care services are designed to navigate the challenges of the disease with dignity.",
    },
];

export default function OtherServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleService = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="container-custom py-10">
            <h2 className="mb-8 text-2xl font-serif text-neutral-800">
                Other services we provide:
            </h2>
            <div className="flex flex-col gap-4">
                {otherServices.map((service, index) => (
                    <div
                        key={index}
                        className="overflow-hidden border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                        style={{ borderRadius: "0.5rem" }}
                    >
                        <button
                            onClick={() => toggleService(index)}
                            className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-neutral-50"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded bg-primary-700 text-white transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""
                                        }`}
                                >
                                    {openIndex === index ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
                                    )}
                                </div>
                                <span className="font-questerial text-lg font-medium text-neutral-800">
                                    {service.title}
                                </span>
                            </div>
                        </button>
                        <div
                            className={`transition-[max-height] duration-500 ease-in-out ${openIndex === index ? "max-h-40" : "max-h-0"
                                } overflow-hidden`}
                        >
                            <div className="px-6 pb-6 pt-2 pl-18">
                                <p className="font-questerial text-neutral-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
