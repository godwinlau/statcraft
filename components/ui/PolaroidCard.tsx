import type { TeamMember } from "@/data/team";

const rotations = [
  "rotate(-1.5deg)",
  "rotate(0.8deg)",
  "rotate(-0.5deg)",
  "rotate(1.2deg)",
  "rotate(-0.8deg)",
  "rotate(1.5deg)",
];

const tapeRotations = [
  "translateX(-50%) rotate(-2deg)",
  "translateX(-50%) rotate(1.5deg)",
  "rotate(-1deg)",
  "translateX(-50%) rotate(-1.5deg)",
  "rotate(1deg)",
  "translateX(-50%) rotate(2.5deg)",
];

const tapeLefts = ["50%", "50%", "30%", "50%", "60%", "50%"];

export default function PolaroidCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <div
      className="bg-white rounded-card p-[10px] pb-0 transition-all duration-350 cursor-default relative hover:!rotate-0 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-card-hover hover:z-5"
      style={{ transform: rotations[index] }}
    >
      {/* Tape */}
      <div
        className="absolute -top-1.5 w-14 h-4 rounded-[1px] z-[6]"
        style={{
          background: "rgba(255,243,200,0.65)",
          left: tapeLefts[index],
          transform: tapeRotations[index],
        }}
      />

      {/* Image area */}
      <div className="w-full aspect-square rounded-[10px] overflow-hidden relative">
        {member.image ? (
          <div className="w-full h-full relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 font-mono text-[9px] tracking-[1px] uppercase px-2.5 py-1 rounded-full bg-black/45 text-white backdrop-blur-lg">
              {member.role}
            </div>
          </div>
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center relative"
            style={{ background: member.gradient }}
          >
            <div className="text-5xl font-extrabold text-white/90 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
              {member.initials}
            </div>
            <div
              className="text-[32px] absolute bottom-2.5 right-2.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              style={{
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {member.emoji}
            </div>
            <div className="absolute top-2 left-2 font-mono text-[9px] tracking-[1px] uppercase px-2.5 py-1 rounded-full bg-black/45 text-white backdrop-blur-lg">
              {member.role}
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="px-1.5 pt-3.5 pb-4.5">
        <div className="text-base font-extrabold mb-px tracking-tight">{member.name}</div>
        <div className="text-[12px] text-o font-semibold mb-0.5">{member.title}</div>
        <div className="text-[11px] text-d30 mb-2.5">{"\uD83D\uDCCD"} {member.location}</div>

        <div className="flex flex-wrap gap-[3px]">
          {member.tags.map((tag) => (
            <span
              key={tag.label}
              className={`font-mono text-[11px] font-medium px-[7px] py-[3px] rounded-full ${
                tag.accent ? "bg-o10 text-o" : "bg-d05 text-d40"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
