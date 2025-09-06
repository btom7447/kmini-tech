import BreadCrumb from "../../../components/BreadCrumb";
import solutionsData from "../../../../public/data/solutionsData.json";
import overviewData from "../../../../public/data/overviewData.json";
import { OverviewSection } from "../../../components/OverviewSection";
import { BenefitsSection } from "../../../components/BenefitsSection";
import { FAQSection } from "../../../components/FAQSection";
import PricingPlanSection from "../../../components/PricingPlanSection";
import TestimonialSection from "../../../components/TestimonialSection";

export default function DataAnalysisPage() {
    const webDevelopment = solutionsData.solutions.webDevelopment;
    const overview = overviewData.solutions.webDevelopment.overview;

    return (
        <>
            <BreadCrumb 
                label={"Solutions"} 
                subLabel={"Web Development"}    
            />

            <OverviewSection overview={overview} />

            <BenefitsSection 
                benefits={webDevelopment.benefits} 
                title="Why you need a website" 
            />

            <FAQSection 
                faq={webDevelopment.faq} 
                title="Web Development FAQs" 
            />
            <PricingPlanSection />
            <TestimonialSection />
        </>
    );
}
