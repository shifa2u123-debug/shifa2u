import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175931/services/24-hour-live-in-care/2332821124U1i543t.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175930/services/24-hour-live-in-care/23119104718U258a6m.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175929/services/24-hour-live-in-care/22429124815U5m278e.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175928/services/24-hour-live-in-care/22101195705Ua89t2s.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175926/services/24-hour-live-in-care/2172623322U0s1at2.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175925/services/24-hour-live-in-care/211006101533U064981.jpg",
];

export default function HourLiveInService() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">24 Hour Live In Care</h1>
            </BlueSection>

            <h1 className="text-center text-2xl font-questerial p-6">Unwavering support around the clock</h1>
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