export interface PricingTier {
  name: string;
  description: string;
  amount: string;
  per: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export const thesisPricing: PricingTier[] = [
  {
    name: "Starter",
    description: "One task or quick fix.",
    amount: "\u20B12,000",
    per: "per engagement",
    features: [
      "Single statistical test",
      "Data cleaning (1 dataset)",
      "APA output tables",
      "1 revision round",
      "5\u20137 day delivery",
    ],
    cta: "Get started \u2192",
  },
  {
    name: "Complete",
    description: "Full analysis + write-up.",
    amount: "\u20B16,000",
    per: "per engagement",
    popular: true,
    features: [
      "Full cleaning & analysis",
      "Chapter 4 + tables & figures",
      "Methodology verification",
      "3 revision rounds",
      "Support until defense",
    ],
    cta: "Get started \u2192",
  },
  {
    name: "Premium",
    description: "End-to-end + defense prep.",
    amount: "\u20B112,000",
    per: "per engagement",
    features: [
      "Everything in Complete",
      "Research design consulting",
      "1-on-1 defense walkthrough",
      "Unlimited revisions",
      "Priority 3-day turnaround",
    ],
    cta: "Get started \u2192",
  },
];

export const pilotPricing: PricingTier[] = [
  {
    name: "1\u20132 Scales",
    description: "Single or dual construct.",
    amount: "\u20B1500",
    per: "per scale",
    features: [
      "Reliability (Cronbach\u2019s \u03B1)",
      "Item-total correlation",
      "Interpretation report",
    ],
    cta: "Get started \u2192",
  },
  {
    name: "3\u20134 Scales",
    description: "Standard IV/DV/mediator.",
    amount: "\u20B1450",
    per: "per scale",
    popular: true,
    features: [
      "Everything in 1\u20132 Scales",
      "Exploratory factor analysis",
      "Construct validity check",
    ],
    cta: "Get started \u2192",
  },
  {
    name: "5+ Scales",
    description: "Complex multi-factorial.",
    amount: "\u20B1400",
    per: "per scale",
    features: [
      "Everything in 3\u20134 Scales",
      "Confirmatory factor analysis",
      "Unlimited revisions",
    ],
    cta: "Get started \u2192",
  },
];

export const tutorPricing: PricingTier[] = [
  {
    name: "Single Session",
    description: "Targeted help.",
    amount: "\u20B1350",
    per: "per hour",
    features: [
      "Algebra, Calculus, or Stats",
      "1-on-1 via Google Meet",
      "Custom lesson plan",
    ],
    cta: "Book a session \u2192",
  },
  {
    name: "Monthly",
    description: "4 sessions/month.",
    amount: "\u20B11,200",
    per: "per month",
    popular: true,
    features: [
      "Save \u20B1200 vs individual",
      "Progress tracking",
      "Messenger support",
    ],
    cta: "Get started \u2192",
  },
  {
    name: "Defense Coach",
    description: "Understand your data.",
    amount: "\u20B1500",
    per: "per hour",
    features: [
      "Walk through your results",
      "Anticipate panel questions",
      "Methodology deep-dive",
    ],
    cta: "Book coaching \u2192",
  },
];
