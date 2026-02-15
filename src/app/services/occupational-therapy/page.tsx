import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175976/services/occupational-therapy/2352351720U635i80.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175975/services/occupational-therapy/2350411935Uta60si.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175974/services/occupational-therapy/2331741447Ue42m05.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175973/services/occupational-therapy/22418125448U847t1i.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175972/services/occupational-therapy/2222810659U639am1.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175971/services/occupational-therapy/211215113944U5e12s7.jpg",
];

export default function OccupationalTherapy() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Occupational Therapy</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Empowering independence through personalized occupational therapy</h1>
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