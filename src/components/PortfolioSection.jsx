"use client";

import { useState } from "react";
import projectsData from "../../public/data/projectsData.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export function PortfolioSection() {
    const [activeTab, setActiveTab] = useState("all");
    const [visibleCount, setVisibleCount] = useState(6);

    // Get unique solution categories
    const categories = [
        "all",
        ...new Set(projectsData.projectsData.map((item) => item.solutionCategory)),
    ];

    // Filter projects by category
    const filteredProjects =
        activeTab === "all"
            ? projectsData.projectsData
            : projectsData.projectsData.filter(
                  (item) => item.solutionCategory === activeTab
              );

    const displayedProjects = filteredProjects.slice(0, visibleCount);

    const toggleShowMore = () => {
        if (visibleCount >= filteredProjects.length) {
            setVisibleCount(6);
        } else {
            setVisibleCount(filteredProjects.length);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="px-5 lg:px-20 xl:px-30 py-15 lg:py-20 bg-white">
            {/* Tabs */}
            <div className="pb-5 lg:pb-0 flex flex-nowrap overflow-x-auto justify-start gap-5 mb-10 scrollbar-hide lg:justify-center">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveTab(cat);
                            setVisibleCount(6); // reset view count on tab change
                        }}
                        className={`px-5 py-1 text-sm lg:text-lg border whitespace-nowrap transition ${
                            activeTab === cat
                                ? "bg-gold text-white border-gold"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-gray-300 group transition overflow-hidden hover:bg-gray-100"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-10">
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-lg mb-5">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                className="flex items-center gap-2 text-gold text-lg"
                            >
                                View Project 
                                <ArrowUpRight size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More / Show Less Button */}
            {filteredProjects.length > 6 && (
                <div className="text-center mt-10">
                    <button
                        onClick={toggleShowMore}
                        className="px-10 py-3 bg-gold border border-gold text-white font-medium hover:bg-white hover:text-gold transition"
                    >
                        {visibleCount >= filteredProjects.length
                            ? "Show Less"
                            : "View More"}
                    </button>
                </div>
            )}
        </section>
    );
}
