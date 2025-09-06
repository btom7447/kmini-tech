"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export function OverviewSection({ overview }) {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        AOS.init({ duration: 880, once: true, easing: "ease-in-out" });
    }, []);

    if (!overview) return null;

    const { title, description, image } = overview;

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center px-5 lg:px-20 xl:px-30 py-15 lg:py-20 bg-white">
            {/* Text Content */}
            <div>
                <h2 
                    id="about-heading"
                    className="text-3xl lg:text-5xl text-black" 
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    {title}
                </h2>
                <p 
                    className="mt-5 text-lg lg:text-2xl font-light text-gray-600"
                    data-aos="fade-down"
                    data-aos-delay="600"
                >
                    {description}
                </p>
            </div>

            <div className="relative w-full h-[40dvh] lg:h-[50dvh]"
                data-aos="fade-left"
                data-aos-delay="400"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100dvw, 50dvw"
                    className="object-cover"
                    priority={false}
                />
            </div>
        </section>
    );
}
