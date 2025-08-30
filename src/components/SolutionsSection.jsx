"use client";

import SolutionsCard from '../components/SolutionsCard';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import { useEffect } from 'react';

export default function SolutionsSection() {
    
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        AOS.init({ duration: 880, once: true, easing: "ease-in-out" });
    }, []);


    const solutions = [
        {
            id: 1,
            title: "Data Analysis",
            subtitle: "Turn raw data into actionable insights for smarter decisions.",
            benefits: [
                "Custom dashboards for real-time reporting",
                "Data visualization that simplifies complex insights",
                "Predictive analytics for future planning",
                "Performance tracking to optimize business processes",
                "Data-driven strategies that fuel growth",
            ],
            img: "/images/solutions/data-analysis-icon.png",
            link: "/solutions/data-analysis",
        },
        {
            id: 2, 
            title: "Designs",
            subtitle: "Creative visuals that make your brand unforgettable.",
            benefits: [
                "Professional logos and brand identity kits",
                "Graphics for web, social media, and print",
                "Motion graphics and illustrations",
                "Consistent brand visuals across all platforms",
                "Eye-catching layouts for presentations & campaigns",
            ],
            img: "/images/solutions/designs-icon.png",
            link: "/solutions/designs",
        },
        {
            id: 3,
            title: "Digital Marketing",
            subtitle: "Smart strategies to boost your online presence and sales.",
            benefits: [
                "Targeted social media campaigns that convert",
                "SEO optimization for higher search rankings",
                "Email marketing that nurtures loyal customers",
                "Paid ads (PPC) to reach the right audience fast",
                "Analytics and reporting to track your success",
            ],
            img: "/images/solutions/digital-marketing-icon.png",
            link: "/solutions/digital-marketing",
        },
        {
            id: 4, 
            title: "Mobile App Development",
            subtitle: "Engaging, user-friendly apps built for iOS and Android.",
            benefits: [
                "Native and cross-platform mobile solutions",
                "Intuitive designs for a smooth user experience",
                "Secure and scalable architecture",
                "Push notifications and engagement features",
                "Continuous support and app updates",
            ],
            img: "/images/solutions/mobile-app-icon.png",
            link: "/solutions/mobile-app",
        },
        {
            id: 5,
            title: "Web Development",
            subtitle: "High-performance websites that empower your business online.",
            benefits: [
                "Custom-built websites tailored to your brand and audience",
                "Responsive designs that look great on all devices",
                "Optimized for speed, SEO, and conversions",
                "Scalable solutions that grow with your business",
                "Seamless integrations with tools and platforms you already use",
            ],
            img: "/images/solutions/web-development-icon.png",
            link: "/solutions/web-development",
        },
    ];

    return (
        <section className="px-5 lg:px-20 xl:px-30 py-20 lg:py-30 w-screen relative bg-black text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center  bg-fixed bg-cover opacity-20 z-0"
                style={{ backgroundImage: "url('/images/bg.png')" }}
            />
            
            <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-10">
                <h5 className="text-4xl lg:text-6xl font-bold mb-6">Our Tech Solutions, Your Business Growth</h5>
                <h6 className="text-lg lg:text-2xl mb-6">From startups to enterprises, we deliver tailored solutions that help brands thrive in the digital age</h6>
            </div>
            {/* Solutions grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 items-stretch">
                {solutions.map((solution, index) => (
                    <div
                        key={solution.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 350}
                        className="flex"
                    >
                        <SolutionsCard {...solution} className="flex-1" />
                    </div>
                ))}
            </div>
            <p className='text-center mt-15 text-xl text-gray-600'>
                Find out how companies succeed with us. 
                <Link href="/case-study" className='font-semibold text-gray-300' >Read our case studies</Link>
            </p>
        </section>
    )
}