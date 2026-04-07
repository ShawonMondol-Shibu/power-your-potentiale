"use client";

import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NavbarMain = () => {
  // Animation configuration for the search button interaction
  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#4a4a4a" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex items-center justify-center p-0 m-0">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex items-center gap-8 pl-12 pr-2 py-2",
          "bg-black rounded-full border-[1.5px] border-white",
          "min-w-150 h-20"
        )}
      >
        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <a
            href="#"
            className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-xl font-medium hover:text-gray-300 transition-colors"
          >
            Our gym location
          </a>
        </div>

        {/* Separator Pipe */}
        <div className="h-8 w-px bg-white/40 mx-4" aria-hidden="true" />

        {/* Search Input/Button Container */}
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className={cn(
            "flex items-center justify-between gap-4 px-8 py-3",
            "bg-[#3b3b3b] rounded-full cursor-pointer ml-auto",
            "min-w-55"
          )}
        >
          <span className="text-white text-xl font-normal">Search</span>
          <Search className="text-white w-6 h-6 stroke-3" />
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default NavbarMain;