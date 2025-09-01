import { CheckCheckIcon } from "lucide-react";
import RequestQuoteForm from "../components/RequestQuoteForm";

const requestQuoteInfo = {
    title: "Let’s Build Something Great Together",
    subtitle: "Get a Free, No-Obligation Quote",
    description: `At Kmini Technologies, we believe every project starts with a conversation. 
    Our team is ready to understand your vision and provide tailored solutions that fit your goals and budget. 
    Share your ideas with us today, and let’s turn them into impactful results.`,
    bulletPoints: [
        "Custom solutions designed around your business needs",
        "Transparent pricing with no hidden fees",
        "Expert guidance from our dedicated team",
        "Fast response times and clear communication",
        "Flexible packages for startups and enterprises",
    ],
    cta: "Tell us about your project and we’ll get back to you within 24 hours.",
};

export default function RequestQuoteSection() {
    return (
        <section className="px-5 lg:px-20 xl:px-30 py-20 lg:py-30 w-screen bg-white grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
            {/* Left Content */}
            <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-semibold text-black"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    {requestQuoteInfo.title}
                </h2>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gold"
                    data-aos="fade-down"
                    data-aos-delay="300"
                >
                    {requestQuoteInfo.subtitle}
                </h3>
                <p className="text-lg lg:text-2xl font-light text-gray-600"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    {requestQuoteInfo.description}
                </p>
                <ul className="space-y-3"
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    {requestQuoteInfo.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-md lg:text-xl text-gray-600">
                            <span className="text-gold">
                                <CheckCheckIcon size={20} />
                            </span> {point}
                        </li>
                    ))}
                </ul>

                <p className="text-gold text-xl underline"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {requestQuoteInfo.cta}
                </p>
            </div>

            {/* Right Form */}
            <div data-aos="fade-left">
                <RequestQuoteForm />
            </div>
        </section>
    );
}
