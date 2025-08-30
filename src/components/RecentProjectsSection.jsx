"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsCard from "../components/ProjectsCard";
import projectsData from "../../public/data/projectsData.json";

export default function RecentProjectsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const splideRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
        AOS.refresh();
    }, [currentSlide]);

    const goToSlide = (index) => {
        if (splideRef.current) {
            splideRef.current.go(index);
        }
    };

    return (
        <section className="px-5 lg:px-20 xl:px-30 py-20 lg:py-30   w-screen">
            <div>
                <h2
                    id="about-heading"
                    className="text-3xl lg:text-5xl font-semibold text-black"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    Have a look at our Global Projects
                </h2>
                <p
                    className="mt-5 text-2xl font-light text-gray-600"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    Every project we take on is a journey from concept to impact. At Kmini
                    Technologies, we’ve partnered with diverse brands and businesses to
                    create websites, mobile apps, digital campaigns, and design solutions
                    that truly stand out.
                </p>
            </div>

            {/* Carousel */}
            <Splide
                ref={splideRef}
                options={{
                    type: "fade",
                    perPage: 1,
                    autoplay: true,
                    interval: 6000,
                    pagination: false,
                    arrows: false,
                    rewind: true,
                    speed: 900,
                }}
                onMoved={(splide) => {
                    setCurrentSlide(splide.index);
                    AOS.refreshHard();
                }}
                className="mt-10 relative"
            >
                {projectsData.projectsData.map((project, index) => (
                    <SplideSlide key={index}>
                        {currentSlide === index && (
                            <ProjectsCard project={project} />
                        )}
                    </SplideSlide>
                ))}
            </Splide>
            {/* Custom Pagination */}
            <div className="flex mt-10 gap-3 justify-start">
                {projectsData.projectsData.map((_, bulletIdx) => (
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
