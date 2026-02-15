import BlueSection from "@/components/BlueSection";
import Image from "next/image";
import BlueLine from "@/components/BlueLine";

const images = [
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175770/about-us/thumb-2172640449U3261e5.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175771/about-us/thumb-2172645423U16590t.jpg",
    "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175772/about-us/thumb-22919103525Ue9143m.jpg",
];

export default function Caregivers() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Meet Our Caregivers</h1>
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

            
            <div className="p-4 space-y-4 font-questerial" style={{ color: "var(--neutral-700)", lineHeight: 1.8 }}>
              <p>
                At <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong>, our foremost priority is delivering exceptional healthcare services through a team of licensed, certified, and extensively trained professionals. Our commitment to excellence is reflected in the rigorous selection process our workforce undergoes, which includes thorough background checks and interviews. This ensures that every member of our team is not only skilled but also dedicated to upholding the highest standards of patient care.
              </p>
              <p>To elevate our customer service even further, we maintain a close partnership with our patients’ primary physicians. This collaboration enables us to craft personalized care plans that cater to individual health requirements, fostering improved functionality and overall well-being. By working hand-in-hand with primary healthcare providers, we ensure a seamless and comprehensive approach to our patients’ health journey.
              </p>
              <p>
                Staying at the forefront of healthcare practices is a cornerstone of our agency. Our professionals regularly participate in training sessions and seminars, equipping them with the latest ethics, standards, principles, and techniques in the field of home health care. This commitment to ongoing education empowers our team to provide the best possible care, rooted in the latest advancements and evidence-based practices.
              </p>
              <p>
                <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong> is dedicated to enriching the lives of our patients through unwavering dedication to quality, collaboration, and continuous learning. Your well-being is our priority, and we are honored to be a part of your healthcare journey.
              </p>
            </div>
        </>
    );
}