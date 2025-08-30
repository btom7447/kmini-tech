"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        title: "Build Modern Web Experiences",
        subtitle: "High-performance websites crafted to elevate your brand and drive results.",
        img: "/images/hero-slide/hero-one.jpg",
        link: "/solutions/web-development",
    },
    {
        title: "Mobile Apps That Connect",
        subtitle: "Intuitive, scalable apps that engage users on both iOS and Android platforms.",
        img: "/images/hero-slide/hero-three.jpg",
        link: "/solutions/mobile-app",
    },
    {
        title: "Creative Designs",
        subtitle: "Beautifully designed interfaces that captivate users and enhance usability.",
        img: "/images/hero-slide/hero-two.jpg",
        link: "/solutions/designs",
    },
    {
        title: "Digital Marketing That Converts",
        subtitle: "Smart social media and marketing strategies to grow your audience and sales.",
        img: "/images/hero-slide/hero-six.jpg",
        link: "/solutions/digital-marketing",
    },
    {
        title: "Data-Driven Solutions",
        subtitle: "Analytics and insights to optimize performance and make smarter decisions.",
        img: "/images/hero-slide/hero-four.jpg",
        link: "/solutions/data-analysis",
    },
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const splideRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
        });
        AOS.refresh();
    }, [currentSlide]);

    const goToSlide = (index) => {
        if (splideRef.current) {
            splideRef.current.go(index);
        }
    };

    return (
        <section className="pt-70 lg:pt-0 w-screen h-screen relative bg-black text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center bg-fixed bg-cover opacity-20 z-0"
                style={{ backgroundImage: "url('/images/bg.png')" }}
            />

            <Splide
                ref={splideRef}
                options={{
                    type: "fade",
                    perPage: 1,
                    autoplay: true,
                    interval: 7000,
                    pagination: false,
                    arrows: false,
                    speed: 900,
                    rewind: true,
                }}
                onMoved={(splide) => {
                    setCurrentSlide(splide.index);
                    AOS.refreshHard();
                }}
                className="h-full relative z-10"
            >
                {slides.map((slide, index) => (
                    <SplideSlide key={index}>
                        {currentSlide === index && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 h-screen gap-10 lg:gap-20 items-center px-5 lg:px-20 xl:px-30">
                                {/* Text Section */}
                                <div className="order-2 lg:order-1 flex flex-col justify-center">
                                    <h1
                                        data-aos="fade-right"
                                        data-aos-delay="200"
                                        className="text-4xl lg:text-6xl font-bold mb-6"
                                    >
                                        {slide.title}
                                    </h1>
                                    <p
                                        data-aos="fade-right"
                                        data-aos-delay="400"
                                        className="text-lg lg:text-2xl mb-6"
                                    >
                                        {slide.subtitle}
                                    </p>
                                    <div
                                        className="space-x-5"
                                        data-aos="fade-up"
                                        data-aos-delay="800"
                                    >
                                        <Link
                                            href={slide.link}
                                            className="py-5 px-10 bg-gold text-white text-xl hover:bg-white hover:text-gold"
                                        >
                                            See our work
                                        </Link>
                                        <button
                                            type="button"
                                            className="py-5 px-10 text-gold text-xl border-1 border-gold hover:border-white hover:text-white"
                                        >
                                            Book a Call
                                        </button>
                                    </div>

                                    {/* Custom Pagination bullets */}
                                    <div className="flex mt-15 gap-3">
                                        {slides.map((_, bulletIdx) => (
                                            <button
                                                key={bulletIdx}
                                                onClick={() => goToSlide(bulletIdx)}
                                                className={`w-3 h-3 rounded-full transition-colors border border-gold p-[1px] ${
                                                    bulletIdx === currentSlide ? "bg-gold" : "bg-black"
                                                }`}
                                                aria-label={`Go to slide ${bulletIdx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div
                                    data-aos="fade-right"
                                    data-aos-delay="400"
                                    className="relative order-1 lg:order-2 col-span-2 max-w-full h-[40dvh] lg:h-[60dvh] flex justify-center items-center mt-10 lg:mt-0"
                                >
                                    <Image
                                        src={slide.img}
                                        alt={slide.title}
                                        fill
                                        priority={index === 0} // first slide loads fast for LCP
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
}
