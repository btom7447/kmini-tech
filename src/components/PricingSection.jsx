"use client";

import { CheckCheckIcon } from "lucide-react";
import React from "react";

const pricingPlans = [
    {
        name: "Starter",
        tagline: "Best for Small Businesses",
        price: "$499",
        features: [
            "Professional website (up to 5 pages) or brand kit",
            "Basic SEO optimization",
            "Social media setup (2 platforms)",
            "1 month of support",
            "Delivery in 2–3 weeks",
        ],
    },
    {
        name: "Growth",
        tagline: "Best for Scaling Brands",
        price: "$1,499",
        features: [
            "Advanced website (e-commerce or custom features)",
            "Mobile-ready & optimized for speed",
            "Social media management (content + ads for 3 platforms)",
            "Graphic design package (banners, posts, brand visuals)",
            "Data insights dashboard (basic analytics)",
            "3 months of support",
        ],
    },
    {
        name: "Enterprise",
        tagline: "Best for Established Businesses",
        price: "Custom Pricing (from $3,499)",
        features: [
            "Full-scale web or mobile app development",
            "Advanced UI/UX design and prototyping",
            "Dedicated digital marketing campaigns (SEO, PPC, email, SMM)",
            "Data analytics & reporting dashboards",
            "Priority support + ongoing maintenance",
            "Team training & onboarding",
        ],
    },
    ];

    const addOns = [
        { service: "Mobile App Development", price: "$1,999" },
        { service: "SEO & Digital Marketing", price: "$499/month" },
        { service: "Graphic & Motion Design", price: "$299/project" },
        { service: "Data Analysis & Dashboards", price: "$999" },
    ];

export default function PricingSection() {
    return (
        <section className="py-20 px-5 lg:px-20 xl:px-30 bg-white text-black">
            {/* Section Header */}
            <div className="mb-20">
                <h2 
                    id="about-heading"
                    className="text-3xl lg:text-5xl text-black" 
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    Flexible Plans Designed for Every Brand
                </h2>
                <p 
                    className="mt-5 text-lg lg:text-2xl font-light text-gray-600"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    Choose a package that fits your needs — from startups to enterprises, we’ve got you covered.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid gap-10 lg:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`w-full group bg-black backdrop-blur-sm hover:bg-gray-800/20 p-5 py-10 lg:p-10 transition-transform duration-300 flex flex-col justify-between overflow-hidden relative
                        ${plan.name === "Growth" ? "border-t-2 border-gold" : ""}`}
                    >
                        {/* Background image */}
                        <div
                            className="absolute inset-0 bg-center bg-fixed bg-cover opacity-5 z-0"
                            style={{ backgroundImage: "url('/images/bg.png')" }}
                        />
                        {/* Top content */}
                        <div className="flex flex-col items-center">
                            <h3 className={`py-3 px-10 w-fit text-center text-xl font-light uppercase mb-5 ${plan.name === "Growth" ? "bg-gold text-white" : "bg-white text-black"}`}>
                                {plan.name} Plan
                            </h3>
                            <h3 className="my-5 text-3xl lg:text-6xl text-white group-hover:text-black text-center font-extrabold mb-6">{plan.price}</h3>
                            <ul className="mt-5 space-y-5 text-gray-300 group-hover:text-black">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-md lg:text-xl">
                                        <span className="text-gold">
                                            <CheckCheckIcon size={20} />
                                        </span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Button at the bottom */}
                        <button className={`mt-10 w-full py-3 px-5 lg:py-5 lg:px-10 text-xl lg:text-2xl font-light
                            transition-colors ${plan.name === "Growth" ? "bg-white text-gold hover:bg-gold hover:text-white" : "bg-gold text-white hover:bg-white hover:text-gold"}`}
                        >
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>

            {/* Add-On Services */}
            <div className="mt-20 w-full">
                <h3 className="text-3xl lg:text-5xl text-black">Add-On Services</h3>
                <div className="mt-10 grid gap-5 gapy-y-5 md:grid-cols-3">
                    {addOns.map((addon, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 p-10 flex justify-between items-center gap-10"
                        >
                            <p className="text-lg lg:text-2xl font-semibold text-black">{addon.service}</p>
                            <p className="text-wrap inline-flex flex-wrap text-md lg:text-xl font-light text-gray-700">From
                                <span className="ml-2 text-xl lg:text-4xl">{addon.price}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
