import BreadCrumb from "../../../components/BreadCrumb";
import solutionsData from "../../../../public/data/solutionsData.json";
import overviewData from "../../../../public/data/overviewData.json";
import { OverviewSection } from "../../../components/OverviewSection";
import { BenefitsSection } from "../../../components/BenefitsSection";
import { FAQSection } from "../../../components/FAQSection";
import PricingPlanSection from "../../../components/PricingPlanSection";
import TestimonialSection  from "../../../components/TestimonialSection";

export default function DataAnalysisPage() {
    const designs = solutionsData.solutions.designs;
    const overview = overviewData.solutions.designs.overview;

    return (
        <>
            <BreadCrumb 
                label={"Solutions"} 
                subLabel={"Designs"}    
            />

            <OverviewSection overview={overview} />

            <BenefitsSection 
                benefits={designs.benefits} 
                title="Importance of Understanding Data" 
            />

            <FAQSection 
                faq={designs.faq} 
                title="Design FAQs" 
            />
            <PricingPlanSection />
            <TestimonialSection />
        </>
    );
}
