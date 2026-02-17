import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ToolSvgIcon } from "@/components/ui/Icons";
import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <section className="py-[72px] bg-d bg-dark-dots-subtle text-white text-center">
      <div className="container">
        <div className="font-mono text-[11px] tracking-[2.5px] uppercase text-white/30 mb-6">
          Tools & platforms we use
        </div>
        <div className="flex items-center justify-center gap-3 flex-wrap max-md:gap-2">
          {tools.map((tool) => (
            <RevealOnScroll key={tool.name}>
              <div className="flex items-center gap-2.5 px-5 py-[11px] max-md:px-3 max-md:py-2 bg-white/[.04] border border-white/[.07] rounded-btn transition-all duration-200 hover:bg-white/[.07] hover:border-white/[.12] hover:-translate-y-0.5">
                <ToolSvgIcon icon={tool.icon} />
                <div>
                  <span className="text-[14px] font-semibold text-white/80">{tool.name}</span>
                  <small className="text-[11px] text-white/30 block mt-px max-md:hidden">{tool.subtitle}</small>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
