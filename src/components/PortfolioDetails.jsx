import { CheckCheckIcon } from "lucide-react";
import ProjectCarousel from "./PortfolioCarousel";

export default function PortfolioDetails({ project }) {
    return (
       <section className="px-5 lg:px-20 xl:px-30 py-15 lg:py-20 bg-white grid grid-cols-1 gap-10 lg:grid-col-2">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                {/* Image Carousel */}
                <div className="lg:col-span-2" data-aos="fade-right">
                    <ProjectCarousel images={project.images} title={project.title} />
                </div>

                {/* Project Info */}
                <div className="flex flex-col gap-4 text-gray-800 text-xl lg:text-2xl">
                    <h6 className="flex gap-2">
                        <strong className="block font-semibold">Client:</strong>
                        {project.client}
                    </h6>
                    <h6 className="flex gap-2">
                        <strong className="block font-semibold">Project:</strong>
                        {project.title}
                    </h6>
                    <h6 className="flex gap-2">
                        <strong className="block font-semibold">Category:</strong>
                        {project.solutionCategory}
                    </h6>
                    <h6 className="flex gap-2">
                        <strong className="block font-semibold">Date:</strong>
                        {project.date}
                    </h6>

                    <div className="flex gap-2 flex-wrap mb-6">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm lg:text-lg bg-gold border-1 border-gold text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <p className="text-xl leading-relaxed text-gray-700 mt-2">
                        {project.moreDescription}
                    </p>
                </div>
            </div>
            {/* More Description */}
            <div className="w-full text-gray-700 leading-relaxed mb-5">
                <p className="text-xl leading-relaxed text-gray-700">{project.moreDescription}</p>
                <h5 className="mt-5 mb-3 text-4xl font-semibold text-black">The Challenge & Solution </h5>
                <p className="text-xl leading-relaxed text-gray-700">{project.challenge}</p>
                <ul className="mt-5 space-y-5 text-gray-700 grid grid-cols-1 lg:grid-cols-2">
                    {project.solutions.list.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2 text-md lg:text-xl">
                            <span className="text-gold">
                                <CheckCheckIcon size={20} />
                            </span> {solution}
                        </li>
                    ))}
                </ul>
                <p className="mt-5 text-xl leading-relaxed text-gray-700">{project.solutions.overview}</p>
            </div>
            <p className="text-gray-600 mt-3 text-lg text-center">
                {project.client} • {project.date}
            </p>
        </section>
    )
}