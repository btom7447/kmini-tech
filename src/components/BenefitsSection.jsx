"use client";

import { useState } from "react";

export function BenefitsSection({ benefits, title = "Benefits" }) {
    return (
        <section className="px-5 lg:px-20 xl:px-30 py-15 lg:py-20 relative bg-black text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center bg-fixed bg-cover opacity-20 z-0"
                style={{ backgroundImage: "url('/images/bg.png')" }}
            />

            {/* Section Header */}
            <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-10">
                <h5 className="text-4xl lg:text-6xl font-bold mb-2 lg:mb-6">{title}</h5>
                {/* <h6 className="text-lg lg:text-2xl mb-6">{subTitle}</h6> */}
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 items-stretch">                
                {benefits.map((benefit, idx) => (
                    <div
                        key={idx}
                        className="w-full group bg-white/10 backdrop-blur-sm hover:bg-white/20 p-5 lg:p-10 transition-transform duration-300 relative"
                        data-aos="fade-up"
                        data-aos-delay={idx * 150}  
                    >
                        <div className="flex items-center gap-10 justify-between">
                            <h3 className="text-3xl font-semibold mb-2">
                                {benefit.title}
                            </h3>
                            <h4 className="text-3xl text-gray-600" aria-hidden="true">{benefit?.id}</h4>
                        </div>
                        <p className="mt-3 text-xl text-gray-300">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
