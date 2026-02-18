import type { Deliverable } from "@/data/deliverables";

export default function DeliverableCard({ item }: { item: Deliverable }) {
  return (
    <div className="flex-none w-[340px] max-md:w-[280px] snap-start bg-white rounded-card overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
      {/* Top bar */}
      <div className="px-2.5 py-2 bg-d05 flex items-center gap-1.5">
        <div className="w-[7px] h-[7px] rounded-full bg-d20" />
        <div className="w-[7px] h-[7px] rounded-full bg-d20" />
        <div className="w-[7px] h-[7px] rounded-full bg-d20" />
        <span className="text-[11px] text-d40 ml-1.5">{item.filename}</span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h4 className="text-base font-extrabold mb-1.5 flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold bg-o text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0">
            {item.step}
          </span>
          {item.title}
        </h4>
        <p className="text-[13px] text-d50 leading-relaxed mb-3">{item.description}</p>

        {item.content.type === "highlight" && (
          <div className="p-3 bg-obg rounded-lg text-[12px] text-d60 leading-relaxed whitespace-pre-line">
            {(item.content.data as string).split("\n").map((line, i) => {
              if (line.includes("247") || line.includes("48.3%") || line.includes("Panel might ask") || line.includes("Your answer")) {
                return (
                  <span key={i}>
                    <strong className="text-o">{line}</strong>
                    {"\n"}
                  </span>
                );
              }
              return (
                <span key={i}>
                  {line}
                  {"\n"}
                </span>
              );
            })}
          </div>
        )}

        {item.content.type === "table" && (
          <table className="w-full border-collapse text-[11px]">
            <thead>
              <tr>
                {(item.content.data as string[][])[0].map((h, i) => (
                  <th
                    key={i}
                    className="text-left p-[5px_7px] bg-d05 font-semibold border border-d10 text-[10px] uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(item.content.data as string[][]).slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`p-[5px_7px] border border-d10 font-mono text-[10px] ${
                        (ci === 2 && item.step === 2) || (ci === 4 && item.step === 3)
                          ? "text-o font-semibold"
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {item.content.type === "code" && (
          <div className="font-mono text-[11px] bg-d text-[#aaa] p-3 rounded-lg leading-relaxed overflow-x-auto whitespace-pre">
            {(item.content.data as string).split("\n").map((line, i) => (
              <span key={i}>
                {line.startsWith("#") ? (
                  <span className="text-[#555]">{line}</span>
                ) : (
                  line
                    .replace(/\b(data)\b/g, "\x00KW\x00$1\x00/KW\x00")
                    .replace(/\b(model|lm|summary)\b/g, "\x00FN\x00$1\x00/FN\x00")
                    .split(/\x00/)
                    .map((part, j) => {
                      if (part === "KW") return null;
                      if (part === "/KW") return null;
                      if (part === "FN") return null;
                      if (part === "/FN") return null;
                      return <span key={j}>{part}</span>;
                    })
                )}
                {"\n"}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
