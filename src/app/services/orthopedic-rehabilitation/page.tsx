import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175982/services/orthopedic-rehabilitation/2272742450Ut0me42.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175983/services/orthopedic-rehabilitation/2341312316U01eta4.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175981/services/orthopedic-rehabilitation/2272545254U5t0a39.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175980/services/orthopedic-rehabilitation/2251931901U809a72.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175979/services/orthopedic-rehabilitation/22111034320U9s05a2.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175977/services/orthopedic-rehabilitation/21727112443U706m39.jpg",
];

export default function OrthopedicRehabilation() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Orthopedic Rehabilitation</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Restoring mobility and strength through expert orthopedic rehabilitation</h1>
            <BlueLine />

            <section className="container-custom py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <Image
                                src={src}
                                alt={`Post Surgical Rehabilitation ${i + 1}`}
                                width={600}
                                height={400}
                                unoptimized
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}