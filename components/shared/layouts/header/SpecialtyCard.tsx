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
      className="absolute  bottom-0 left-0"
    >
      <svg
        width="370"
        height="630"
        viewBox="0 0 376 705"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 626.701V78.0796C0 22.5849 56.3152 -15.1589 107.645 5.93289L327.645 96.3318C356.9 108.353 376 136.85 376 168.479V626.701C376 669.779 341.078 704.701 298 704.701H78C34.9218 704.701 0 669.779 0 626.701Z"
          fill="#71AC16"
        />
      </svg>

      <div className="absolute top-16 left-0 w-full h-full flex flex-col items-center font-tilt justify-center gap-8">
        <h2 className="text-white font-tilt text-[35px] font-normal uppercase mb-8">
          Our Specialty
        </h2>

        <div className="flex flex-col gap-4 ">
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
                "flex items-center gap-4 p-4 rounded-4xl",
                "border border-white/40 bg-white/10",
                "cursor-pointer transition-colors duration-200 last:rounded-b-[50px]",
              )}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl border border-white/30 bg-white/5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-white font-satoshi text-xl font-bold">
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
