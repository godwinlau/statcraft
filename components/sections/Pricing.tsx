"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { CheckSmallIcon } from "@/components/ui/Icons";
import { thesisPricing, pilotPricing, tutorPricing } from "@/data/pricing";
import type { PricingTier } from "@/data/pricing";

function PriceCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`bg-white border-[1.5px] rounded-card p-8 px-6 flex flex-col transition-all duration-200 relative hover:-translate-y-0.5 hover:shadow-card ${
        tier.popular ? "border-o bg-obg" : "border-d10"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 font-mono text-[10px] font-semibold tracking-[1px] bg-o text-white px-3 py-1 rounded-full whitespace-nowrap">
          MOST POPULAR
        </span>
      )}
      <h3 className="text-[length:var(--h6)] mb-[3px]">{tier.name}</h3>
      <p className="text-[13px] text-d40 mb-4.5">{tier.description}</p>
      <div className="font-mono text-[length:var(--h3)] font-bold tracking-tight mb-0.5">{tier.amount}</div>
      <div className="text-[12px] text-d40 mb-5">{tier.per}</div>
      <ul className="list-none mb-6 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="text-[14px] text-d50 py-[7px] border-b border-d10 last:border-none flex items-start gap-2">
            <CheckSmallIcon className="shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <Button
        variant={tier.popular ? "orange" : "outline"}
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
    <section id="pricing" className="py-30">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <SectionLabel center>Pricing</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-2.5 mt-2">Simple, transparent pricing.</h2>
            <p className="text-base text-d50">All PHP. No hidden fees.</p>
            <div className="mt-4.5">
              <div className="inline-flex bg-cr border border-d10 rounded-btn p-[3px]">
                {(["thesis", "pilot", "tutor"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-[22px] py-[9px] border-none bg-transparent font-sans text-[14px] font-bold cursor-pointer rounded-lg transition-all ${
                      tab === t ? "bg-d text-white" : "text-d40"
                    }`}
                  >
                    {t === "thesis" ? "Thesis & Analysis" : t === "pilot" ? "Pilot Study" : "Tutoring"}
                  </button>
                ))}
              </div>
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
