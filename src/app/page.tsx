import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import BlueLine from "@/components/BlueLine";
import ServiceCard from "@/components/ServiceCard";
import ScrollAnimation from "@/components/animations/ScrollAnimation";

// Services data
const servicesData = [
  { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175896/landing/ser1.jpg", title: "Post-Surgical Rehabilitation", link: "/services/post-surgical-rehabilitation" },
  { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175897/landing/ser2.jpg", title: "Orthopedic Rehabilitation", link: "/services/orthopedic-rehabilitation" },
  { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175898/landing/ser3.jpg", title: "Stroke Rehabilitation", link: "/services/stroke-rehabilitation" },
  { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175899/landing/ser4.jpg", title: "View More ➜", link: "/services" },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Yordi, Aileen",
    text: "I had some concerns about the scheduling process, as I was only able to have an exercise nurse visit me once a week. There were inconsistencies with the scheduling, with some appointments being made only a day in advance, and others being canceled at the last minute. However, I would like to acknowledge the excellent service provided by the two nurses who cared for me. They did a commendable job and offered valuable information during their visits.",
  },
  {
    id: 2,
    name: "Sharma, Kris",
    text: "We had an overwhelmingly positive experience with Al-Shifa Home Healthcare Agency for my wife. Everything went smoothly, and the only reason for our discharge was due to the insurance company not extending the services. Nonetheless, I am deeply grateful for the diligent efforts made by Al-Shifa Home Healthcare Agency.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Mission Section */}
      <section className="section bg-white overflow-hidden py-2 lg:py-8">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column: Image with Overlay Card */}
              <div className="relative order-2 lg:order-1">
                {/* Main Image */}
                <div className="relative aspect-[4/3] w-full rounded-tr-[8rem] rounded-bl-[4rem] overflow-hidden shadow-xl">
                  <Image
                    src="https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175894/landing/landing.jpg"
                    alt="Caring nurse with elderly patient"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Overlay Card - Free Assessment */}
                <div className="absolute -bottom-10 -right-4 lg:-right-10 w-[80%] lg:w-[60%]">
                  <Link href="/free-assessment" className="block">
                    <div
                      className="group relative bg-white text-neutral-800 border-2 border-primary-100 rounded-[2rem] p-6 lg:p-8 shadow-2xl hover:bg-primary-600 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center"
                    >
                      <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
                        <svg className="w-10 h-10 lg:w-12 lg:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <div>
                        <h3 className="text-xl lg:text-2xl font-medium mb-1 group-hover:text-white transition-colors duration-300">
                          Free In-Home
                        </h3>
                        <h2 className="text-2xl lg:text-3xl font-bold group-hover:text-white transition-colors duration-300">
                          Assessment
                        </h2>
                      </div>


                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Column: Mission Text */}
              <div className="mt-16 lg:mt-0 text-left order-1 lg:order-2">
                <h2 className="text-center text-4xl lg:text-6xl font-serif text-neutral-800 mb-6 leading-tight">
                  Our Mission
                </h2>
                <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed mb-8">
                  <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency</strong> is committed to providing quality health care,
                  safety, and physical and emotional comfort to all its patients in a fashion of
                  unparalleled excellence…
                </p>
                <div className="text-left">
                  <Link href="/about" className="btn btn-primary rounded-full px-8 py-3 text-lg">
                    About Us ➜
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Spacing for overlay card */}
      <div className="h-25 lg:h-20"></div>

      {/* Steep Blue Line Separator */}
      <div className="w-full h-16 md:h-24 overflow-hidden -mt-10 relative z-0">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full text-primary-600 fill-current">
          <path d="M0,0 L1440,80 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* About Agency Section */}
      <section className="section bg-white pt-10 pb-1">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-6xl md:text-8xl font-serif text-primary-600 mb-6">
                Al-Shifa <br />
                <span className="text-4xl md:text-6xl text-neutral-700">Home Health Care Agency</span>
              </h2>
              <p className="text-md text-center md:text-lg  text-neutral-600 leading-relaxed mb-8 text-justify">
                In life&apos;s journey, health challenges are inevitable. From recovering
                after surgery to seeking support for elderly loved ones, navigating
                healthcare complexities can be overwhelming. At <strong className="text-primary-700">Al-Shifa Home Health Care Agency</strong>, we understand these situations all too well. We&apos;re here
                to ease your worries and provide solutions that make a difference.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8 text-justify">
                With us, wellness is brought to your doorstep, allowing you or your
                loved ones to experience a higher quality of life. Let us be your
                trusted partner on the path to well-being.
              </p>
            </div>
          </ScrollAnimation>

          <BlueLine />
        </div>
      </section>



      {/* Services Section */}
      <section className="container-custom py-10">
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl lg:text-6xl">Services We Offer</h2>
            <p className="text-gray-500 text-xl section-subtitle">
              Explore our diverse range of exceptional services designed to cater to
              your unique healthcare needs and preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} imageSrc={service.src} title={service.title} link={service.link} />
            ))}
          </div>
        </ScrollAnimation>
      </section>

      <BlueLine />

      {/* Referrals & Insurance Cards */}
      <div className="container-custom mt-6 mx-auto px-6">
        <ScrollAnimation direction="up">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Referral Card */}
            <Link href="/send-referrals" className="block h-full">
              <div className="group bg-white text-neutral-800 border border-primary-200 rounded-[2.5rem] p-10 text-center hover:bg-primary-600 hover:text-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center gap-6">
                <div className="text-primary-700 group-hover:text-white transition-colors duration-300 mb-2">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-1">
                    Send Your
                  </h3>
                  <h2 className="text-4xl font-normal">
                    Referrals
                  </h2>
                </div>
                <p className="text-neutral-600 group-hover:text-primary-100 transition-colors duration-300 text-lg leading-relaxed">
                  Share skilled and genuine care with your loved ones for their well-being.
                </p>
              </div>
            </Link>

            {/* Insurance Card */}
            <Link href="/insurance-accepted" className="block h-full ">
              <div className="group bg-white text-neutral-800 border border-primary-200 rounded-[2.5rem] p-10 text-center hover:bg-primary-600 hover:text-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center gap-6 relative">
                <div className="text-primary-700 group-hover:text-white transition-colors duration-300 mb-2">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-normal mb-1">
                    Insurance
                  </h3>
                  <h2 className="text-4xl font-normal">
                    Accepted
                  </h2>
                </div>
                <p className="text-neutral-600 group-hover:text-primary-100 transition-colors duration-300 text-lg leading-relaxed">
                  Simplifying access to healthcare through inclusive insurance coverage.
                </p>

              </div>
            </Link>
          </div>
          <BlueLine />
        </ScrollAnimation>
      </div>



      {/* Testimonials Section */}
      <section className="section bg-neutral-50 pt-10">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <h2 className="section-title text-4xl lg:text-6xl">Client Testimonials</h2>
              <p className="section-subtitle text-gray-500 text-xl">
                See what our clients have to say about our staff and services by reading
                some of our testimonials they sent.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-primary-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <span className="font-bold text-neutral-900 text-lg">
                      - {testimonial.name}
                    </span>
                    <span className="text-neutral-600 ml-1">says:</span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed font-questerial">
                    {testimonial.text.split(/(Al-Shifa Home Healthcare Agency)/g).map((part, index) =>
                      part === "Al-Shifa Home Healthcare Agency" ? (
                        <strong key={index} className="text-primary-700 font-bold">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/resources/testimonials" className="btn btn-secondary">
                View More »
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
