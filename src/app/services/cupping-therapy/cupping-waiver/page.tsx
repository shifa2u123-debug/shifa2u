import BlueSection from "@/components/BlueSection"
import CuppingWaiverForm from "./form"
export default function CuppingWaiver(){
    return(
        <>
              <BlueSection>
                <h1 className="text-4xl text-center font-serif">Cupping Waiver</h1>
            </BlueSection>

            <CuppingWaiverForm/>
        </>
    )
}