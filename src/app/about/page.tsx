import BlueSection from "@/components/BlueSection";
import BlueLine from "@/components/BlueLine";
import Image from "next/image";
import Link from "next/link";

const aboutCards = [
  {
    title: "Our Mission",
    text: "Al-Shifa Home Health Care Agency is committed to providing quality health care, safety, and physical and emotional comfort to all its patients in a fashion of unparalleled excellence. We are committed to working within the financial means of all our patients while bringing quality care to the home care environment and treating each person with respect and compassion.",
  },
  {
    title: "Our Vision",
    text: "Our vision is to redefine healthcare by putting our patients first, ensuring their comfort, and exceeding their expectations. We strive to lead the way in innovative healthcare solutions that not only address medical needs but also foster a sense of belonging and well-being.",
  },
  {
    title: "Our Goal",
    text: "Our goal is to provide exemplary patient care that is well-rounded and oriented toward the patient's specific needs. Our dedication to quality patient care is depicted through our continuous quest to educate and train all personnel, the preservation of staff with proficiency in various languages such as English, Spanish, Arabic, Hindi, and Urdu, and the ambition to provide and maintain coverage throughout all of the social areas for services rendered by the Al-Shifa Home Health Care Agency.",
  },
  {
    title: "Our Philosophy",
    text: "Al-Shifa Home Health Care Agency recognizes each person's unique physical, emotional, and spiritual needs. We strive to extend the highest level of courtesy and services to patients, caregivers, families, visitors, and each other. Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BlueSection>
        <h1 className="text-4xl font-serif">About Us</h1>
      </BlueSection>

      <div className="text-center text-3xl font-questerial p-6">
        Empowering health and well-being through compassionate care.
      </div>

      <BlueLine />

      {/* Who We Are Section */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Image — hidden on mobile, centered on tablet, left on desktop */}
          <div className="hidden md:flex justify-center lg:justify-start shrink-0">
            <Image
              className="rounded-full object-cover"
              src="https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175617/about-us/2331655622Usae672.jpg"
              alt="Healthcare professional"
              width={380}
              height={380}
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6" style={{ color: "var(--neutral-800)" }}>
              Who We Are
            </h2>

            <div className="space-y-4 font-questerial" style={{ color: "var(--neutral-700)", lineHeight: 1.8 }}>
              <p>
                <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong> was
                established on April 11, 2019. We provide professional in-home health care services allowing our
                clients to remain safely and comfortably in their own homes. Our mission is to provide exceptional
                home care that enriches the lives of our clients and provides peace of mind for their families.{" "}
                <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong> offers a
                thorough program that includes assessment, care planning, care management, services coordination,
                referrals, advocacy and direct care by a multidisciplinary team and network by a geriatric care
                manager. At <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong>,
                our goal is to help our clients achieve the best quality of life possible.
              </p>

              <p>
                Our company is based on the belief that the utmost importance is our customers&apos; needs and is
                committed to serving and meeting those needs. Consequently, a high percentage of our business is from
                repeat customers and referrals.
              </p>

              <p>
                We would welcome the opportunity to earn your trust and deliver you the best service in the industry.
              </p>

              <p>
                Home health care provided by{" "}
                <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong> comes with
                life-changing benefits. Our team includes therapists, nurses, and other trained professionals who will
                design and implement treatment, together with educational plans that will protect your long-term health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Goal / Philosophy Cards */}
      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white text-neutral-700 border border-primary-200 rounded-[2.5rem] p-10 text-center hover:bg-primary-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <h3 className="font-serif text-[2rem] font-semibold mb-4 text-neutral-800 group-hover:text-white transition-colors duration-300">
                {card.title}
              </h3>
              <p className="font-questerial leading-[1.8] text-current">
                {(() => {
                  const text = card.text;
                  const brand = "Al-Shifa Home Health Care Agency";
                  if (!text.includes(brand)) return text;
                  const parts = text.split(brand);
                  return (
                    <>
                      {parts.map((part, i) => (
                        <span key={i}>
                          {part}
                          {i < parts.length - 1 && (
                            <strong className="text-primary-600 font-bold group-hover:text-white transition-colors duration-300">
                              {brand}
                            </strong>
                          )}
                        </span>
                      ))}
                    </>
                  );
                })()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="container-custom pb-16 bg-gray-100">

        <div className="">
          <h3 className="text-center text-3xl font-questerial pt-6">Discover Wellness</h3>
          <p className="text-center font-questerial p-3">Explore our services today! Your path to health begins here.{" "}<Link href="/contact" className="text-primary-600 font-bold hover:underline transition-colors">Contact our team</Link>{" "}now. </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2 mt-8">
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src="https://res.cloudinary.com/dyipiwfj8/video/upload/v1771175869/about-us/about_vid1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src="https://res.cloudinary.com/dyipiwfj8/video/upload/v1771175873/about-us/about_vid2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>



      </section>
    </>
  );
}
