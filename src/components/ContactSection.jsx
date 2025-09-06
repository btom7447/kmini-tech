import { CheckCheckIcon, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="px-5 lg:px-20 xl:px-30 py-20 lg:py-30 w-screen bg-white grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
            {/* Left Content */}
            <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-semibold text-black"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    Get In Touch
                </h2>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gold"
                    data-aos="fade-down"
                    data-aos-delay="300"
                >
                    We'd love to hear from you!
                </h3>
                <p className="text-lg lg:text-2xl font-light text-gray-600"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    Whether you have a question, an idea, or just want to say hello — we’re always open to a conversation. Our team at Kmini Technologies is here to listen, guide, and collaborate with you. Reach out today and let’s start building something meaningful together.
                </p>

                <div className="mt-5 flex flex-col items-start gap-5">
                    <div className="flex items-center gap-5">
                        <div className="bg-gold text-white p-3">
                            <MapPinIcon size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h5 className="text-2xl lg:text-3xl text-black font-semibold">Our Address</h5>
                            <p className="text-lg lg:text-2xl font-light text-gray-600">Uyo, Akwa Ibom, Nigeria</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="bg-gold text-white p-3">
                            <PhoneCallIcon size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h5 className="text-2xl lg:text-3xl text-black font-semibold">Phone Number</h5>
                            <a
                                href="tel:+2349134876624"
                                className="text-lg lg:text-2xl font-light text-gray-600 whitespace-nowrap"
                            >
                                +234 913 487 6624
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="bg-gold text-white p-3">
                            <MailIcon size={40} strokeWidth={1} />
                        </div>
                        <div>
                            <h5 className="text-2xl lg:text-3xl text-black font-semibold">Email Address</h5>
                            <a
                                href="mailto:info@kminitech.com"
                                className="text-lg lg:text-2xl font-light text-gray-600 whitespace-nowrap"
                            >
                                info@kminitech.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form */}
            <div data-aos="fade-left">
                <ContactForm />
            </div>
        </section>
    );
}
