import React from "react";
import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompainonsList from "@/components/CompainonsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1>Popular Compaions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          subject="science"
          topic="Neural Network of the Brain"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="675"
          name="Countsy the Number Wizard"
          subject="Math"
          topic="Derivates & Integrals"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="465"
          name="naaa"
          subject="science"
          topic="Neural Network of the Brain"
          duration={45}
          color="#E5D0FF"
        />
      </section>

      <section className="home-section">
        <CompainonsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
