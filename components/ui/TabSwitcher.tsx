"use client";

import { motion } from "framer-motion";

interface Tab {
  value: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  active: string;
  onChange: (value: string) => void;
  layoutId: string;
}

export default function TabSwitcher({ tabs, active, onChange, layoutId }: TabSwitcherProps) {
  return (
    <div className="inline-flex bg-d10 rounded-full p-[2px] relative">
      {tabs.map((t) => (
        <button
          key={t.value}
          onClick={() => onChange(t.value)}
          className="px-3 py-[4px] border-none font-sans text-[11px] font-semibold cursor-pointer rounded-full transition-colors duration-200 relative z-10"
          style={{ color: active === t.value ? "white" : undefined }}
        >
          {active === t.value && (
            <motion.span
              layoutId={layoutId}
              className="absolute inset-0 bg-d rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${active !== t.value ? "text-d40 hover:text-d60" : ""}`}>
            {t.label}
          </span>
        </button>
      ))}
    </div>
  );
}
