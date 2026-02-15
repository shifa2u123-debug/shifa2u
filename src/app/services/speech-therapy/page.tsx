import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "/services/speech-therapy/23420112234U4mi10e.jpeg",
    "/services/speech-therapy/2341311457Ua5i38t.jpeg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176014/services/speech-therapy/22919114334Ua70ems.jpg",
    "/services/speech-therapy/2242222853Umi9753.jpeg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176013/services/speech-therapy/2222314341Uis28at.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176012/services/speech-therapy/21913111141Uis165e.jpg",
];

export default function SpeechTherapy() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Speech Therapy</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Unlocking confidence and stronger communication through therapy</h1>
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