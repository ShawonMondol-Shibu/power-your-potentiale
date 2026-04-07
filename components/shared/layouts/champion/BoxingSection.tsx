"use client";
import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import FocusItem from "./FocusItem";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  textGroupVariants,
} from "@/lib/animation";

const focusItems = [
  {
    title: "Strength & Conditioning",
    description:
      "Develop knockout power with a mix of strength training and explosive movements.",
  },
  {
    title: "Speed & Agility",
    description:
      "Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.",
  },
  {
    title: "Endurance Training",
    description:
      "Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.",
  },
];

const WhyItems = [
  {
    title: "Expert Coaches",
    description:
      "Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.",
  },
  {
    title: "Flexible Programs",
    description:
      "Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.",
  },
];

const BoxingSection = () => {
  return (
    <div className="bg-black flex items-center justify-between py-10 px-10 overflow-hidden rounded-4xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-325 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        {/* Left Column: Image Asset Container */}
        <motion.div
          variants={imageVariants}
          className="lg:col-span-4 relative group"
        >
          <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl relative">
            <Image
              src="/champion.png"
              alt="Boxing Trainer"
              fill
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Right Column: Information Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 h-full">
          {/* Section 1: Training Focus Areas */}
          <motion.div variants={textGroupVariants} className="space-y-8">
            <h2 className="text-xl font-bold tracking-tight text-white/90 uppercase text-[13px]">
              Training Focus Areas
            </h2>
            <div className="space-y-8">
              {focusItems.map((item, index) => (
                <FocusItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Section 2: Why Train With Us & Action */}
          <motion.div
            variants={textGroupVariants}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h2 className="text-xl font-bold tracking-tight text-white/90 uppercase text-[13px]">
                Why Train With Us
              </h2>
              <div className="space-y-8">
                {WhyItems.map((item, index) => (
                  <FocusItem
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}

                <div className="flex items-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#4ea532" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#5cb93c] text-black font-extrabold py-5 px-12 rounded-3xl transition-colors text-lg shadow-[0_10px_30px_rgba(92,185,60,0.25)]"
                  >
                    Punch Now
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-[#5cb93c]/40 hover:border-[#5cb93c] transition-colors group bg-zinc-900/50"
                  >
                    <Play className="w-6 h-6 text-[#5cb93c] fill-[#5cb93c] ml-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BoxingSection;
