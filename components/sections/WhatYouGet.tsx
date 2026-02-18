"use client";

import { useRef, useState, useEffect } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import DeliverableCard from "@/components/ui/DeliverableCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { deliverables } from "@/data/deliverables";

export default function WhatYouGet() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    setAtStart(t.scrollLeft < 10);
    setAtEnd(t.scrollLeft >= t.scrollWidth - t.clientWidth - 10);
  };

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    t.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => t.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 356, behavior: "smooth" });
  };

  return (
    <section className="py-[100px] bg-d05 overflow-hidden">
      <div className="container">
        <RevealOnScroll>
          <div className="mb-9 flex items-end justify-between">
            <div>
              <SectionLabel>What you get</SectionLabel>
              <h2 className="text-[length:var(--h2)] leading-[1.12] mb-1.5 mt-2">
                Not just numbers.<br />Full deliverables.
              </h2>
              <p className="text-base text-d50">Other providers send raw SPSS output. We deliver thesis-ready work.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                disabled={atStart}
                className={`w-10 h-10 rounded-full bg-white shadow-subtle flex items-center justify-center cursor-pointer transition-all text-d40 hover:text-o hover:scale-105 ${
                  atStart ? "opacity-30 pointer-events-none" : ""
                }`}
              >
                <ArrowLeftIcon />
              </button>
              <button
                onClick={() => scroll(1)}
                disabled={atEnd}
                className={`w-10 h-10 rounded-full bg-white shadow-subtle flex items-center justify-center cursor-pointer transition-all text-d40 hover:text-o hover:scale-105 ${
                  atEnd ? "opacity-30 pointer-events-none" : ""
                }`}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {deliverables.map((d) => (
            <DeliverableCard key={d.step} item={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
