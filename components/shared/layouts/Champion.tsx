import React from "react";
import SectionTitle from "../SectionTitle";
import BoxingSection from "./champion/BoxingSection";

export default function Champion() {
  return (
    <main className="space-y-10">
      <SectionTitle
        main="Train Like a Champion"
        sub="Unleash Your Power with Expert Boxing Training"
      />

      <BoxingSection />
    </main>
  );
}
