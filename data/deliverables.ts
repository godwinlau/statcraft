export interface Deliverable {
  step: number;
  filename: string;
  title: string;
  description: string;
  content: {
    type: "highlight" | "table" | "code";
    data: string[][] | string;
  };
}

export const deliverables: Deliverable[] = [
  {
    step: 1,
    filename: "cleaned_data.xlsx",
    title: "Cleaned Dataset",
    description:
      "Your raw data, transformed: duplicates removed, missing values handled, variables coded and labeled correctly.",
    content: {
      type: "highlight",
      data: "247 \u2192 224 valid responses\n23 incompletes flagged & removed\nAll Likert scales reverse-coded\nReady for SPSS / R import",
    },
  },
  {
    step: 2,
    filename: "reliability_report.docx",
    title: "Reliability Analysis",
    description:
      "Cronbach\u2019s alpha for every scale, item-total correlations, and a plain-English interpretation.",
    content: {
      type: "table",
      data: [
        ["Scale", "Items", "\u03B1", "Verdict"],
        ["Brand Trust", "8", ".891", "Excellent"],
        ["Perceived Quality", "6", ".847", "Good"],
        ["Purchase Intent", "5", ".823", "Good"],
      ],
    },
  },
  {
    step: 3,
    filename: "Chapter4_Tables.docx",
    title: "APA-Formatted Tables",
    description:
      "Publication-ready tables \u2014 paste directly into your Chapter 4. No reformatting needed.",
    content: {
      type: "table",
      data: [
        ["Predictor", "\u03B2", "SE", "t", "p"],
        ["Brand Trust", ".412", ".067", "6.15", "<.001***"],
        ["Perceived Q.", ".287", ".072", "3.99", "<.001***"],
        ["Price Sens.", "-.134", ".059", "-2.27", ".024*"],
      ],
    },
  },
  {
    step: 4,
    filename: "Chapter4_Results.docx",
    title: "Written Interpretation",
    description:
      "Not just tables \u2014 complete written results section your panel can follow.",
    content: {
      type: "highlight",
      data: '\u201CThe regression model explained 48.3% of variance in purchase intention (R\u00B2 = .483, F(3, 243) = 75.82, p < .001). Brand trust was the strongest predictor (\u03B2 = .412, p < .001), suggesting that...\u201D',
    },
  },
  {
    step: 5,
    filename: "analysis_output.R",
    title: "Full Analysis Output",
    description:
      "Raw SPSS/R output included so your panel can verify everything independently.",
    content: {
      type: "code",
      data: '# Multiple regression\nmodel <- lm(purchase_intent ~ \n  brand_trust + perc_quality +\n  price_sens, data=df)\nsummary(model)\n# R\u00B2 = 0.483, p < .001',
    },
  },
  {
    step: 6,
    filename: "defense_notes.pdf",
    title: "Defense Prep Guide",
    description:
      "A walkthrough of your results: what to say, what the numbers mean, and how to handle tough panel questions.",
    content: {
      type: "highlight",
      data: 'Panel might ask: \u201CWhy regression and not correlation?\u201D\n\nYour answer: \u201CCorrelation shows association, but regression lets us predict purchase intent from multiple factors simultaneously while controlling for each...\u201D',
    },
  },
];
