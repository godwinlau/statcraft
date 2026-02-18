import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { compareRows } from "@/data/compare";

function CellContent({ value, isStatcraft }: { value: string; isStatcraft: boolean }) {
  if (value.startsWith("\u2713")) return <span className="text-o font-bold">{value}</span>;
  if (value === "\u2715") return <span className="text-d20">{value}</span>;
  if (isStatcraft) return <span className="text-o font-bold">{value}</span>;
  return <span>{value}</span>;
}

export default function Compare() {
  return (
    <section className="py-30 max-md:py-16 bg-d05 bg-d05osshatch">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <SectionLabel center>How we compare</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-2.5 mt-2">See the difference.</h2>
            <p className="text-base text-d50">Compare your options honestly.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="max-w-[880px] mx-auto rounded-card overflow-hidden shadow-subtle max-md:overflow-x-auto">
            <div className="min-w-[540px]">
              {/* Header */}
              <div className="grid grid-cols-[160px_repeat(4,1fr)] bg-d text-white">
                <div className="p-[13px_12px] text-[12px] font-bold flex items-center" />
                <div className="p-[13px_12px] text-[12px] font-bold flex items-center justify-center border-l border-d10">DIY</div>
                <div className="p-[13px_12px] text-[12px] font-bold flex items-center justify-center border-l border-d10">FB Freelancer</div>
                <div className="p-[13px_12px] text-[12px] font-bold flex items-center justify-center border-l border-d10">Other Labs</div>
                <div className="p-[13px_12px] text-[12px] font-bold flex items-center justify-center border-l border-d10 bg-o">StatCraft</div>
              </div>

              {/* Rows */}
              {compareRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[160px_repeat(4,1fr)] bg-white ${
                    i < compareRows.length - 1 ? "border-b border-d10" : ""
                  }`}
                >
                  <div className="p-[13px_12px] text-[12px] font-semibold text-d bg-d05 flex items-center">
                    {row.feature}
                  </div>
                  <div className="p-[13px_12px] text-[13px] text-d50 flex items-center justify-center text-center border-l border-d10">
                    <CellContent value={row.diy} isStatcraft={false} />
                  </div>
                  <div className="p-[13px_12px] text-[13px] text-d50 flex items-center justify-center text-center border-l border-d10">
                    <CellContent value={row.fbFreelancer} isStatcraft={false} />
                  </div>
                  <div className="p-[13px_12px] text-[13px] text-d50 flex items-center justify-center text-center border-l border-d10">
                    <CellContent value={row.otherLabs} isStatcraft={false} />
                  </div>
                  <div className="p-[13px_12px] text-[13px] font-semibold text-d flex items-center justify-center text-center border-l border-d10 bg-obg">
                    <CellContent value={row.statcraft} isStatcraft={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
