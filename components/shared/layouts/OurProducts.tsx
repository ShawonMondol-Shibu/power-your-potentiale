"use client";
import React from "react";
import ProductCard from "../product/ProductCard";
import SectionTitle from "../SectionTitle";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation";

export default function OurProducts() {
  return (
    <main className="space-y-10">
      {/* Title Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionTitle
          main="Our Products"
          sub="Fuel Your Workouts with Protein-Packed Nutrition"
        />
      </motion.div>

      {/* Grid Orchestration */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between p-4 gap-6 rounded-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="h-full"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
