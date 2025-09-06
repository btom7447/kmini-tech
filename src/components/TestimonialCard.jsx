import Image from "next/image";
import { QuoteIcon, Star } from "lucide-react";

export default function TestimonialCard({ name, role, testimonial, image, rating }) {
    return (
        <div className="flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="p-10 bg-gray-100">
                <div className="flex items-center justify-between gap-10">
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={18}
                                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                        ))}
                    </div>
                    <span className="text-gold">
                        <QuoteIcon size={50} strokeWidth={1} />
                    </span>
                </div>
                <Image
                    src={image}
                    alt={name}
                    width={80}
                    height={80}
                    className="block m-auto w-50 mb-5 object-cover"
                />
                <p className="italic text-lg ">{testimonial}</p>
            </div>

            <div className="w-full bg-gold p-5 text-white">
                <h4 className="font-semibold text-2xl">{name}</h4>
                <span className="text-lg font-extralight">{role}</span>
            </div>
        </div>
    );
}
