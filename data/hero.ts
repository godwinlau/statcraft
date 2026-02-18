export type HeroContent = {
  headline: { before: string; emphasis: string };
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badges: string[];
};

export const heroContent: Record<"thesis" | "tutoring", HeroContent> = {
  thesis: {
    headline: {
      before: "Raw data to",
      emphasis: "defended thesis.",
    },
    description:
      "Statistical analysis, data cleaning, and Chapter 4 write-up — from messy spreadsheets to panel-ready results.",
    primaryCta: { label: "Send your data →", href: "#contact" },
    secondaryCta: { label: "Message on Messenger", href: "https://m.me/statcraft" },
    badges: ["DOST-SEI Scholar", "Published researcher", "100% on-time delivery"],
  },
  tutoring: {
    headline: {
      before: "Math finally",
      emphasis: "makes sense.",
    },
    description:
      "Algebra, calculus, and statistics tutoring tailored to your syllabus — we meet you where you are.",
    primaryCta: { label: "Book a session", href: "#contact" },
    secondaryCta: { label: "Message on Messenger", href: "https://m.me/statcraft" },
    badges: ["College & SHS levels", "Flexible scheduling", "Rated 5/5 by students"],
  },
};
