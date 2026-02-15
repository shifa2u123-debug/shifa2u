import BlueSection from "@/components/BlueSection";
import BlueLine from "@/components/BlueLine";
import ServiceCard from "@/components/ServiceCard";
import OtherServices from "@/components/OtherServices";

const servicesData = [
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176023/services/thumb-2331415555U46seit.jpg", title: "Post-Surgical Rehabilitation", link: "/services/post-surgical-rehabilitation" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176021/services/thumb-22323124704U098i1s.jpg", title: "Orthopedic Rehabilitation", link: "/services/orthopedic-rehabilitation" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771176022/services/thumb-2280210637U9mae53.jpg", title: "Stroke Rehabilitation", link: "/services/stroke-rehabilitation" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175905/services/2172633914U8et3ms.jpg", title: "Physical Therapy", link: "/services/physical-therapy" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175907/services/221019100528U0432a1.jpg", title: "Skilled Home Nursing", link: "/services/skilled-home-nursing" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175908/services/22112923419U38sa6i.jpg", title: "Speech Therapy", link: "/services/speech-therapy" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175912/services/2290152436Us456i2.jpg", title: "Cupping Therapy", link: "/services/cupping-therapy" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175913/services/2331414705Ui9t26m.jpg", title: "Occupational Therapy", link: "/services/occupational-therapy" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175903/services/2172623957Use5i98.jpg", title: "Medical Social Services", link: "/services/medical-social-services" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175922/services/2331650928U913650.jpg", title: "Health Home Aides", link: "/services/health-home-aides" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175924/services/2372554544Utaim0e.jpg", title: "Senior Care", link: "/services/senior-care" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175911/services/2212052152Um1a5e8.jpg", title: "Companion Care", link: "/services/companion-care" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175923/services/23317111649Ua60258.jpg", title: "Transitional Care", link: "/services/transitional-care" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175906/services/2172641008Ut5162i.jpg", title: "Disability Service", link: "/services/disability-service" },
    { src: "https://res.cloudinary.com/dyipiwfj8/image/upload/v1771175916/services/2331541710U69m24i.jpg", title: "24-hour Live-in-Care", link: "/services/24-hour-live-in-care" },
];

export default function ServicesPage() {
    return (
        <>
            <BlueSection>
                <h1 className="text-4xl font-serif">Services</h1>
            </BlueSection>

            <div className="text-center text-3xl font-questerial p-6">
                Comprehensive healthcare solutions tailored to your needs
            </div>

            <BlueLine />

            <section className="container-custom py-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} imageSrc={service.src} title={service.title} link={service.link} />
                    ))}
                </div>
            </section>

            <OtherServices />
        </>
    );
}