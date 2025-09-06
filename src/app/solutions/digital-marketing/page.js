import BreadCrumb from "../../../components/BreadCrumb";
import solutionsData from "../../../../public/data/solutionsData.json";
import overviewData from "../../../../public/data/overviewData.json";
import { OverviewSection } from "../../../components/OverviewSection";
import { BenefitsSection } from "../../../components/BenefitsSection";
import { FAQSection } from "../../../components/FAQSection";
import PricingPlanSection from "../../../components/PricingPlanSection";
import TestimonialSection from "../../../components/TestimonialSection";

export default function DataAnalysisPage() {
    const digitalMarketing = solutionsData.solutions.digitalMarketing;
    const overview = overviewData.solutions.digitalMarketing.overview;

    return (
        <>
            <BreadCrumb 
                label={"Solutions"} 
                subLabel={"Digital Marketing"}    
            />

            <OverviewSection overview={overview} />

            <BenefitsSection 
                benefits={digitalMarketing.benefits} 
                title="Why you should market digitally" 
            />

            <FAQSection 
                faq={digitalMarketing.faq} 
                title="Digital Marketing FAQs" 
            />
            <PricingPlanSection />
            <TestimonialSection />
        </>
    );
}
