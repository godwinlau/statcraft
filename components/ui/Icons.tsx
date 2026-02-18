export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" width="14" height="14" fill="none" className={className}>
      <path d="M3 7.5l2.5 3L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckSmallIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" width="14" height="14" fill="none" className={className}>
      <path d="M3 7.5l2.5 3L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MessengerIcon({ className = "", size = 16 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} fill="none" className={className}>
      <path d="M10 1C5 1 1 4.6 1 9.1c0 2.5 1.2 4.7 3.2 6.2V19l3.6-2c.7.2 1.4.3 2.2.3 5 0 9-3.6 9-8.1S15 1 10 1z" fill="#0084FF" />
      <path d="M5 11l3-5 2.5 2.5L14 6l-3 5-2.5-2.5z" fill="#fff" />
    </svg>
  );
}

export function MessengerWhiteIcon({ size = 13 }: { size?: number }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} fill="none">
      <path d="M10 1C5 1 1 4.6 1 9.1c0 2.5 1.2 4.7 3.2 6.2V19l3.6-2c.7.2 1.4.3 2.2.3 5 0 9-3.6 9-8.1S15 1 10 1z" fill="#fff" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#E8530E" strokeWidth="1.5" />
      <path d="M2 6l8 5 8-5" stroke="#E8530E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none">
      <path d="M15 5L5 15M5 5l10 10" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoMark() {
  return (
    <span className="w-[30px] h-[30px] bg-o rounded-lg flex items-center justify-center">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M4 12L8 3l4 9M5.5 9h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function StarIcon({ color = "#16A34A" }: { color?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d="M8 1l2 4h4l-3.5 3 1.5 4.5L8 10l-4 2.5L5.5 8 2 5h4z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function DocIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d="M3 3h10v10H3z" stroke="#E8530E" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M6 6h4M6 9h3" stroke="#E8530E" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function DeansIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d="M8 1l1.5 3h3l-2.5 2 1 3.5L8 7.5 4.5 9.5l1-3.5-2.5-2h3z" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function MathIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
      <text x="8" y="12" textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#0050B4">{"\u03A3"}</text>
    </svg>
  );
}

// Service icons — Lucide Animated with auto-loop
export { AnimatedServiceIcon as ServiceIcon } from "@/components/ui/AnimatedServiceIcon";

export function ToolSvgIcon({ icon }: { icon: { type: string; bg: string; text: string; textColor: string; fontSize?: string; fontFamily?: string } }) {
  if (icon.type === "circle") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="11" fill={icon.bg} />
        <text x="12" y="17" textAnchor="middle" fontFamily={icon.fontFamily || "Arial"} fontSize={icon.fontSize || "10"} fontWeight="bold" fill={icon.textColor}>{icon.text}</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <rect width="24" height="24" rx="5" fill={icon.bg} />
      <text x="12" y={icon.text === "LaTeX" ? "15.5" : "16"} textAnchor="middle" fontFamily={icon.fontFamily || "Arial"} fontSize={icon.fontSize || "8"} fontWeight="bold" fill={icon.textColor}>{icon.text}</text>
    </svg>
  );
}
