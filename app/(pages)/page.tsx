import Champion from "@/components/shared/layouts/Champion";
import Header from "@/components/shared/layouts/Header";
import Newsletter from "@/components/shared/layouts/NewsLetter";
import OurClients from "@/components/shared/layouts/OurClients";
import OurProducts from "@/components/shared/layouts/OurProducts";
import Pattern from "@/components/shared/layouts/Pattern";
import React from "react";

const AnimatedComponents = ()=>{
  return<div className="relative w-full flex items-center justify-between">
        <Pattern className="absolute top-0 left-0" />
        <Pattern className="absolute top-0 right-0" />
      </div>
}

function Home() {
  return (
    <main className="mx-auto p-4 space-y-20">
      <Header />
      <AnimatedComponents />
      <OurProducts />
      <AnimatedComponents />
      <Champion />
      <AnimatedComponents />
      <OurClients />
      <AnimatedComponents />
      <Newsletter />
      <AnimatedComponents />
    </main>
  );
}

export default Home;
