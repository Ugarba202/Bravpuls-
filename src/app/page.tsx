"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Vision } from "@/components/sections/Vision";
import { Impact } from "@/components/sections/Impact";
import { Leadership } from "@/components/sections/Leadership";
import { CTA } from "@/components/sections/CTA";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <Hero />
        <Trust />
        <WhoWeAre />
        <Ecosystem />
        <Vision />
        <Impact />
        <Leadership />
        <CTA />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
