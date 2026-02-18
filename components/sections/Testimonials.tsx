import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-30 max-md:py-16">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <SectionLabel center>Reviews</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mt-2">They defended. You can too.</h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-3 gap-3.5 max-w-[920px] mx-auto max-md:grid-cols-1">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.name}>
              <div className="bg-white rounded-card p-7 px-6 flex flex-col h-full shadow-subtle transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-5 h-[2px] bg-o" />
                  <span className="text-[13px] font-semibold text-d40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-[15px] font-semibold text-d leading-[1.7] mb-6 flex-1">{t.text}</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-o flex items-center justify-center text-[12px] font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold">{t.name}</div>
                    <div className="text-[12px] text-d40">{t.role}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Urgency banner */}
        <RevealOnScroll>
          <div className="mt-12 max-w-[920px] mx-auto bg-d text-white rounded-card p-9 px-10 grid grid-cols-3 gap-7 text-center max-md:grid-cols-1 max-md:text-left max-md:p-6">
            <div>
              <h4 className="font-mono text-[length:var(--h4)] font-bold text-o mb-[3px]">1 month+</h4>
              <div className="text-[11px] uppercase tracking-[1px] text-white/35 mb-2">Comfortable</div>
              <p className="text-[12px] text-white/40 leading-relaxed">Full package, coaching, no rush fees.</p>
            </div>
            <div>
              <h4 className="font-mono text-[length:var(--h4)] font-bold text-o mb-[3px]">2{"\u2013"}3 weeks</h4>
              <div className="text-[11px] uppercase tracking-[1px] text-white/35 mb-2">Tight but doable</div>
              <p className="text-[12px] text-white/40 leading-relaxed">Complete analysis + Chapter 4. Most common.</p>
            </div>
            <div>
              <h4 className="font-mono text-[length:var(--h4)] font-bold text-o mb-[3px]">{"\u2264"} 1 week</h4>
              <div className="text-[11px] uppercase tracking-[1px] text-white/35 mb-2">Emergency</div>
              <p className="text-[12px] text-white/40 leading-relaxed">Rush delivery. Message us NOW.</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
