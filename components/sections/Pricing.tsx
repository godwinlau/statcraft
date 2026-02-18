"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import TabSwitcher from "@/components/ui/TabSwitcher";
import { CheckSmallIcon } from "@/components/ui/Icons";
import { thesisPricing, pilotPricing, tutorPricing } from "@/data/pricing";
import type { PricingTier } from "@/data/pricing";

function PriceCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`rounded-card p-8 px-6 flex flex-col transition-all duration-200 relative hover:-translate-y-0.5 hover:shadow-card ${
        tier.popular ? "bg-o text-white" : "bg-white"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 font-mono text-[10px] font-semibold tracking-[1px] bg-white text-o px-3 py-1 rounded-full whitespace-nowrap">
          MOST POPULAR
        </span>
      )}
      <h3 className="text-[length:var(--h6)] mb-[3px]">{tier.name}</h3>
      <p className={`text-[13px] mb-4.5 ${tier.popular ? "text-white/70" : "text-d40"}`}>{tier.description}</p>
      <div className="font-mono text-[length:var(--h3)] font-bold tracking-tight mb-0.5">{tier.amount}</div>
      <div className={`text-[12px] mb-5 ${tier.popular ? "text-white/70" : "text-d40"}`}>{tier.per}</div>
      <ul className="list-none mb-6 flex-1">
        {tier.features.map((f) => (
          <li key={f} className={`text-[14px] py-[7px] flex items-start gap-2 ${tier.popular ? "text-white/80" : "text-d50"}`}>
            <CheckSmallIcon className={`shrink-0 mt-0.5 ${tier.popular ? "text-white" : "text-o"}`} />
            {f}
          </li>
        ))}
      </ul>
      <Button
        variant={tier.popular ? "white" : "outline"}
        href="#contact"
        className="w-full !justify-center"
      >
        {tier.cta}
      </Button>
    </div>
  );
}

type Tab = "thesis" | "pilot" | "tutor";

const tabData: Record<Tab, PricingTier[]> = {
  thesis: thesisPricing,
  pilot: pilotPricing,
  tutor: tutorPricing,
};

export default function Pricing() {
  const [tab, setTab] = useState<Tab>("thesis");

  return (
    <section id="pricing" className="py-30 max-md:py-16">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <SectionLabel center>Pricing</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-2.5 mt-2">Simple, transparent pricing.</h2>
            <p className="text-base text-d50">All PHP. No hidden fees.</p>
            <div className="mt-4.5">
              <TabSwitcher
                tabs={[
                  { value: "thesis", label: "Thesis & Analysis" },
                  { value: "pilot", label: "Pilot Study" },
                  { value: "tutor", label: "Tutoring" },
                ]}
                active={tab}
                onChange={(v) => setTab(v as Tab)}
                layoutId="pricing-tab"
              />
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-3 gap-3.5 max-w-[960px] mx-auto max-md:grid-cols-1 max-md:max-w-[380px]">
          {tabData[tab].map((tier) => (
            <RevealOnScroll key={tier.name}>
              <PriceCard tier={tier} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
