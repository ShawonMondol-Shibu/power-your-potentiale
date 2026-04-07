"use client";

import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Move paths outside to keep the component clean and stable
const PATHS = [
  "M105.44 105.483C97.3785 98.7047 97.3785 86.2953 105.44 79.5167C108.036 77.3333 112 79.1791 112 82.5716L112 102.428C112 105.821 108.036 107.667 105.44 105.483Z",
  "M105.44 31.4833C97.3785 24.7047 97.3785 12.2953 105.44 5.51666C108.036 3.33329 112 5.17913 112 8.57156L112 28.4284C112 31.8209 108.036 33.6667 105.44 31.4833Z",
  "M75.4396 142.483C67.3785 135.705 67.3785 123.295 75.4397 116.517C78.0361 114.333 82 116.179 82 119.572L82 139.428C82 142.821 78.0361 144.667 75.4396 142.483Z",
  "M75.4396 68.4833C67.3785 61.7047 67.3785 49.2953 75.4397 42.5167C78.0361 40.3333 82 42.1791 82 45.5716L82 65.4284C82 68.8209 78.0361 70.6667 75.4396 68.4833Z",
  "M75.4396 31.4833C67.3785 24.7047 67.3785 12.2953 75.4397 5.51666C78.0361 3.33329 82 5.17913 82 8.57156L82 28.4284C82 31.8209 78.0361 33.6667 75.4396 31.4833Z",
  "M45.4396 142.483C37.3785 135.705 37.3785 123.295 45.4397 116.517C48.0361 114.333 52 116.179 52 119.572L52 139.428C52 142.821 48.0361 144.667 45.4396 142.483Z",
  "M45.4396 105.483C37.3785 98.7047 37.3785 86.2953 45.4397 79.5167C48.0361 77.3333 52 79.1791 52 82.5716L52 102.428C52 105.821 48.0361 107.667 45.4396 105.483Z",
  "M45.4396 68.4833C37.3785 61.7047 37.3785 49.2953 45.4397 42.5167C48.0361 40.3333 52 42.1791 52 45.5716L52 65.4284C52 68.8209 48.0361 70.6667 45.4396 68.4833Z",
  "M15.4396 142.483C7.37852 135.705 7.37852 123.295 15.4397 116.517C18.0361 114.333 22 116.179 22 119.572L22 139.428C22 142.821 18.0361 144.667 15.4396 142.483Z",
];

export default function Pattern({ className }: { className?: string }) {
  // 1. Generate randomized movement for the WHOLE container
  const containerMovement = useMemo(() => ({
    x: [0, Math.random() * 30 - 15, Math.random() * -30 + 15, 0],
    y: [0, Math.random() * 40 - 20, Math.random() * -40 + 20, 0],
    rotate: [0, Math.random() * 10 - 5, Math.random() * -10 + 5, 0],
    duration: 10 + Math.random() * 10, // Slower, large scale movement
  }), []);

  // 2. Generate randomized movement for INDIVIDUAL paths (shimmer effect)
  const pathStyles = useMemo(() => {
    return PATHS.map(() => ({
      x: [0, Math.random() * 8 - 4, 0],
      y: [0, Math.random() * 12 - 6, 0],
      opacity: [0.1, 0.25, 0.15],
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <motion.div
      className={cn("inline-block pointer-events-none select-none", className)}
      animate={{
        x: containerMovement.x,
        y: containerMovement.y,
        rotate: containerMovement.rotate,
      }}
      transition={{
        duration: containerMovement.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="112"
        height="148"
        viewBox="0 0 112 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto opacity-70"
      >
        {PATHS.map((d, index) => (
          <motion.path
            key={index}
            d={d}
            fill="currentColor" // Changed to currentColor for easier theme styling
            initial={{ opacity: 0.15 }}
            animate={{
              x: pathStyles[index].x,
              y: pathStyles[index].y,
              opacity: pathStyles[index].opacity,
            }}
            transition={{
              duration: pathStyles[index].duration,
              delay: pathStyles[index].delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}