"use client";
import React from "react";
import SectionTitle from "../SectionTitle";
import TestimonialCard from "./our_clients/TestimonialCard";
import { testimonialsData } from "@/lib/data";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation";

export default function OurClients() {
  return (
    <main className="space-y-16 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionTitle
          main="What Our Clients Are Saying"
          sub="Real Stories, Real Results – Hear From Our Athletes"
        />
      </motion.div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-8 bg-zinc-900/20 p-8 rounded-[3rem] mx-auto"
      >
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="flex"
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
