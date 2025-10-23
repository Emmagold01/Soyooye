"use client";

import Navbar from "./component/Navbar.component";
import Hero from "./component/Hero.component";
import About from "./component/About.component";
import Portfolio from "./component/Portfolio.component";
import Contact from "./component/Contact.component";
import { easeInOut, motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: easeInOut }}
    >
      <div className="relative min-h-screen overflow-hidden py-10">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Portfolio />
      <Contact />
    </motion.div>
  );
}
