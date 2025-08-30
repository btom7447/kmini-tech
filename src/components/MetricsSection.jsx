"use client";

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

export default function MetricsSection() {
    const [start, setStart] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect(); // run only once
            }
        },
        { threshold: 0.6 } // 60% visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="p-10 lg:p-20 xl:p-30 bg-black text-white text-center"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div data-aos="fade-up" data-aos-delay="200" className="p-5 xl:border-r border-gold">
                    <h3 className="text-3xl lg:text-6xl font-extrabold">
                        {start && <CountUp end={70} duration={2} separator="," />}
                    </h3>
                    <p className="mt-2 text-xl lg:text-3xl text-gray-300">Happy Clients</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="p-5 xl:border-r border-gold">
                    <h3 className="text-3xl lg:text-6xl font-extrabold">
                        {start && <CountUp end={150} duration={2} separator="," />}
                    </h3>
                    <p className="mt-2 text-xl lg:text-3xl text-gray-300">Completed Projects</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="600" className="p-5 xl:border-r border-gold">
                    <h3 className="text-3xl lg:text-6xl font-extrabold">
                        {start && <CountUp end={15} duration={2} separator="," />}
                    </h3>
                    <p className="mt-2 text-xl lg:text-3xl text-gray-300">Trusted Partners</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="800" className="p-5 ">
                    <h3 className="text-3xl lg:text-6xl font-extrabold">
                        {start && <CountUp end={5} duration={2} separator="," />}
                    </h3>
                    <p className="mt-2 text-xl lg:text-3xl text-gray-300">Awards Won</p>
                </div>
            </div>
        </section>
    );
}
