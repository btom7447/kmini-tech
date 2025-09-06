"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection({ faq, title = "Frequently Asked Questions" }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="text-center px-5 lg:px-20 xl:px-30 py-16 bg-white">
            <h2 
                id="about-heading"
                className="text-3xl lg:text-5xl text-black" 
                data-aos="fade-down"
                data-aos-delay="200"
            >
                {title}
            </h2>
            {/* <p 
                className="mt-5 text-lg lg:text-2xl font-light text-gray-600"
                data-aos="fade-down"
                data-aos-delay="400"
            >
                At Kmini Technologies, our mission is simple — to make powerful digital solutions accessible to every business and brand, no matter the size. We believe technology should empower, not overwhelm, which is why we specialize in delivering tailored services — from web and mobile app development to creative design, social media marketing, and beyond. What started as a small vision has grown into a passionate team committed to turning ideas into impactful results. Every project we take on is not just about building technology, but about building trust and long-term partnerships. Together, let’s create solutions that move your brand forward.
            </p> */}
            <div className="mt-10 max-w-5xl mx-auto space-y-5">
                {faq.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={idx}
                            className="border border-gray-200 overflow-hidden"
                        >
                            <button
                                className="w-full flex justify-between items-center p-10 text-xl text-left font-semibold text-black hover:bg-gray-100 transition"
                                onClick={() => toggleFAQ(idx)}
                            >
                                {item.question}
                                <span className="text-gold">
                                    {isOpen ? (
                                        <ChevronUp size={20} />
                                    ) : (
                                        <ChevronDown size={20} />
                                    )}
                                </span>
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                    isOpen ? "max-h-50 py-5 border-t border-gold bg-gray-50" : "max-h-0"
                                }`}
                            >
                                <p className="text-left leading-loose text-gray-600 text-xl">{item.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
