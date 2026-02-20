"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    link: string;
}

const ServiceCard = ({ imageSrc, title, link }: ServiceCardProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 2000);
    };

    return (
        <Link
            href={link}
            onClick={handleClick}
            className="group relative flex flex-col items-center"

            style={{ paddingBottom: "1.25rem" }}
        >
            {/* Card Body */}
            <div
                className="relative w-full overflow-hidden transition-shadow duration-300 group-hover:shadow-xl"
                style={{
                    borderRadius: "1.25rem",
                    aspectRatio: "3 / 4",
                }}
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "center" }}
                />
            </div>

            {/* Overlapping Label */}
            <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] rounded-[1.25rem] px-4 py-3 text-center transition-all duration-300 group-hover:bg-primary-600 group-hover:shadow-lg ${isClicked ? "bg-primary-600 shadow-lg" : "bg-white shadow-md"
                    }`}
            >
                <h3 className={`font-questerial text-lg font-medium transition-colors duration-300 group-hover:text-white sm:text-lg ${isClicked ? "text-white" : "text-neutral-800"
                    }`}>
                    {title}
                </h3>
            </div>
        </Link>
    );
};

export default ServiceCard;
