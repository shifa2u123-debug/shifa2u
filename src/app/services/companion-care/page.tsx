import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175936/services/companion-care/22602103500U8t6321.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175937/services/companion-care/23515101824U57096m.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175935/services/companion-care/2182321636Ut9157i.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175934/services/companion-care/2172640349U19tm6e.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175933/services/companion-care/2172632952U295ea7.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175932/services/companion-care/2172630441Ume1t3a.jpg",
];

export default function CompanionCare() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Companion Care</h1>
            </BlueSection>
             <h1 className="text-center text-2xl font-questerial p-6">Fostering well-being through companionship and care</h1>
                        <BlueLine/>

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