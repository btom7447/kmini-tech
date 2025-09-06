import BreadCrumb from "../../../components/BreadCrumb";
import solutionsData from "../../../../public/data/solutionsData.json";
import overviewData from "../../../../public/data/overviewData.json";
import { OverviewSection } from "../../../components/OverviewSection";
import { BenefitsSection } from "../../../components/BenefitsSection";
import { FAQSection } from "../../../components/FAQSection";
import PricingPlanSection from "../../../components/PricingPlanSection";
import TestimonialSection from "../../../components/TestimonialSection";

export default function DataAnalysisPage() {
    const mobileApps = solutionsData.solutions.mobileApps;
    const overview = overviewData.solutions.mobileApps.overview;

    return (
        <>
            <BreadCrumb 
                label={"Solutions"} 
                subLabel={"Mobile Apps"}    
            />

            <OverviewSection overview={overview} />

            <BenefitsSection 
                benefits={mobileApps.benefits} 
                title="Why you need an App" 
            />

            <FAQSection 
                faq={mobileApps.faq} 
                title="Mobile Apps FAQs" 
            />
            <PricingPlanSection />
            <TestimonialSection />
        </>
    );
}
