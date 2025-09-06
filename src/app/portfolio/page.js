import BreadCrumb from "../../components/BreadCrumb";
import { PortfolioSection } from "../../components/PortfolioSection";

export default function PortfolioPage() {
    return (
        <>
            <BreadCrumb
                label={"Portfolio"} 
                subLabel={""}    
            />
            <PortfolioSection />
        </>
    )
};