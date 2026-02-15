import BlueSection from "@/components/BlueSection";
import TestimonialsForm from "./form";

const testimonials = [
    {
        id: 1,
        name: "Calvin, Bernetta",
        text: "I have a strong appreciation for the registered nurse from Al-Shifa Home Healthcare Agency who regularly visits me. Their communication skills are truly impressive. I would be delighted to recommend Al-Shifa Home Healthcare Agency to more individuals in need. In general, their team is highly educated and exceptionally skilled.",
    },
    {
        id: 2,
        name: "Khan, Shakeel",
        text: "Al-Shifa Home Healthcare Agency provided invaluable support when I needed it most. I received the care and compassion that I rightfully deserved, which significantly contributed to the improvement of both my physical and mental well-being.",
    },
    {
        id: 3,
        name: "Hernandez, Norma",
        text: "My experience with Al-Shifa Home Healthcare Agency was outstanding. The nurse who attended to my mother provided her with exceptional care, akin to how one would care for a baby – it was truly remarkable. Al-Shifa Home Healthcare Agency conducted an in-home assessment for my mom. I would certainly welcome the opportunity to use their services again in the future.",
    },
    {
        id: 4,
        name: "Yordi, Aileen",
        text: "I had some concerns about the scheduling process, as I was only able to have an exercise nurse visit me once a week. There were inconsistencies with the scheduling, with some appointments being made only a day in advance, and others being canceled at the last minute. However, I would like to acknowledge the excellent service provided by the two nurses who cared for me. They did a commendable job and offered valuable information during their visits.",
    },
    {
        id: 5,
        name: "Sharma, Kris",
        text: "We had an overwhelmingly positive experience with Al-Shifa Home Healthcare Agency for my wife. Everything went smoothly, and the only reason for our discharge was due to the insurance company not extending the services. Nonetheless, I am deeply grateful for the diligent efforts made by Al-Shifa Home Healthcare Agency.",
    },
];

export default function Testimonials() {
    return (
        <>
            <BlueSection>
                <h1 className="text-center text-4xl font-serif">Client Testimonials</h1>
            </BlueSection>

            <section className="section bg-white">
                <div className="container-custom">
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
                </div>
            </section>

            <TestimonialsForm/>
        </>
    );
}