import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175970/services/medical-social-services/2362155019Um53798.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175969/services/medical-social-services/23314102958U6t843m.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175968/services/medical-social-services/22914110733Us6a054.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175966/services/medical-social-services/2272810326U8379m5.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175965/services/medical-social-services/2262421316U57ie4t.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175962/services/medical-social-services/21716115135U64i05a.jpg",
];

export default function MedicalSocialServices() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Medical Social Services</h1>
            </BlueSection>

            <h1 className="text-center text-2xl font-questerial p-6">Guiding your healthcare journey with compassionate support</h1>
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