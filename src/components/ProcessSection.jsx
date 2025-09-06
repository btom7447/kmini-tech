"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const processSteps = [
    {
        id: 1, 
        title: "Discovery & Strategy",
        description:
        "We start by understanding your goals, challenges, and vision. This helps us craft a strategy tailored to your brand’s needs.",
    },
    {
        id: 2,
        title: "Planning & Design",
        description:
        "Our team creates wireframes, mockups, and prototypes — ensuring the user journey and visuals align perfectly with your objectives.",
    },
    {
        id: 3,
        title: "Development & Execution",
        description:
        "We bring your ideas to life using modern technologies and best practices, delivering scalable, high-performance solutions.",
    },
    {
        id: 4,
        title: "Testing & Quality Assurance",
        description:
        "Every project goes through rigorous testing to guarantee speed, security, and seamless user experience across all devices.",
    },
    {
        id: 5,
        title: "Launch & Delivery",
        description:
        "We roll out your solution smoothly, making sure everything is optimized and ready to create impact from day one.",
    },
    {
        id: 6,
        title: "Support & Growth",
        description:
        "Our work doesn’t stop at launch — we provide continuous support, updates, and performance optimization to help you grow.",
    },
];

export default function ProcessSection() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <section className="px-5 lg:px-20 xl:px-30 py-15 lg:py-20 relative bg-black text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center bg-fixed bg-cover opacity-20 z-0"
                style={{ backgroundImage: "url('/images/bg.png')" }}
            />

            {/* Section Header */}
            <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-10">
                <h5 className="text-4xl lg:text-6xl font-bold mb-2 lg:mb-6">Our Process, Your Success</h5>
                <h6 className="text-lg lg:text-2xl mb-6">A simple, proven workflow that ensures every project delivers results</h6>
            </div>
            {/* Solutions grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 items-stretch">
                {processSteps.map((step, index) => (
                    <div
                        key={index}
                        className="w-full group bg-white/10 backdrop-blur-sm hover:bg-white/20 p-5 lg:p-10 transition-transform duration-300 relative"
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <div className="flex items-center gap-10 justify-between">
                            <h3 className="text-3xl font-semibold mb-2">
                                {step.title}
                            </h3>
                            <h4 className="text-3xl text-gray-600" aria-hidden="true">{step.id}</h4>
                        </div>
                        <p className="mt-3 text-xl text-gray-300">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
