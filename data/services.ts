export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  price: string;
}

export const researchServices: ServiceCard[] = [
  {
    icon: "compass",
    title: "Data Cleaning",
    description: "Raw \u2192 analysis-ready. Missing values, duplicates, formatting \u2014 fixed.",
    price: "From \u20B11,500",
  },
  {
    icon: "chart",
    title: "Statistical Analysis",
    description: "Regression, ANOVA, chi-square \u2014 the right test, correctly applied.",
    price: "From \u20B13,000",
  },
  {
    icon: "table",
    title: "Chapter 4 Write-Up",
    description: "Complete results & discussion with APA tables and figures.",
    price: "From \u20B15,000",
  },
  {
    icon: "clock",
    title: "Pilot Study Validation",
    description: "Scale validation, reliability testing, construct analysis.",
    price: "From \u20B1500/scale",
  },
  {
    icon: "house",
    title: "Methodology Review",
    description: "Audit your research design before it faces the panel.",
    price: "From \u20B12,000",
  },
  {
    icon: "star",
    title: "Full Thesis Package",
    description: "End-to-end: design \u2192 clean \u2192 analyze \u2192 write \u2192 defend.",
    price: "From \u20B18,000",
  },
];

export const tutoringServices: ServiceCard[] = [
  {
    icon: "plus",
    title: "Algebra & Pre-Calc",
    description: "Equations, functions, polynomials, trig.",
    price: "\u20B1300/hr",
  },
  {
    icon: "wave",
    title: "Calculus",
    description: "Limits, derivatives, integrals. Concepts, not formulas.",
    price: "\u20B1350/hr",
  },
  {
    icon: "bars",
    title: "Statistics",
    description: "Distributions, hypothesis testing, regression.",
    price: "\u20B1350/hr",
  },
  {
    icon: "columns",
    title: "Defense Coaching",
    description: "Walk through results, face the panel confidently.",
    price: "\u20B1500/hr",
  },
  {
    icon: "circle-plus",
    title: "Monthly Package",
    description: "4 sessions/month. Best for ongoing support.",
    price: "\u20B11,200/mo",
  },
];
