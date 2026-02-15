import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176005/services/senior-care/2341450738Um65t9e.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176003/services/senior-care/23119120112U613tse.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176001/services/senior-care/2262344302U9ams16.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176000/services/senior-care/21727111830U0a6em2.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175999/services/senior-care/21726123305U1268ma.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175998/services/senior-care/21112510749U3t4195.jpg",
];

export default function SeniorCare() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Senior Care</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Elevating the golden years with specialized senior care</h1>
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