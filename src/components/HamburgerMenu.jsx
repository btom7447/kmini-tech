"use client";

import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleSolutions = () => setIsSolutionsOpen((prev) => !prev);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col items-center pt-30 px-10 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-20 z-0"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-10 text-white z-50"
          aria-label="Close menu"
        >
          <X size={28} strokeWidth={1} />
        </button>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-5 text-2xl font-extralight w-full text-center relative z-10">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          {/* Solutions Accordion */}
          <div className="w-full">
            <button
              className="flex items-center justify-center gap-2 w-full"
              onClick={toggleSolutions}
            >
              Solutions
              <ChevronDown
                size={25}
                strokeWidth={1}
                className={`transform transition-transform duration-300 ${
                  isSolutionsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isSolutionsOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="/solutions/web-development"
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/solutions/mobile-app"
                  onClick={() => setIsOpen(false)}
                >
                  Mobile Apps
                </Link>
                <Link
                  href="/solutions/design"
                  onClick={() => setIsOpen(false)}
                >
                  UI/UX Design
                </Link>
                <Link
                  href="/solutions/marketing"
                  onClick={() => setIsOpen(false)}
                >
                  Marketing
                </Link>
              </div>
            </div>
          </div>

          <Link href="/portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
