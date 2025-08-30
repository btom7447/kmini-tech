"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsCard({ project }) {
    return (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div className="flex flex-col justify-center">
                <h3 className="text-3xl lg:text-5xl font-bold mb-4">{project.title}</h3>
                <p className="text-2xl text-gray-600 mb-3">{project.description}</p>
                
                <div className="flex gap-2 flex-wrap mb-6">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-lg bg-gold border-1 border-gold text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <p className="text-xl leading-loose text-gray-500 mb-5">{project.moreDescription}</p>

                <Link
                    href={project.link}
                    className="block w-fit mt-5 py-5 px-10 bg-gold border-1 border-gold text-white text-xl hover:bg-white hover:text-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition"
                >
                    View Project
                </Link>
            </div>
            {/* Image Section */}
            <div className="relative w-full h-[40dvh] lg:h-[50dvh]">
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100dvw, 50dvw"
                    className="object-cover"
                    priority={false}
                />
            </div>
        </div>
    );
}
