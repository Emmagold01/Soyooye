"use client";

import Navbar from "./component/Navbar.component";
import Hero from "./component/Hero.component";
import Portfolio from "./component/Portfolio.component";
import { easeInOut, motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: easeInOut }}
    >
      <div className="relative min-h-screen py-10 overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Portfolio />
    </motion.div>
  );
}
