import React from "react";
import SectionTitle from "../SectionTitle";
import TestimonialCard from "./our_clients/TestimonialCard";
import { testimonialsData } from "@/lib/data";

export default function OurClients() {
  return (
    <main className="space-y-10">
      <SectionTitle
        main="What Our Clients Are Saying"
        sub="Real Stories, Real Results – Hear From Our Athletes"
      />

      <section className="grid grid-cols-3 items-center justify-between gap-6 bg-[#00000014] p-6 rounded-4xl">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </section>
    </main>
  );
}
