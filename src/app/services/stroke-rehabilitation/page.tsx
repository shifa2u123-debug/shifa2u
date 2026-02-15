import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176020/services/stroke-rehabilitation/2280154936U138ei7.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176019/services/stroke-rehabilitation/2221610607U3s42e7.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176018/services/stroke-rehabilitation/2172633035U4e0t1s.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176017/services/stroke-rehabilitation/2172630441Ume1t3a.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176016/services/stroke-rehabilitation/21726125048Ut50367.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176015/services/stroke-rehabilitation/2171613723U1sa935.jpg",
];

export default function StrokeRehabilation() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Stroke Rehabilation</h1>
            </BlueSection>
            <h1 className="text-center text-2xl font-questerial p-6">Regaining strength and independence after stroke</h1>
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