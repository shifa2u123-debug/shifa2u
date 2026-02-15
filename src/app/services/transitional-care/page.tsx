import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176028/services/transitional-care/2341924305Usa2mt9.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176027/services/transitional-care/23316111122U4t3a12.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176026/services/transitional-care/21920100010U25s8t9.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176029/services/transitional-care/2362155034U29at01.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176025/services/transitional-care/2172643953U41a3e0.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176024/services/transitional-care/2172613128Ua307e8.jpg",
];

export default function TransitionalCare() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Transitional Care</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Navigating post-hospitalization with confidence</h1>
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