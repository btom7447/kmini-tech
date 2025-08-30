import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function TopHeader() {
    return (
        <div className=" flex flex-col md:flex-row gap-0 lg:gap-5 items-center justify-center md:justify-between bg-black text-white">
            {/* Contact Info */}
            <div className="px-5 lg:px-10 xl:px-30 w-full md:w-fit border-b border-gray-600 md:border-0 flex flex-col md:flex-row items-center justify-center lg:justify-between gap-2">
                <div className="group flex items-center gap-2 px-4 py-2 lg:border-r border-gray-600 transition-colors">
                    <PhoneIcon size={25} strokeWidth={1} className="group-hover:text-gold" />
                    <a
                        href="tel:+2349134876624"
                        className="group-hover:text-gold text-lg font-extralight whitespace-nowrap"
                    >
                        +234 913 487 6624
                    </a>
                </div>
                <div className="group flex items-center gap-2 px-4 py-2 lg:border-r border-gray-600 transition-colors">
                    <MailIcon size={25} strokeWidth={1} className="group-hover:text-gold" />
                    <a
                        href="mailto:info@kminitech.com"
                        className="group-hover:text-gold text-lg font-extralight whitespace-nowrap"
                    >
                        info@kminitech.com
                    </a>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="px-5 lg:px-10 xl:px-30 flex items-center gap-2 lg:gap-4">
                <a
                    href="https://facebook.com/kminitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="px-4 py-2 border-l border-gray-600 hover:text-gold"
                >
                    <FacebookIcon size={25} strokeWidth={1} />
                </a>
                <a
                    href="https://instagram.com/kminitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="px-4 py-2 border-l border-gray-600 hover:text-gold"
                >
                    <InstagramIcon size={25} strokeWidth={1} />
                </a>
                <a
                    href="https://linkedin.com/company/kminitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="px-4 py-2 border-x border-gray-600 hover:text-gold"
                >
                    <LinkedinIcon size={25} strokeWidth={1} />
                </a>
            </div>
        </div>
    );
}
