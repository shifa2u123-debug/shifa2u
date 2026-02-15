
import BlueSection from "@/components/BlueSection";
import FreeAssessmentForm from "./components/form";

export default function FreeAssessmentPage() {
   
    return (
        <>
            <BlueSection>
                <h1 className="text-4xl text-center font-serif">Free In-Home Assessment</h1>
            </BlueSection>
            {/* <div className="page-header">
                <div className="container-custom">
                
                    <div className="breadcrumb text-primary-100">
                        <Link href="/" className="text-white hover:underline">Home</Link>
                        <span className="mx-2">»</span>
                        <span>Free In-Home Assessment</span>
                    </div>
                </div>
            </div> */}
            <div className="space-y-4 font-questerial p-4" style={{ color: "var(--neutral-700)", lineHeight: 1.8 }}>
                <p>
                    Experience care tailored to you. We recognize that every individual has unique healthcare needs. Request a free in-home assessment by completing the form below, allowing us to understand your requirements better. This personalized approach ensures that our services align with your expectations, promoting your well-being and comfort.
                </p>

            </div>

           <FreeAssessmentForm/>
        </>
    );
}
