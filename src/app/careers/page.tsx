import BlueSection from "@/components/BlueSection";
import CareerRequestForm from "./components/form";

export default function CareersPage() {

    return (
        <>
            <BlueSection>
                <h1 className="text-4xl text-center font-serif">Careers</h1>
            </BlueSection>
          
            <div className="space-y-4 font-questerial p-4" style={{ color: "var(--neutral-700)", lineHeight: 1.8 }}>
                <p>
                    Discover how you can be part of our mission by completing the form below. We look forward to reviewing your qualifications and exploring potential opportunities to work together.
                </p>

            </div>
            <CareerRequestForm/>


        </>
    );
}
