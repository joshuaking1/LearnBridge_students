import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompainonsList from "@/components/CompainonsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

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
        <CompainonsList
          title="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
