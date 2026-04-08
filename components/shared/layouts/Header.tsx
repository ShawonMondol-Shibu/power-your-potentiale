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
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-4 pb-10 sm:px-6 lg:block lg:px-0 lg:pb-0"
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
        className="order-3 mt-10 flex justify-center pb-2 sm:mt-12 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:block lg:pb-0"
      >
        <SpecialtyCard />
      </motion.div>

      {/* Hero Image - Responsive Scaling */}
      <motion.div
        variants={heroImageVariants}
        className="relative z-10 order-2 mt-8 flex w-full justify-center lg:absolute lg:top-[46%] lg:right-0 lg:order-0 lg:mt-0 lg:-translate-y-1/2 lg:justify-end"
      >
        <div className="w-full max-w-[20rem] sm:max-w-md md:max-w-160 lg:max-w-5xl">
          <Image
            src="/header_bg.png"
            alt="Hero Image"
            width={1200}
            height={1200}
            loading="eager"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Hero Text & CTA - Fixed position on Desktop, Stacked on Mobile */}
      <div className="relative z-20 order-1 pt-24 sm:pt-28 lg:absolute lg:right-10 lg:bottom-14 lg:order-0 lg:px-6 lg:pt-0">
        <div className="flex flex-col items-start lg:items-end">
          <motion.h1
            variants={fadeInUp}
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
            className="text-left font-tilt text-[3.1rem] leading-[0.9] font-normal uppercase tracking-tight text-white/20 mix-blend-exclusion sm:text-[4.75rem] md:text-[6.25rem] lg:text-right lg:text-[9.4rem] lg:leading-[0.8]"
          >
            Power Your <br />
            <motion.span
              className="block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11.25rem]"
              variants={fadeInUp}
            >
              Potential
            </motion.span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center lg:w-auto lg:justify-start"
          >
            <Button
              className="group h-14 flex-1 rounded-2xl border-2 border-white/70 bg-transparent px-6 text-lg uppercase transition-all duration-300 hover:bg-white hover:text-black sm:h-16 sm:px-8 sm:text-xl md:h-20 md:text-3xl lg:w-80 lg:flex-none"
            >
              Shop Now
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Button>

            <Button
              size="icon"
              className="h-14 w-full rounded-2xl border-2 border-white/70 bg-transparent hover:bg-white/10 sm:h-16 sm:w-16 md:h-20 md:w-20"
            >
              <MapPin className="size-6 text-white md:size-8" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
