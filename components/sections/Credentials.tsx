import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { StarIcon, DocIcon, DeansIcon, MathIcon } from "@/components/ui/Icons";

const pills = [
  { label: "DOST-SEI Scholar", icon: <StarIcon color="#16A34A" /> },
  { label: "Published Researcher", icon: <DocIcon /> },
  { label: "Dean\u2019s Lister", icon: <DeansIcon /> },
  { label: "BS Math \u2014 CMU", icon: <MathIcon /> },
];

const unis = ["CMU", "UP", "Ateneo", "UST", "DLSU"];

export default function Credentials() {
  return (
    <section className="py-11 border-b border-d10">
      <div className="container">
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          {pills.map((p) => (
            <RevealOnScroll key={p.label}>
              <div className="flex items-center gap-2 px-4 py-[9px] bg-cr border border-d10 rounded-full text-[13px] font-semibold text-d60 transition-all duration-200 hover:border-o hover:text-o hover:-translate-y-px cursor-default">
                {p.icon}
                {p.label}
              </div>
            </RevealOnScroll>
          ))}
          <div className="w-px h-5 bg-d10" />
          {unis.map((u) => (
            <span key={u} className="py-[7px] px-3.5 border border-d10 rounded-full text-[14px] font-bold text-d30">
              {u}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
