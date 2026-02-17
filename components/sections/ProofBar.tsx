const stats = [
  { val: "100%", lbl: "On-time delivery" },
  { val: "0", lbl: "Missed deadlines \u2014 ever" },
  { val: "<24h", lbl: "Response time" },
  { val: "5.0", lbl: "Client rating" },
];

export default function ProofBar() {
  return (
    <section className="bg-d text-white">
      <div className="container grid grid-cols-4 max-md:grid-cols-2">
        {stats.map((s, i) => (
          <div
            key={s.lbl}
            className={`py-6 px-4 text-center ${
              i < stats.length - 1 ? "border-r border-white/[.06] max-md:border-b" : "max-md:border-b"
            }`}
          >
            <div className="font-mono text-[length:var(--h6)] font-bold">{s.val}</div>
            <div className="text-[11px] text-white/35 mt-0.5">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
