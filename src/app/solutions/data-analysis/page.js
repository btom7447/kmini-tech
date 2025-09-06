import BreadCrumb from "../../../components/BreadCrumb";
import solutionsData from "../../../../public/data/solutionsData.json";
import overviewData from "../../../../public/data/overviewData.json";
import { OverviewSection } from "../../../components/OverviewSection";
import { BenefitsSection } from "../../../components/BenefitsSection";
import { FAQSection } from "../../../components/FAQSection";
import PricingPlanSection from "../../../components/PricingPlanSection";
import TestimonialSection from "../../../components/TestimonialSection";

export default function DataAnalysisPage() {
    const dataAnalysis = solutionsData.solutions.dataAnalysis;
    const overview = overviewData.solutions.dataAnalysis.overview;

    return (
        <>
            <BreadCrumb 
                label={"Solutions"} 
                subLabel={"Data Analysis"}    
            />

            <OverviewSection overview={overview} />

            <BenefitsSection 
                benefits={dataAnalysis.benefits} 
                title="Importance of Understanding Data" 
            />

            <FAQSection 
                faq={dataAnalysis.faq} 
                title="Data Analysis FAQs" 
            />
            <PricingPlanSection />
            <TestimonialSection />
        </>
    );
}
