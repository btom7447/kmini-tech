"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
    {
        name: "Amaka Johnson",
        role: "Founder, GreenTree",
        testimonial:
        "Kmini Technologies completely transformed our online presence with a stunning e-commerce website. The design is modern, fast, and our sales have doubled since launch. Their web development team truly understood our brand.",
        image: "/images/client-images/client01.png",
        rating: 5,
    },
    {
        name: "David Mensah",
        role: "CEO, Capillon",
        testimonial:
        "We needed a mobile app that was simple yet powerful, and Kmini delivered exactly that. The app is seamless on iOS and Android, and our users love the smooth experience. Couldn’t have asked for a better development partner.",
        image: "/images/client-images/client02.png",
        rating: 5,
    },
    {
        name: "Sophia Chen",
        role: "Marketing Lead, Savioke",
        testimonial:
        "Our digital marketing campaigns with Kmini Technologies generated incredible results. From social media ads to SEO, everything was data-driven and effective. We saw a 150% increase in online engagement within just three months.",
        image: "/images/client-images/client03.png",
        rating: 4,
    },
    {
        name: "James Okeke",
        role: "Founder, Goldline",
        testimonial:
        "The UI/UX design Kmini created for our SaaS dashboard was brilliant. Clean, intuitive, and user-friendly — exactly what we needed to impress our customers and stand out in a competitive space.",
        image: "/images/client-images/client04.png",
        rating: 5,
    },
    {
        name: "Emily Carter",
        role: "Operations Manager, Kanba",
        testimonial:
        "Kmini’s data analysis solutions gave us the insights we were missing. The custom dashboard they built helped us track sales trends, reduce waste, and make smarter decisions every day.",
        image: "/images/client-images/client05.png",
        rating: 4,
    },
    {
        name: "Michael Adeyemi",
        role: "Creative Director, Flatiron",
        testimonial:
        "From brand identity to graphics, Kmini Technologies handled our design needs with creativity and precision. Every visual asset they delivered was on-point and elevated how clients perceive our brand.",
        image: "/images/client-images/client06.png",
        rating: 5,
    },
];

export default function TestimonialSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const splideRef = useRef(null);

    const goToSlide = (index) => {
        if (splideRef.current) {
            splideRef.current.go(index);
        }
    };

    return (
        <section className="px-5 lg:px-20 xl:px-30 py-20 lg:py-30 w-screen">
            <div className="mb-10">
                <h2
                    id="about-heading"
                    className="text-3xl lg:text-5xl font-semibold text-black"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    What Our Clients Say
                </h2>
                <p
                    className="mt-5 text-lg lg:text-2xl font-light text-gray-600"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    Hear from the amazing brands we've partnered with.
                </p>
            </div>

            {/* Carousel */}
            <Splide
                ref={splideRef}
                options={{
                    type: "loop",
                    perPage: 3,
                    gap: "1.5rem",
                    autoplay: true,
                    interval: 4000,
                    pauseOnHover: true,
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        1024: { perPage: 2 },
                        640: { perPage: 1 },
                    },
                }}
                    onMoved={(splide) => setCurrentSlide(splide.index)}
                    aria-label="Client Testimonials"
                >
                {testimonialData.map((item, index) => (
                    <SplideSlide key={index} className="flex h-full">
                        <div className="flex h-full">
                            <TestimonialCard {...item} className="h-full flex flex-col" />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            {/* Custom Pagination */}
            <div className="flex mt-10 gap-3 justify-start">
                {testimonialData.map((_, bulletIdx) => (
                    <button
                        key={bulletIdx}
                        onClick={() => goToSlide(bulletIdx)}
                        className={`w-3 h-3 rounded-full transition-colors border border-gold p-[1px] ${
                        bulletIdx === currentSlide ? "bg-gold" : "bg-transparent"
                        }`}
                        aria-label={`Go to slide ${bulletIdx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
