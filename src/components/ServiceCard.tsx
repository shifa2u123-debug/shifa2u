import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    link: string;
}

const ServiceCard = ({ imageSrc, title, link }: ServiceCardProps) => {
    return (
        <Link
            href={link}
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
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] rounded-[1.25rem] bg-white px-4 py-3 text-center shadow-md transition-all duration-300 group-hover:bg-primary-600 group-hover:shadow-lg"
            >
                <h3 className="font-questerial text-lg font-medium text-neutral-800 transition-colors duration-300 group-hover:text-white sm:text-lg">
                    {title}
                </h3>
            </div>
        </Link>
    );
};

export default ServiceCard;
