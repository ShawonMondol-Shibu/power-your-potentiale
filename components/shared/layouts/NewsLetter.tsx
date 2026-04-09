"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  underlineVariants,
} from "@/lib/animation";

const Newsletter = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center p-0 m-0 overflow-hidden">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative w-full max-w-300 aspect-12/4 bg-black rounded-[60px] flex flex-col items-center justify-center px-6 md:px-20 text-center"
      >
        {/* Header Label */}
        <motion.span
          variants={itemVariants}
          className="text-zinc-300 text-lg md:text-xl font-light mb-2"
        >
          Join our community
        </motion.span>

        {/* Headline with Custom Animated Underline */}
        <motion.div variants={itemVariants} className="relative mb-6">
          <h2 className="text-white font-tilt text-4xl md:text-6xl font-normal tracking-tight">
            Subscribe to our{" "}
            <span className="relative inline-block">
              newsletter
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-orange-600"
                viewBox="0 0 300 20"
                fill="none"
              >
                <motion.path
                  variants={underlineVariants}
                  d="M5 15 Q 150 5 295 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  cx="296"
                  cy="11"
                  r="1.5"
                  fill="currentColor"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 }}
                  cx="300"
                  cy="8"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed mb-10"
        >
          Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing
          To Our Newsletter, You&apos;ll Receive Expert Training Tips, Nutrition
          Guides, Exclusive Discounts, And The Latest News On Upcoming Events
          And Products.
        </motion.p>

        {/* Animated Input Field */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-2xl relative"
        >
          <div className="flex items-center p-2 rounded-full border-2 border-zinc-800 bg-black hover:border-zinc-700 transition-colors duration-300">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="grow bg-transparent border-none outline-none px-6 text-white placeholder-zinc-500 text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Newsletter;
