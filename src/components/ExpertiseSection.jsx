"use client";

import SkillsRange from "./SkillRange";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
    {
        title: "Web Development Efficiency",
        percent: 95,
        color: "bg-gray-600",
        description: "High-performance websites built to scale and deliver measurable results.",
    },
    {
        title: "Mobile App Engagement",
        percent: 90,
        color: "bg-gray-400",
        description: "Apps that keep users coming back with smooth, intuitive experiences.",
    },
    {
        title: "UI/UX Satisfaction",
        percent: 95,
        color: "bg-gray-600",
        description: "Designs that delight users and improve retention across platforms.",
    },
    {
        title: "Digital Marketing Impact",
        percent: 85,
        color: "bg-gray-400",
        description: "Campaigns that increase traffic, conversions, and audience engagement.",
    },
    {
        title: "Data-Driven Decisions",
        percent: 85,
        color: "bg-gray-600",
        description: "Analytics and dashboards that transform data into actionable insights.",
    },
    {
        title: "Creative Design Quality",
        percent: 90,
        color: "bg-gray-400",
        description: "Visuals and branding that make your business stand out.",
    },
];

export default function ExpertiseSection() {
    const skillsRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);
    const [percentages, setPercentages] = useState([0, 0, 0]); 

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out-cubic" });

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setStartAnimation(true);

                        skills.forEach((skill, idx) => {
                            let start = 0;
                            const increment = skill.percent / 100; // Adjust speed
                            const interval = setInterval(() => {
                                start += increment;
                                setPercentages((prev) => {
                                const newArr = [...prev];
                                newArr[idx] = Math.min(Math.round(start), skill.percent);
                                return newArr;
                                });
                                if (start >= skill.percent) clearInterval(interval);
                            }, 30);
                        });
                    }, 500); // Delay before animation starts
                    observer.disconnect(); // Run only once
                }
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => observer.disconnect();
    }, []);


    return (
       <section className="px-5 lg:px-20 xl:px-30 py-15 lg:py-20 relative bg-black text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center bg-fixed bg-cover opacity-20 z-0"
                style={{ backgroundImage: "url('/images/bg.png')" }}
            />

            {/* Section Header */}
            <div className="mb-20 grid grid-col-1 lg:grid-cols-2 items-center gap-10">
                <h5 className="text-4xl lg:text-6xl font-bold mb-2 lg:mb-6">Where We Excel: Measurable Expertise</h5>
                <h6 className="text-lg lg:text-2xl mb-6">See how Kmini Technologies delivers results across different areas of tech.</h6>
            </div>

            {/* Metrics Grid */}
            <SkillsRange
                skills={skills} 
                skillsRef={skillsRef} 
                startAnimation={startAnimation} 
                percentages={percentages}
            />

            {/* Closing line */}
            <p className="mt-16 text-center text-white text-lg lg:text-xl max-w-4xl mx-auto">
                These metrics reflect our commitment to quality, efficiency, and results — ensuring every project drives real value for our clients.
            </p>
        </section>
    );
}
