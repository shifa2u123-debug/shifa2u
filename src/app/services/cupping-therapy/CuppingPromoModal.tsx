"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function CuppingPromoModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenPromo = localStorage.getItem("hasSeenCuppingPromo");
        if (!hasSeenPromo) {
            // Add a small delay for better UX
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("hasSeenCuppingPromo", "true");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            {/* Modal Container */}
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-300 border-4 border-white ring-4 ring-blue-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-700 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center justify-center pt-10 pb-10 px-6 text-center bg-gradient-to-b from-blue-50/50 to-white">
                    {/* Badge / Discount Circle */}
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white">
                            <span className="text-3xl font-bold leading-none">50%</span>
                            <span className="text-xs uppercase font-medium tracking-wide">OFF</span>
                        </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl md:text-3xl font-serif text-blue-900 font-bold mb-3 leading-tight">
                        Special Offer
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-600 mb-8 max-w-sm mx-auto leading-relaxed">
                        Get <span className="font-bold text-blue-700">50% off</span> on your first Hijama cupping therapy session.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Link
                            href="/services/cupping-therapy/cupping-form"
                            onClick={handleClose}
                            className="bg-blue-600 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                        >
                            Cupping Form »
                        </Link>

                        <Link
                            href="/services/cupping-therapy/cupping-waiver"
                            onClick={handleClose}
                            className="bg-white border-2 border-blue-100 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors text-center"
                        >
                            Cupping Waiver »
                        </Link>
                    </div>

                    <p className="mt-6 text-xs text-neutral-400">
                        *Valid for new clients only. Terms and conditions apply.
                    </p>
                </div>

                {/* Decorative bottom bar */}
                <div className="h-2 w-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
            </div>
        </div>
    );
}
