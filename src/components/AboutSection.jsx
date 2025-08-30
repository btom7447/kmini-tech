"use client";

import { useState } from "react";
import { PlayIcon, X } from "lucide-react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function AboutSection() {
    const [isOpen, setIsOpen] = useState(false);

    // Static array of client images
    const clients = [
        "/images/client-images/client01.png",
        "/images/client-images/client02.png",
        "/images/client-images/client03.png",
        "/images/client-images/client04.png",
        "/images/client-images/client05.png",
    ];

    return (
        <section className="bg-white" aria-labelledby="about-heading">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center px-5 lg:px-20 xl:px-30 py-15 lg:py-20">
                
                {/* Image with fade-right */}
                <div 
                    className="max-w-full h-[40dvh] lg:h-[60dvh] relative"
                    data-aos="fade-right"
                >
                    <Image
                        src="/images/about-bg.jpg"
                        alt="Office workspace showcasing teamwork"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                    />

                    {/* Play Button */}
                    <button 
                        type="button" 
                        onClick={() => setIsOpen(true)}
                        aria-label="Play introduction video"
                        className="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                    >
                        <span className="relative flex items-center justify-center">
                            {/* Pulsing circle */}
                            <span 
                                className="absolute inline-flex h-30 w-30 rounded-full bg-white opacity-75 animate-ping"
                                aria-hidden="true"
                            />
                            <span className="relative h-25 w-25 rounded-full bg-gray-100 text-gold flex items-center justify-center">
                                <PlayIcon size={30} fill="#9c6c3c" aria-hidden="true" />
                            </span>
                        </span>
                    </button>
                </div>

                {/* Text section */}
                <div>
                    <h2 
                        id="about-heading"
                        className="text-3xl lg:text-5xl text-black" 
                        data-aos="fade-down"
                        data-aos-delay="200"
                    >
                        Driven by Innovation, Built for Your Success
                    </h2>
                    <p 
                        className="mt-5 text-lg lg:text-2xl font-light text-gray-600"
                        data-aos="fade-down"
                        data-aos-delay="400"
                    >
                        At Kmini Technologies, our mission is simple — to make powerful digital solutions accessible to every business and brand, no matter the size. We believe technology should empower, not overwhelm, which is why we specialize in delivering tailored services — from web and mobile app development to creative design, social media marketing, and beyond. What started as a small vision has grown into a passionate team committed to turning ideas into impactful results. Every project we take on is not just about building technology, but about building trust and long-term partnerships. Together, let’s create solutions that move your brand forward.
                    </p>
                    <div 
                        className="mt-5"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <span 
                            className="text-black text-5xl font-semibold" 
                            style={{ fontFamily: "'Dancing Script', cursive" }}
                        >
                            Benjamin Tom
                        </span>                    
                        <p className="text-xl text-gray-500">CEO & Founder</p>
                    </div>
                </div>

                {/* Video Modal */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-5"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Company introduction video"
                    >
                        <div className="relative w-full max-w-3xl">
                            {/* Close Button */}
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="absolute -top-10 right-0 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                aria-label="Close video modal"
                            >
                                <X size={28} aria-hidden="true" />
                            </button>

                            {/* Video */}
                            <div className="aspect-video bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                    title="Introduction video"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Client Carousel */}
            <div className="px-5 lg:px-20 xl:px-30 py-10 bg-gray-50">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 6,
                        autoplay: true,
                        interval: 3000,
                        arrows: false,
                        pagination: false,
                        breakpoints: {
                            1024: { perPage: 6 },
                            768: { perPage: 4 },
                            480: { perPage: 2 },
                        },
                    }}
                    aria-label="Our clients"
                    className="flex items-center"
                >
                    {clients.map((client, index) => (
                        <SplideSlide key={index} className="flex justify-center items-center">
                            <div className="relative w-[150px] h-[60px] overflow-hidden group">
                                {/* Grayscale Image */}
                                <Image
                                    src={client}
                                    alt={`Client logo ${index + 1}`}
                                    width={150}
                                    height={60} 
                                    loading="lazy"
                                    sizes="150px"
                                    style={{ height: "auto", width: "auto" }} 
                                    className="absolute inset-0 object-contain transform transition-transform grayscale duration-200 group-hover:translate-y-full"
                                />
                                {/* Colored Image */}
                                <Image
                                    src={client}
                                    alt={`Client logo ${index + 1} colored`}
                                    width={150}
                                    height={60}
                                    loading="lazy"
                                    sizes="150px"
                                    style={{ height: "auto", width: "auto" }}
                                    className="absolute inset-0 object-contain transform -translate-y-full transition-transform duration-500 group-hover:translate-y-0 group-hover:grayscale-0"
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
}