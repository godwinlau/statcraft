import { type ReactNode } from "react";

type Variant = "orange" | "dark" | "outline" | "ghost" | "white";

const variantStyles: Record<Variant, string> = {
  orange:
    "bg-gradient-to-b from-[#FF6A33] to-[#FF4400] text-white border-[1.5px] border-o hover:from-[#FF5722] hover:to-[#E63E00] hover:-translate-y-0.5 hover:shadow-orange",
  white:
    "bg-white text-d border-[1.5px] border-d10 hover:border-d20 hover:-translate-y-0.5 hover:shadow-subtle",
  dark:
    "bg-d text-white border-[1.5px] border-d hover:bg-d80 hover:-translate-y-0.5",
  outline:
    "bg-transparent text-d border-[1.5px] border-d20 hover:border-d hover:-translate-y-0.5",
  ghost:
    "bg-white/[.08] text-white border-[1.5px] border-white/15 hover:bg-white/[.12]",
};

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Button({
  variant = "orange",
  href,
  children,
  className = "",
  type,
  onClick,
  style,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-[30px] py-[14px] rounded-btn font-sans text-base font-semibold cursor-pointer transition-all duration-200 no-underline";

  if (href) {
    return (
      <a href={href} className={`${base} ${variantStyles[variant]} ${className}`} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${base} ${variantStyles[variant]} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
