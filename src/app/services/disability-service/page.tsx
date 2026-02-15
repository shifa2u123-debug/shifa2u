import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175955/services/disability-service/2351912238U08431a.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175954/services/disability-service/22520111118Uei3769.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175952/services/disability-service/22110912327U5t1497.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175951/services/disability-service/21716114952Um6t0s7.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175950/services/disability-service/21121044533U6041s5.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175948/services/disability-service/211014104604U9t3185.jpg",
];

export default function DisabilityService() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Disability Service</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Tailored support for individuals with disabilities</h1>
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