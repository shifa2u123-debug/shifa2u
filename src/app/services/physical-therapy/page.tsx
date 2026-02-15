import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175990/services/physical-therapy/2352515449U29s3i4.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175989/services/physical-therapy/2261721351U9s2t10.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175987/services/physical-therapy/22523120206U598t24.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175986/services/physical-therapy/221104100315Us0a82i.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175985/services/physical-therapy/2172933816U1805i7.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175985/services/physical-therapy/21121045149Ut0sm4a.jpg",
];

export default function PhysicalTherapy() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Physical Therapy</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Restoring mobility and vitality through expert-guided therapy</h1>
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