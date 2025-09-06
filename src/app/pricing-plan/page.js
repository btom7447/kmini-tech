import BreadCrumb from "../../components/BreadCrumb";
import PricingSection from "../../components/PricingSection";
import ProcessSection from "../../components/ProcessSection";
import TestimonialSection from "../../components/TestimonialSection";

export default function PricingPlanPage() {
    return (
        <>
            <BreadCrumb
                label={"Pricing & Plan"} 
            />     
            <PricingSection />   
            <ProcessSection />
            <TestimonialSection />
        </>
    )
}