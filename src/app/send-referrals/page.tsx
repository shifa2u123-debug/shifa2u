import BlueSection from "@/components/BlueSection"
import ReferralForm from "./form"

export default function SendReferrals(){
    return(
        <>
        <BlueSection>
                <h1 className="text-4xl text-center font-serif">Send Your Referrals</h1>
        </BlueSection>

        <div className="p-5 space-y-4 font-questerial" style={{ color: "var(--neutral-700)", lineHeight: 1.8 }}>
              <p>
                Share the gift of care with loved ones. If you’ve experienced the exceptional services of
                <strong style={{ color: "var(--primary-600)" }}> Al-Shifa Home Health Care Agency</strong>, why not extend the same quality care to those you care about? Recommend our services and contribute to the well-being of your friends and family by completing the form below.
              </p>
        </div>

        <ReferralForm/>
        </>
    )
}