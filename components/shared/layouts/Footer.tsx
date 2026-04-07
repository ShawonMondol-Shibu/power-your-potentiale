"use client";
import React from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import { containerVariants, itemVariants } from "@/lib/animation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto bg-white text-[#1a1a1a] font-sans border-t-2 border-zinc-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-350 mx-auto px-6 pt-16 pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: About */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-lg font-bold mb-6">About</h3>
            <p className="text-[15px] leading-relaxed text-zinc-600 mb-6 max-w-[320px]">
              At MuscleForge, we believe in the power of dedication and hard
              work. Our mission is to provide you with the tools, resources, and
              community you need to build the body of your dreams
            </p>
            <div className="w-full h-px bg-zinc-400 mb-4" />
            <div className="flex items-center gap-2 text-[15px] font-bold">
              <span>Social Media:</span>
              <div className="flex gap-3">
                {["Fb", "In", "Tw"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ scale: 1.1, color: "#000" }}
                    className="text-black cursor-pointer"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-[15px] text-zinc-600">
              {["Home", "Our gym location", "Contact Us", "Privacy policy"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Column 3: Our Service */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-lg font-bold mb-6">Our Service</h3>
            <ul className="space-y-4 text-[15px] text-zinc-600">
              {["Indoor gym", "Outdoor gym", "On ground gym", "Yoga class"].map(
                (service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-black transition-colors">
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-lg font-bold mb-6">Contact I nfo</h3>
            <ul className="space-y-4 text-[15px] text-zinc-600">
              <ul className="space-y-4 text-[15px] text-zinc-600">
                {contactInfo.map(({ label, value }) => (
                  <li key={label}>
                    <span className="font-bold text-black">{label}:</span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-8 border-zinc-200 flex flex-col items-center gap-4"
        >
          <div className="w-1/3 h-0.5 bg-zinc-200 mb-2" />
          <p className="text-zinc-500 text-sm tracking-wide">
            websitename.com©{currentYear} all right reserve
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
