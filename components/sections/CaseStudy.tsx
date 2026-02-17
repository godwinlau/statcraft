import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const steps = [
  { num: 1, day: "Day 1", title: "Client reaches out", desc: "MBA student, marketing thesis. 247 survey responses in messy Excel. Defense in 3 weeks. Chapter 4 is blank." },
  { num: 2, day: "Day 2", title: "Analysis plan delivered", desc: "3 constructs identified (IV, DV, mediator). Plan: cleaning \u2192 reliability \u2192 regression \u2192 mediation via SPSS." },
  { num: 3, day: "Day 3\u20137", title: "Execution", desc: "Cleaned 23 incomplete responses. Cronbach\u2019s alpha (\u03B1 > .80). Regression + Sobel test. All APA tables generated." },
  { num: 4, day: "Day 8\u201310", title: "Chapter 4 write-up", desc: "6 APA tables, 2 figures, full interpretation. Reviewed via Google Meet screen-share." },
  { num: 5, day: "Day 12", title: "Adviser approves first submission", desc: "Zero revisions. Client scheduled defense immediately." },
];

const sideStats = [
  { val: "12", lbl: "Days from panic to approval" },
  { val: "0", lbl: "Revisions from adviser" },
  { val: "6", lbl: "APA tables delivered" },
  { val: "\u20B16,000", lbl: "Total cost" },
];

export default function CaseStudy() {
  return (
    <section className="py-30 bg-d bg-dark-dots text-white relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,83,14,0.1),transparent_70%)] pointer-events-none" />
      <div className="container">
        <RevealOnScroll>
          <div className="mb-12 relative z-[1]">
            <SectionLabel light>Real project</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-2.5 mt-2">
              From panic to defense<br />in <em className="not-italic text-o">12 days.</em>
            </h2>
            <p className="text-base text-white/40 max-w-[420px]">An anonymized walkthrough of a real engagement.</p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-[1fr_320px] gap-11 relative z-[1] max-lg:grid-cols-1">
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.num} delay={i * 0.05}>
                <div className="flex gap-4.5">
                  <div className="w-9 h-9 rounded-full bg-o/15 border-2 border-o flex items-center justify-center shrink-0 font-mono text-[12px] font-bold text-o">
                    {s.num}
                  </div>
                  <div className="pt-0.5">
                    <div className="font-mono text-[11px] tracking-[1.5px] uppercase text-o mb-[3px]">{s.day}</div>
                    <h4 className="text-base font-bold mb-[3px]">{s.title}</h4>
                    <p className="text-[14px] text-white/40 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="flex flex-col gap-3">
              {sideStats.map((s) => (
                <div key={s.lbl} className="p-4.5 bg-white/[.03] border border-white/[.06] rounded-btn">
                  <div className="font-mono text-[length:var(--h4)] font-bold text-o">{s.val}</div>
                  <div className="text-[12px] text-white/30 mt-0.5">{s.lbl}</div>
                </div>
              ))}
              <div className="p-4.5 bg-o/[.08] border-l-[3px] border-o rounded-r-btn">
                <p className="text-[14px] italic text-white/60 leading-relaxed mb-1">
                  {"\u201C"}I went from nothing to an approved Chapter 4 in less than two weeks.{"\u201D"}
                </p>
                <cite className="text-[12px] text-white/30 not-italic">{"\u2014"} MBA Student, Marketing Research</cite>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
