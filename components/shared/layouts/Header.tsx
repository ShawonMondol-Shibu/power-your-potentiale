"use client";

import React from "react";
import SpecialtyCard from "./header/SpecialtyCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { cubicBezier, easeOut, motion } from "framer-motion";

// Animation Variants for orchestration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) } },
};

const heroImageVariants = {
  hidden: { opacity: 0, scale: 1.1, x: 50 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2, ease: easeOut } },
};

export default function Header() {
  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen w-full overflow-hidden flex flex-col lg:block"
    >
      {/* Background Layer - Optimized with priority for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Subtract.svg"
          alt="Background Pattern"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Specialty Card - Top Left on Desktop, Top Center on Mobile */}
      <motion.div 
        transition={fadeInUp}
        className="relative z-20 pt-24 lg:pt-0 lg:absolute lg:bottom-0 lg:left-0"
      >
        <SpecialtyCard />
      </motion.div>

      {/* Hero Image - Responsive Scaling */}
      <motion.div
        variants={heroImageVariants}
        className="relative z-10 w-full flex justify-end lg:absolute lg:top-[46%] lg:right-0 lg:-translate-y-1/2"
      >
        <div className="w-full max-w-100 md:max-w-175 lg:max-w-250 xl:max-w-250">
          <Image
            src="/header_bg.png"
            alt="Hero Image"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Hero Text & CTA - Fixed position on Desktop, Stacked on Mobile */}
      <div className="relative z-20 px-6 mt-auto lg:mt-0 lg:absolute lg:bottom-14 lg:right-10 flex flex-col items-start lg:items-end">
        <motion.h1
          variants={fadeInUp}
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
          className="text-[60px] md:text-[100px] lg:text-[150px] text-left lg:text-right font-tilt uppercase font-normal text-white/20 tracking-tight leading-[0.9] lg:leading-[0.8]"
        >
          Power Your <br />
          <motion.span 
            className="text-[80px] md:text-[130px] lg:text-[180px] block"
            variants={fadeInUp}
          >
            Potential
          </motion.span>
        </motion.h1>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-4 mt-8 w-full lg:justify-start"
        >
          <Button 
            className="bg-transparent group border-2 border-white/70 hover:bg-white hover:text-black transition-all duration-300 rounded-2xl h-16 md:h-20 px-8 text-xl md:text-3xl uppercase flex items-center gap-4 flex-1 lg:flex-none lg:w-80"
          >
            Shop Now 
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Button>

          <Button
            size="icon"
            className="bg-transparent border-2 border-white/70 hover:bg-white/10 rounded-2xl h-16 w-16 md:h-20 md:w-20"
          >
            <MapPin className="size-8 text-white" />
          </Button>
        </motion.div>
      </div>
    </motion.main>
  );
}