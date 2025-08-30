import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsCard({ id, title, subtitle, benefits, img, link }) {
    return (
        <div
            className="w-full group bg-white/10 backdrop-blur-sm hover:bg-white/20 p-5 lg:p-10 transition-transform duration-300 relative"
            role="region"
            aria-labelledby={`solution-title-${id}`}
        >
            <div className="flex items-start justify-between">
                <Image
                    src={img}
                    alt={`${title} icon`}
                    width={50}
                    height={50}
                    priority={id === 1} 
                    loading={id === 1 ? "eager" : "lazy"} 
                    className="w-fit h-25 object-contain mb-4 grayscale group-hover:grayscale-0 transition duration-300"
                />
                <h4 className="text-5xl text-gray-600" aria-hidden="true">{id}</h4>
            </div>

            <h3
                id={`solution-title-${id}`}
                className="text-3xl font-semibold mb-2"
            >
                {title}
            </h3>

            <p className="text-xl text-gray-300 mb-4">{subtitle}</p>

            <ul className="list-none text-lg text-gray-400 mb-4">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start mb-3">
                        <span
                            className="mr-2 text-gold flex-shrink-0"
                            aria-hidden="true"
                        >
                            <CheckCheck size={20} strokeWidth={1} />
                        </span>
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>

            <Link
                href={link}
                className="block w-fit mt-5 py-5 px-10 bg-gold text-white text-xl group-hover:bg-white group-hover:text-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                aria-label={`Learn more about ${title}`}
            >
                Learn More
            </Link>
        </div>
    );
}
