"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-30 max-md:py-16 bg-d05 bg-line-grid">
      <div className="container">
        <div className="max-w-[680px] mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <SectionLabel center>FAQ</SectionLabel>
              <h2 className="text-[length:var(--h2)] leading-[1.12] mt-2">Common questions.</h2>
            </div>
          </RevealOnScroll>

          <div className="bg-white/50 backdrop-blur-sm rounded-card overflow-hidden">
            {faqItems.map((item, i) => (
              <RevealOnScroll key={i}>
                <div className="border-b border-d10 last:border-b-0">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center py-5 px-4 bg-transparent border-none font-sans text-base font-semibold text-left cursor-pointer text-d gap-4 transition-colors hover:text-o"
                  >
                    {item.question}
                    <span
                      className={`w-[22px] h-[22px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-250 text-[14px] ${
                        openIndex === i
                          ? "bg-o border-o text-white rotate-45"
                          : "border-d10 text-d40"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-350"
                    style={{ maxHeight: openIndex === i ? "200px" : "0px" }}
                  >
                    <p className="px-4 pb-5 text-base text-d50 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
