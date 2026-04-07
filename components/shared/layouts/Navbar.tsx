"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Menu, X } from "lucide-react"; // Install lucide-react if not present
import Logo from "./navbar/Logo";
import { Button } from "@/components/ui/button";
import NavbarMain from "./navbar/NavbarMain";
import Link from "next/link";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1),
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full h-20 md:h-30 flex items-center justify-between absolute top-0 md:top-2 z-50 bg-transparent px-4 md:px-8"
    >
      {/* Left Section: Logo & Desktop Nav */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 md:gap-10">
        <Logo />
        <div className="hidden lg:block">
          <NavbarMain />
        </div>
      </motion.div>

      {/* Right Section: Desktop Action & Mobile Toggle */}
      <div className="flex items-center gap-4">
        {/* Desktop Button - Hidden on Mobile */}
        <motion.div variants={itemVariants} className="hidden md:block">
          <Link href="/register">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="default"
                className="bg-[#71AC16] hover:bg-[#7cc11a] w-48 lg:w-80 h-16 lg:h-24 px-6 rounded-full text-xl lg:text-[35px] font-tilt uppercase shadow-lg border-none transition-colors"
              >
                Register
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white bg-black/20 rounded-full backdrop-blur-md border border-white/10"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl lg:hidden overflow-hidden border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-6 items-center">
              <NavbarMain />
              <Link href="/register" className="w-full">
                <Button className="bg-[#71AC16] w-full h-16 rounded-full text-2xl font-tilt uppercase">
                  Register
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}