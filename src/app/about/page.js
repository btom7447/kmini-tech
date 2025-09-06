import BreadCrumb from "../../components/BreadCrumb";
import AboutSection from "../../components/AboutSection";
import ProcessSection from "../../components/ProcessSection";
import MetricsSection from "../../components/MetricsSection";
import TestimonialSection from "../../components/TestimonialSection";
import ExpertiseSection from "../../components/ExpertiseSection";

export default function AboutPage() {
    return (
        <>
            <BreadCrumb label={"About"} />
            <AboutSection />
            <ProcessSection />
            <MetricsSection />
            <TestimonialSection />
            <ExpertiseSection />
        </>
    )
}