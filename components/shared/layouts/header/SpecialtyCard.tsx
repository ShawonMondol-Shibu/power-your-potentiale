"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SpecialtyItem {
  id: number;
  title: string;
  icon: string;
}

const specialties: SpecialtyItem[] = [
  { id: 1, title: "Ground running", icon: "/images/yoga1.png" },
  { id: 2, title: "Yoga Assistance", icon: "/images/yoga2.png" },
  { id: 3, title: "Personal Trainer", icon: "/images/yoga3.png" },
];

const SpecialtyCard = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full max-w-[20rem] sm:max-w-94 lg:max-w-94"
    >
      <svg
        width="370"
        height="630"
        viewBox="0 0 376 705"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M0 626.701V78.0796C0 22.5849 56.3152 -15.1589 107.645 5.93289L327.645 96.3318C356.9 108.353 376 136.85 376 168.479V626.701C376 669.779 341.078 704.701 298 704.701H78C34.9218 704.701 0 669.779 0 626.701Z"
          fill="#71AC16"
        />
      </svg>

      <div className="absolute inset-x-0 top-16 flex h-full flex-col items-center justify-center gap-6 px-4 font-tilt sm:top-16 sm:gap-8">
        <h2 className="mb-4 text-center font-tilt text-[1.75rem] font-normal uppercase text-white sm:mb-8 sm:text-[2.2rem]">
          Our Specialty
        </h2>

        <div className="flex w-full max-w-68 flex-col gap-3 sm:max-w-74 sm:gap-4">
          {specialties.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "flex items-center gap-3 rounded-[2rem] p-3 sm:gap-4 sm:p-4",
                "border border-white/40 bg-white/10",
                "cursor-pointer transition-colors duration-200 last:rounded-b-[2.75rem] sm:last:rounded-b-[3.125rem]",
              )}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/5 sm:h-16 sm:w-16">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  loading="eager"
                  className="h-9 w-9 object-contain sm:h-12.5 sm:w-12.5"
                />
              </div>
              <span className="font-satoshi text-lg font-bold text-white sm:text-xl">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialtyCard;
