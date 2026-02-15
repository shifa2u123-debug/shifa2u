"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    viewportAmount?: number; // 0 to 1, how much of element must be visible
}

export default function ScrollAnimation({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.5,
    viewportAmount = 0.3,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    const getVariants = (): Variants => {
        const distance = 50;

        const variants: Variants = {
            hidden: {
                opacity: 0,
                y: direction === "up" ? distance : direction === "down" ? -distance : 0,
                x: direction === "left" ? distance : direction === "right" ? -distance : 0,
            },
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }
            }
        };

        if (direction === "none") {
            variants.hidden = { opacity: 0, y: 0, x: 0 };
        }

        return variants;
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.div>
    );
}
