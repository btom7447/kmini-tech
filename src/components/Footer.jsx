import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-black w-screen">
            <div className="px-5 lg:px-20 xl:px-30 py-10 lg:py-20 flex gap-10 flex-wrap items-center justify-center lg:justify-between pb-10 border-b border-gray-600">
                <ul className="text-lg lg:text-xl text-white flex gap-5 lg:gap-10 items-center">
                    <li>
                        <Link href="/pricing-plan">Pricing & Plan</Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>

                    </li>
                    <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="flex gap-5 items-center">
                    <FacebookIcon size={25} strokeWidth={1} />  
                    <InstagramIcon size={25} strokeWidth={1} />
                    <LinkedinIcon size={25} strokeWidth={1} />                  
                </div>
            </div>
            <div className="px-5 lg:px-20 xl:px-30 py-20 grid gap-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 items-start">
                <div className=" lg:col-span-2">
                    <Link href="/" className="flex items-center mb-5">
                        <Image
                            src="/images/logo.png"
                            alt="Kmini Tech Logo"
                            width={160}
                            height={80}
                            priority
                            className="-ml-2 h-auto w-30 object-contain"
                        />
                        <h4 className="-ml-3 text-2xl lg:text-4xl font-extralight">
                            Kmini Technologies
                        </h4>
                    </Link>
                    <p className="text-xl font-light text-white">
                        Your partner in creating smarter digital experiences that move your business forward. We provide innovative solutions  — all tailored to help your brand grow, connect, and thrive in the digital world.
                    </p>
                </div>
                <div className="">
                    <h5 className="text-xl lg:text-3xl font-semibold mb-5">Tech Solutions</h5>
                    <ul className="text-lg lg:text-xl flex flex-col gap-3">
                        <li>
                            <Link href="/solutions/data-analysis">Data Analysis</Link>
                        </li>
                        <li>
                            <Link href="/solutions/designs">Designs</Link>
                        </li>
                        <li>
                            <Link href="/solutions/digital-marketing">Digital Marketing</Link>
                        </li>
                        <li>
                            <Link href="/solutions/mobile-apps">Mobile Apps</Link>
                        </li>
                        <li>
                            <Link href="/solutions/web-development">Web Development</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h5 className="text-xl lg:text-3xl font-semibold mb-5">Important Links</h5>
                    <ul className="text-lg lg:text-xl flex flex-col gap-3">
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/pricing-plan">Pricing & Plan</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <h5 className="text-xl lg:text-3xl font-semibold mb-5">Get In Touch</h5>
                    <ul className="text-lg lg:text-xl flex flex-col gap-3">
                        <li>
                            <a
                                href="tel:+2349134876624"
                                className="group-hover:text-gold text-lg font-extralight whitespace-nowrap"
                            >
                                <strong>Phone: </strong>
                                +234 913 487 6624
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:info@kminitech.com"
                                className="group-hover:text-gold text-lg font-extralight whitespace-nowrap"
                            >
                                <strong>Email: </strong>
                                info@kminitech.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:info@kminitech.com"
                                className="group-hover:text-gold text-lg font-extralight"
                            >
                                <strong>Office Address: </strong>
                                Uyo, Akwa Ibom Nigeria 530045
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-5 lg:px-20 xl:px-30 py-10">
                <p className="text-center text-white text-lg">
                    &copy; {new Date().getFullYear()} Kmini Technologies. All rights reserved.
                </p>
            </div>
        </footer>
    )
}