"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; 
import Image from "next/image";

export default function ProjectCarousel({ images, title }) {
    return (
        <div className="w-full h-[40dvh] lg:h-[60dvh] relative">
            <Splide
                options={{
                    type: "loop",
                    perPage: 1,
                    autoplay: true,
                    interval: 4000,
                    arrows: false,
                    pagination: false,
                    gap: "1rem",
                }}
                aria-label={`${title} project images`}
            >
                {images.map((src, i) => (
                    <SplideSlide key={i}>
                        <div className="relative w-full h-[40dvh] lg:h-[60dvh]">
                            <Image
                                src={src}
                                alt={`${title} - image ${i + 1}`}
                                fill
                                priority={i === 0}
                                className="object-cover object-top"
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
