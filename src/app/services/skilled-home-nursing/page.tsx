import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176006/services/skilled-home-nursing/2172610536U2etai7.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176007/services/skilled-home-nursing/2172612150U5e7i82.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176008/services/skilled-home-nursing/2172612155U5904ti.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176009/services/skilled-home-nursing/2262421617U4sem07.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176010/services/skilled-home-nursing/2280122856Uas6m57.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176011/services/skilled-home-nursing/2341722738Ua8tie1.jpg",
];

export default function SkilledHomeNursing() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Skilled Home Nursing</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Bringing expert medical care to your doorstep with compassion</h1>
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