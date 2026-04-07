import Champion from "@/components/shared/layouts/Champion";
import Newsletter from "@/components/shared/layouts/NewsLatter";
import OurClients from "@/components/shared/layouts/OurClients";
import OurProducts from "@/components/shared/layouts/OurProducts";
import React from "react";

function Home() {
  return (
    <main className="container mx-auto py-10 space-y-24">
      <OurProducts />
      <Champion />
      <OurClients/>
      <Newsletter/>
    </main>
  );
}

export default Home;
