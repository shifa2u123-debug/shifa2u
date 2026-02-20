import BlueSection from "@/components/BlueSection";
import Image from "next/image";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175991/services/post-surgical-rehabilitation/2172611348Ut97i3m.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175992/services/post-surgical-rehabilitation/2222434321U81t74s.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175993/services/post-surgical-rehabilitation/2240711919Um25i1s.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175994/services/post-surgical-rehabilitation/2251711832Um52t84.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175996/services/post-surgical-rehabilitation/23316111122U4t3a12.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175997/services/post-surgical-rehabilitation/23414101224U10sti4.jpg",
];

export default function PostSurgicalRehabilation() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Post Surgical Rehabilitation</h1>
            </BlueSection>

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