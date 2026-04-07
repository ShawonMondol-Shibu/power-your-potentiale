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
  // Logic: Ensure rating is a finite number between 0 and 5 to prevent Array(length) errors
  const normalizedRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.25;

  // Motion Variants
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
      className="w-full max-w-112.5 bg-black rounded-[40px] p-8 md:p-10 text-white shadow-2xl border border-zinc-900 flex flex-col justify-between"
    >
      <div className="flex flex-col space-y-4">
        {/* Title */}
        <motion.h2
          variants={childVariants}
          className="text-[22px] font-semibold tracking-tight leading-snug"
        >
          {title}
        </motion.h2>

        {/* Testimonial Body */}
        <motion.p
          variants={childVariants}
          className="text-zinc-400 text-[15px] leading-[1.6] font-light"
        >
          {feedback}
        </motion.p>
      </div>

      {/* Footer Section */}
      <motion.div
        variants={childVariants}
        className="flex items-center justify-between mt-10 pt-4"
      >
        <div className="flex items-center gap-4">
          {/* Avatar Container */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-zinc-800 ring-2 ring-zinc-800/50 shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* User Info */}
          <div className="min-w-0">
            <h3 className="text-[17px] md:text-[19px] font-medium leading-tight truncate">
              {name}
            </h3>
            <p className="text-zinc-500 text-[13px] md:text-[14px] truncate">
              {role}
            </p>
          </div>
        </div>

        {/* Dynamic Star Rating */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="flex gap-0.5">
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star
                key={`star-${i}`}
                size={14}
                className="fill-yellow-500 text-yellow-500"
              />
            ))}
            {hasHalfStar && (
              <StarHalf size={14} className="fill-yellow-500 text-yellow-500" />
            )}
          </div>
          <span className="text-zinc-400 text-[13px] font-medium ml-1">
            ({normalizedRating.toFixed(1)})
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
