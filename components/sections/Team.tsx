import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import PolaroidCard from "@/components/ui/PolaroidCard";
import { team } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="py-30 bg-cr bg-team-dots overflow-hidden">
      <div className="container">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <SectionLabel center>Meet the team</SectionLabel>
            <h2 className="text-[length:var(--h2)] leading-[1.12] mb-2.5 mt-2">
              Real people. Real credentials.<br />Slightly weird hobbies.
            </h2>
            <p className="text-base text-d50 max-w-[500px] mx-auto">
              You{"\u2019"}ll know exactly who{"\u2019"}s working on your data. No anonymous freelancers, no mystery {"\u201C"}teams{"\u201D"} {"\u2014"} just us.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-3 gap-x-6 gap-y-8 max-w-[980px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-2">
          {team.map((m, i) => (
            <RevealOnScroll key={m.initials} delay={i * 0.03}>
              <PolaroidCard member={m} index={i} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
