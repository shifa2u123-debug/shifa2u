import BlueSection from "@/components/BlueSection";
import Link from "next/link";
import { FileText, ClipboardList } from "lucide-react";
import Image from "next/image";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175941/services/cupping-therapy/thumb_192032313.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175947/services/cupping-therapy/thumb_83007859.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175946/services/cupping-therapy/thumb_74469702.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175945/services/cupping-therapy/thumb_634626125.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175944/services/cupping-therapy/thumb_632702384.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175942/services/cupping-therapy/thumb_330582750.jpg",
];

import CuppingPromoModal from "./CuppingPromoModal";

export default function CuppingTherapy() {
    return (
        <>
            <CuppingPromoModal />
            <BlueSection>

                <h1 className="text-4xl font-serif">Cupping Therapy</h1>

            </BlueSection>

            <section className="py-6 bg-gradient-to-b from-white to-neutral-50">
                <h1 className="text-center text-2xl font-questerial p-6">Approved licensed Hijama (cupping) therapist</h1>

                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 md:p-10 text-center transform transition-all hover:shadow-2xl">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Link
                                    href="/services/cupping-therapy/cupping-form"
                                    className="group flex items-center justify-center gap-3 p-4 bg-blue-50 border border-primary-100 rounded-lg hover:bg-primary-50 hover:border-primary-500 transition-all duration-300"
                                >
                                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                                        <ClipboardList className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-sm font-semibold text-primary-900 group-hover:text-primary-700 leading-tight">Cupping Form</span>
                                        <span className="hidden sm:block text-[10px] text-primary-600">Intake Assessment</span>
                                    </div>
                                </Link>

                                <Link
                                    href="/services/cupping-therapy/cupping-waiver"
                                    className="group flex items-center justify-center gap-3 p-4 bg-blue-50 border border-primary-100 rounded-lg hover:bg-primary-50 hover:border-primary-500 transition-all duration-300"
                                >
                                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-sm font-semibold text-primary-900 group-hover:text-primary-700 leading-tight">Cupping Waiver</span>
                                        <span className="hidden sm:block text-[10px] text-primary-600">Consent Form</span>
                                    </div>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="container-custom py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl group"
                        >
                            <Image
                                src={src}
                                alt={`Cupping Therapy Session ${i + 1}`}
                                width={600}
                                height={400}
                                unoptimized
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="container-custom pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 md:p-12 text-center transform transition-all hover:shadow-2xl">
                        <Link
                            href="/free-assessment"
                            className="inline-block text-xl md:text-2xl font-serif text-primary-600 hover:text-primary-700 font-bold mb-6 hover:scale-105 transition-transform duration-300"
                        >
                            Set an Appointment
                        </Link>

                        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
                            To learn more services, benefits of cupping therapy and for more information, <a
                                href="https://drive.google.com/file/d/15gm7NPNtE_4O-qNgkub5KxjroThDaiJQ/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 font-bold hover:text-primary-800 hover:underline decoration-2 underline-offset-4 transition-colors"
                            >
                                click here.
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}