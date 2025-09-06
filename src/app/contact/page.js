import BreadCrumb from "../../components/BreadCrumb";
import ContactSection from "../../components/ContactSection";
import MapSection from "../../components/MapSection";

export default function ContactPage() {
    return (
        <>
            <BreadCrumb
                label={"Contact"} 
            />
            <ContactSection />
            <MapSection />
        </>
    )
}