"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ServiceIcon } from "@/components/ui/Icons";
import { researchServices, tutoringServices } from "@/data/services";
import type { ServiceCard } from "@/data/services";

function Card({ card }: { card: ServiceCard }) {
  return (
    <div className="bg-white border border-d10 rounded-card p-6 px-5 transition-all duration-200 flex flex-col hover:-translate-y-0.5 hover:shadow-card hover:border-o">
      <div className="w-9 h-9 rounded-lg bg-o10 flex items-center justify-center mb-3">
        <ServiceIcon icon={card.icon} />
      </div>
      <h4 className="text-base mb-1">{card.title}</h4>
      <p className="text-[14px] text-d50 leading-relaxed flex-1 mb-3">{card.description}</p>
      <span className="font-mono text-[13px] font-medium text-o">{card.price}</span>
    </div>
  );
}

export default function Services() {
  const [tab, setTab] = useState<"research" | "tutoring">("research");
  const cards = tab === "research" ? researchServices : tutoringServices;

  return (
    <section id="services" className="py-30 bg-cr bg-orange-dots">
      <div className="container">
        <RevealOnScroll>
          <div className="mb-10">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-2.5 mt-2">
              Everything you need<br />to finish strong.
            </h2>
            <p className="text-base text-d50 max-w-[420px]">Research analysis, thesis support, and 1-on-1 math tutoring.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="inline-flex bg-white border border-d10 rounded-btn p-[3px] mb-8">
            <button
              onClick={() => setTab("research")}
              className={`px-5 py-[9px] border-none bg-transparent font-sans text-[14px] font-bold cursor-pointer rounded-lg transition-all ${
                tab === "research" ? "bg-d text-white" : "text-d40"
              }`}
            >
              Research & Thesis
            </button>
            <button
              onClick={() => setTab("tutoring")}
              className={`px-5 py-[9px] border-none bg-transparent font-sans text-[14px] font-bold cursor-pointer rounded-lg transition-all ${
                tab === "tutoring" ? "bg-d text-white" : "text-d40"
              }`}
            >
              Math Tutoring
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
          {cards.map((c) => (
            <RevealOnScroll key={c.title}>
              <Card card={c} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
