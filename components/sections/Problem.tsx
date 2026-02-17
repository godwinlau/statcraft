import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const pains = [
  {
    num: "01",
    title: "Your data is chaos",
    desc: "Hundreds of survey responses. Missing values. Inconsistent formatting. Nobody taught you how to clean this.",
  },
  {
    num: "02",
    title: "Statistics feel impossible",
    desc: 'Regression? ANOVA? Your adviser says "run the analysis" like it\'s a button. You\'re Googling at 2 AM.',
  },
  {
    num: "03",
    title: "The deadline is real",
    desc: "Defense is weeks away. Chapter 4 is empty. Every day you delay costs another semester of tuition.",
  },
];

export default function Problem() {
  return (
    <section className="py-30">
      <div className="container">
        <RevealOnScroll>
          <div className="max-w-[800px] mx-auto text-center">
            <SectionLabel center>The problem</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-4 mt-3.5">
              Thesis projects don{"\u2019"}t fail<br />because of <em className="not-italic text-o">bad ideas.</em>
            </h2>
            <p className="text-base text-d50 mb-12">
              They fail because of chaotic data, wrong methodology, and panic at 2 AM.
            </p>
            <div className="grid grid-cols-3 gap-px bg-d10 rounded-card overflow-hidden border border-d10 max-md:grid-cols-1">
              {pains.map((p) => (
                <div key={p.num} className="bg-white p-9 px-6 text-left transition-colors hover:bg-obg">
                  <div className="font-mono text-[12px] text-o tracking-[1px] mb-3">{p.num}</div>
                  <h3 className="text-[length:var(--h6)] mb-1.5">{p.title}</h3>
                  <p className="text-base text-d50 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
