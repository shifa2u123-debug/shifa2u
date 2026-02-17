import BlueSection from "@/components/BlueSection"
import Image from "next/image"

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175882/insurance/insurance-img1.png",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175883/insurance/insurance-img2.png",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175884/insurance/insurance-img3.png",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175885/insurance/insurance-img4.png",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175886/insurance/insurance-img6.png",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175887/insurance/insurance-img7.png",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175888/insurance/insurance-img8.png",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175889/insurance/insurance-img9.png",
];

export default function InsuranceAccepted(){
    return(
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Insurance Accepted</h1>
            </BlueSection>
            
             <div className="p-5 space-y-4 font-questerial" style={{ color: "var(--neutral-700)", lineHeight: 1.8 }}>
              <p>
                Simplify your healthcare journey. We understand the importance of hassle-free processes. 
                <strong style={{ color: "var(--primary-600)" }}> Al-Shifa Home Health Care Agency</strong>  is pleased to accept a variety of insurance plans. Explore the range of coverage options available to you by giving us a call.
              </p>
            </div>

               <section className="container-custom py-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {images.map((src, i) => (
                                    <div
                                        key={i}
                                        className="overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Insurance Company Accepted ${i + 1}`}
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
    )
}