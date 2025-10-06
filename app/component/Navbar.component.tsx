"use client";

import { easeIn, motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          duration: 1,
          ease: easeIn,
          delay: 0.9,
        }}
        className="font-inter z-30 lg:mx-auto mt-3 max-w-4xl mx-5 rounded-full border-2 border-[#414141] bg-black/40 px-5 py-3 shadow-xl backdrop-blur-sm sm:py-4 lg:mt-5 lg:px-10"
      >
        <div className="flex items-center justify-between">
          <div className="text-base font-semibold text-white sm:text-lg">
            Soyooye Emmanuel
          </div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: easeIn }}
            className="hidden items-center gap-6 md:flex lg:gap-8"
          >
            <a
              href="#work"
              className="text-sm text-gray-300 transition-colors duration-200 hover:text-white lg:text-base"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm text-gray-300 transition-colors duration-200 hover:text-white lg:text-base"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-300 transition-colors duration-200 hover:text-white lg:text-base"
            >
              Contact
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-28 right-5 left-5 z-20 mx-auto max-w-4xl rounded-3xl border-2 border-[#414141] bg-black/95 shadow-xl backdrop-blur-sm md:hidden"
        >
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#work"
              onClick={() => setIsOpen(false)}
              className="py-2 text-base text-gray-300 transition-colors duration-200 hover:text-white"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="py-2 text-base text-gray-300 transition-colors duration-200 hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-2 text-base text-gray-300 transition-colors duration-200 hover:text-white"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
