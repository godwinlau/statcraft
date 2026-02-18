"use client";

import { useState, type FormEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Button from "@/components/ui/Button";
import { MessengerIcon, MailIcon } from "@/components/ui/Icons";

const processSteps = [
  { num: "1", title: "Message us", desc: "Tell us your topic & deadline" },
  { num: "2", title: "Free review", desc: "We assess your project scope" },
  { num: "3", title: "Fixed quote", desc: "Clear price within 24 hours" },
  { num: "4", title: "We deliver", desc: "Pay 50% to start, 50% on delivery" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-30 max-md:py-16 bg-d text-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-14 items-start max-lg:grid-cols-1">
          <div>
            <SectionLabel light>Get started</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-2.5 mt-2">Start your project.</h2>
            <p className="text-base text-white/40 mb-7">
              Free consultation. No commitment. We review your project and send a fixed quote within 24 hours.
            </p>

            <a
              href="https://m.me/statcraft"
              className="flex items-center gap-3.5 p-4 px-4.5 rounded-btn border border-white/[.07] bg-white/[.03] no-underline text-white transition-all duration-200 mb-2.5 hover:bg-white/[.06] hover:border-white/[.12] hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(0,132,255,0.15)]">
                <MessengerIcon size={18} />
              </div>
              <div>
                <h4 className="text-[14px] font-bold mb-px">Message on Messenger</h4>
                <p className="text-[12px] text-white/30">Fastest {"\u2014"} usually within the hour</p>
              </div>
            </a>

            <a
              href="mailto:hello@statcraft.ph"
              className="flex items-center gap-3.5 p-4 px-4.5 rounded-btn border border-white/[.07] bg-white/[.03] no-underline text-white transition-all duration-200 mb-7 hover:bg-white/[.06] hover:border-white/[.12] hover:translate-x-1"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-o/15">
                <MailIcon />
              </div>
              <div>
                <h4 className="text-[14px] font-bold mb-px">Email us</h4>
                <p className="text-[12px] text-white/30">hello@statcraft.ph</p>
              </div>
            </a>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-white/25">We accept</span>
              {["GCash", "PayMaya", "Bank Transfer", "ShopeePay"].map((p) => (
                <span key={p} className="px-3 py-[5px] border border-white/[.07] rounded-full text-[11px] font-semibold text-white/35">
                  {p}
                </span>
              ))}
            </div>

            {/* Process steps */}
            <div className="grid grid-cols-4 gap-px bg-white/[.06] rounded-btn overflow-hidden mt-7 border border-white/[.06] max-md:grid-cols-2">
              {processSteps.map((s) => (
                <div key={s.num} className="p-5 px-4 bg-white/[.02] text-center hover:bg-white/[.04] transition-colors">
                  <div className="font-mono text-[length:var(--h6)] font-bold text-o mb-1.5">{s.num}</div>
                  <h4 className="text-[13px] font-bold mb-[3px] text-white">{s.title}</h4>
                  <p className="text-[11px] text-white/35 leading-snug">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <RevealOnScroll>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold uppercase tracking-wide text-white/35">Name</label>
                <input
                  placeholder="Full name"
                  required
                  className="p-3 px-3.5 bg-white/[.04] border border-white/[.07] rounded-btn text-white font-sans text-[14px] transition-colors placeholder:text-white/[.18] focus:outline-none focus:border-o"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold uppercase tracking-wide text-white/35">Email or Messenger link</label>
                <input
                  placeholder="you@email.com or m.me/yourname"
                  required
                  className="p-3 px-3.5 bg-white/[.04] border border-white/[.07] rounded-btn text-white font-sans text-[14px] transition-colors placeholder:text-white/[.18] focus:outline-none focus:border-o"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold uppercase tracking-wide text-white/35">Tell us about your project</label>
                <textarea
                  placeholder="What do you need help with? Include your topic, deadline, and any details. The more you share, the faster we can quote."
                  className="p-3 px-3.5 bg-white/[.04] border border-white/[.07] rounded-btn text-white font-sans text-[14px] transition-colors placeholder:text-white/[.18] focus:outline-none focus:border-o resize-y min-h-[140px]"
                />
              </div>
              <Button
                type="submit"
                variant={submitted ? "dark" : "orange"}
                className="self-start"
                style={submitted ? { background: "#16A34A" } : undefined}
              >
                {submitted ? "Sent! Response within 24h \u2713" : "Send message \u2192"}
              </Button>
              <p className="text-[12px] text-white/25 mt-1">We respond within 24 hours. Usually much faster.</p>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
