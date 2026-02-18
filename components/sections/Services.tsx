"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ServiceIcon } from "@/components/ui/Icons";
import { researchServices, tutoringServices } from "@/data/services";
import type { ServiceCard } from "@/data/services";

function Card({ card }: { card: ServiceCard }) {
  return (
    <div className="bg-white rounded-card p-6 px-5 transition-all duration-200 flex flex-col hover:-translate-y-0.5 hover:shadow-card">
      <div className="w-9 h-9 rounded-lg bg-o10 flex items-center justify-center mb-3">
        <ServiceIcon icon={card.icon} />
      </div>
      <h4 className="text-base font-extrabold mb-1">{card.title}</h4>
      <p className="text-[14px] text-d50 leading-relaxed flex-1 mb-3">{card.description}</p>
      <span className="font-mono text-[13px] font-medium text-o">{card.price}</span>
    </div>
  );
}

export default function Services() {
  const [tab, setTab] = useState<"research" | "tutoring">("research");
  const cards = tab === "research" ? researchServices : tutoringServices;

  return (
    <section id="services" className="py-30 max-md:py-16 bg-d05 bg-orange-dots">
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
          <div className="inline-flex bg-d10 rounded-full p-[2px] mb-8">
            {(["research", "tutoring"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-[4px] border-none font-sans text-[11px] font-semibold cursor-pointer rounded-full transition-all ${
                  tab === t ? "bg-d text-white" : "bg-transparent text-d40 hover:text-d60"
                }`}
              >
                {t === "research" ? "Research & Thesis" : "Math Tutoring"}
              </button>
            ))}
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
