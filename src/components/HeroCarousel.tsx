"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "./animations/ScrollAnimation";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175890/landing/1.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175892/landing/2.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175893/landing/3.jpg",
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Increased to 5 seconds for better viewing

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full pt-[102px]">
            {/* Image Carousel Section */}
            <div className="relative w-full h-[35vh] md:h-[60vh] bg-neutral-100 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Blue Content Box */}
            <div className="bg-[#1749A9] text-white py-16 px-4 text-center">
                <div className="container-custom max-w-4xl mx-auto flex flex-col items-center gap-6">

                    <ScrollAnimation direction="up">
                        <div className="relative">
                            <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                                Compassionate <br />
                                Care, <br />
                                <span className="block text-5xl md:text-7xl font-serif leading-tight mt-2"> Proven Results</span>
                            </h1>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={0.2}>
                        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            We bring comprehensive care to your home, ensuring comfort, health, and peace of mind.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={0.4}>
                        <div className="text-center">
                            <Link href="/about" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors shadow-lg">
                                Learn More ➜
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
