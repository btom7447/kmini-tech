"use client";

import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleSolutions = () => setIsSolutionsOpen((prev) => !prev);

  const menuVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
    exit: { y: "-100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="hamburger-menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.5, type: "tween" }}
          className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex flex-col items-center pt-30 px-10"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-fixed bg-cover opacity-20 z-0"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          />
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 text-white"
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-5 text-2xl font-extralight w-full text-center">
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
                Solutions <ChevronDown size={25} strokeWidth={1} className={`${isSolutionsOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`} />
              </button>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out flex flex-col items-center gap-5
                  ${isSolutionsOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
                `}
              >
                <Link href="/solutions/web-development" onClick={() => setIsOpen(false)} className="py-2">
                  Web Development
                </Link>
                <Link href="/solutions/mobile-app" onClick={() => setIsOpen(false)} className="py-2">
                  Mobile Apps
                </Link>
                <Link href="/solutions/design" onClick={() => setIsOpen(false)} className="py-2">
                  UI/UX Design
                </Link>
                <Link href="/solutions/marketing" onClick={() => setIsOpen(false)} className="py-2">
                  Marketing
                </Link>
              </div>
            </div>

            <Link href="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HamburgerMenu;