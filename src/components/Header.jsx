"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import TopHeader from './TopHeader';
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";


export default function Header() {
    const [showSticky, setShowSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, pointerEvents: "none" },
        visible: { opacity: 1, y: 0, pointerEvents: "auto" },
    };

    const navLinks = (
        <ul className="hidden xl:flex space-x-10 items-center">
            <li className="hover:text-gold text-2xl font-extralight transition-colors">
                <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gold text-2xl font-extralight transition-colors">
                <Link href="/about">About</Link>
            </li>

            {/* Solutions Dropdown */}
            <li className="relative">
                <button
                    className="flex items-center gap-1 hover:text-gold text-2xl font-extralight transition-colors"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    aria-expanded={isDropdownOpen}
                    aria-controls="solutions-dropdown"
                >
                    Solutions <ChevronDown size={25} strokeWidth={1} />
                </button>

                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.ul
                            id="solutions-dropdown"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                            transition={{ duration: 0.2 }}
                            className="absolute top-20 left-0 w-80 shadow-sm bg-white text-gray-700"
                        >
                            <li className="p-5 text-xl hover:text-gold">
                                <Link href="/solutions/data-analysis">Data Analysis</Link>
                            </li>
                            <li className="p-5 text-xl hover:text-gold">
                                <Link href="/solutions/designs">Designs</Link>
                            </li>
                            <li className="p-5 text-xl hover:text-gold">
                                <Link href="/solutions/digital-marketing">Digital Marketing</Link>
                            </li>
                            <li className="p-5 text-xl hover:text-gold">
                                <Link href="/solutions/mobile-app">Mobile Apps</Link>
                            </li>
                            <li className="p-5 text-xl hover:text-gold">
                                <Link href="/solutions/web-development">Web Development</Link>
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>

            <li className="hover:text-gold text-2xl font-extralight transition-colors">
                <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-gold text-2xl font-extralight transition-colors">
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <TopHeader />
           {/* Phase 1: Transparent Header */}
             {!showSticky && (
        <header className="py-5 px-5 lg:px-10 lg:py-0 xl:px-30 w-full bg-transparent text-white transition-all duration-300">
          <div className="flex justify-between items-center">
            <Link href="/" className="px-5 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Kmini Tech Logo"
                width={160}
                height={80}
                priority
                className="h-20 w-40 object-contain"
              />
              <h1 className="-ml-7 text-2xl lg:text-4xl font-extralight">
                Kmini Technologies
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav>{navLinks}</nav>

            {/* Mobile Hamburger Button */}
            <button
              className="xl:hidden text-black"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={1} />
            </button>
          </div>
        </header>
      )}

            {/* Phase 2: Solid Sticky Header */}
            <AnimatePresence>
                {showSticky && (
                    <motion.header
                        initial={{ y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="px-5 py-5 lg:px-10 lg:py-5 xl:px-30 fixed top-0 left-0 w-screen z-50 bg-white text-gray-900 shadow-md"
                    >
                        <div className="flex justify-between items-center">
                            <Link href="/" className="flex items-center">
                                <Image src="/images/logo.png" alt="Kmini Tech" width={20} height={20} unoptimized className="h-20 w-40 object-contain" />
                                <h5 className="-ml-7 text-2xl lg:text-4xl font-extralight">Kmini Technologies</h5>
                            </Link>

                            {/* Desktop nav */}
                            <nav>{navLinks}</nav>

                            {/* Mobile Hamburger Button */}
                            <button
                                className="xl:hidden text-black"
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={28}strokeWidth={1} />
                            </button>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            <HamburgerMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </div>
    );
};