import projectsData from "../../../../public/data/projectsData.json";
import BreadCrumb from "../../../components/BreadCrumb";
import PortfolioDetails from "../../../components/PortfolioDetails";
import MetricSection from "../../../components/MetricsSection";
import TestimonialSection from "../../../components/TestimonialSection";

export default function PortfolioDetailsPage({ params }) {
    const { name } = params;

    // find the project based on the link slug
    const project = projectsData.projectsData.find(
        (p) => p.link.split("/").pop() === name
    );

    if (!project) {
        return (
            <div className="px-5 lg:px-20 py-20 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Project not found</h1>
                <p className="text-gray-600 mt-4">
                    The project you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <>
            <BreadCrumb 
                label={"Portfolio"} 
                subLabel={project.title}    
            />
            <PortfolioDetails project={project} />
            <MetricSection />
            <TestimonialSection />
        </>
    );
}
