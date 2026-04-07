"use client";
import React from "react";
import { Star, StarHalf } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  title: string;
  feedback: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const TestimonialCard = ({
  title,
  feedback,
  name,
  role,
  image,
  rating = 0,
}: TestimonialCardProps) => {
  const normalizedRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.25;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        staggerChildren: 0.1,
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      // Adjusted: Responsive padding and dynamic max-width
      className="w-full max-w-112.5 bg-black rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-10 text-white shadow-2xl border border-zinc-900 flex flex-col justify-between min-h-80 md:min-h-95"
    >
      <div className="flex flex-col space-y-4">
        {/* Title */}
        <motion.h2
          variants={childVariants}
          // Adjusted: Responsive text sizing
          className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight leading-snug"
        >
          {title}
        </motion.h2>

        {/* Testimonial Body */}
        <motion.p
          variants={childVariants}
          // Adjusted: Better line height for mobile readability
          className="text-zinc-400 text-sm md:text-lg leading-[1.6] font-light"
        >
          {feedback}
        </motion.p>
      </div>

      {/* Footer Section */}
      <motion.div
        variants={childVariants}
        // Adjusted: Added flex-wrap for extremely small screens
        className="flex flex-wrap items-center justify-between mt-8 md:mt-10 pt-4 gap-4"
      >
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          {/* Avatar Container */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-zinc-800 ring-2 ring-zinc-800/50 shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 48px, 64px"
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* User Info */}
          <div className="min-w-0">
            <h3 className="text-base md:text-[19px] font-medium leading-tight truncate">
              {name}
            </h3>
            <p className="text-zinc-500 text-xs md:text-[14px] truncate">
              {role}
            </p>
          </div>
        </div>

        {/* Dynamic Star Rating */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto sm:ml-0">
          <div className="flex gap-0.5">
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star
                key={`star-${i}`}
                size={14}
                className="fill-yellow-500 text-yellow-500 sm:w-4 sm:h-4"
              />
            ))}
            {hasHalfStar && (
              <StarHalf size={14} className="fill-yellow-500 text-yellow-500 sm:w-4 sm:h-4" />
            )}
          </div>
          <span className="text-zinc-400 text-[12px] md:text-[13px] font-medium ml-1">
            ({normalizedRating.toFixed(1)})
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;