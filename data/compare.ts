export interface CompareRow {
  feature: string;
  diy: string;
  fbFreelancer: string;
  otherLabs: string;
  statcraft: string;
}

export const compareHeaders = ["", "DIY", "FB Freelancer", "Other Labs", "StatCraft"];

export const compareRows: CompareRow[] = [
  {
    feature: "Qualified analyst",
    diy: "\u2715",
    fbFreelancer: "Varies",
    otherLabs: "Varies",
    statcraft: "\u2713",
  },
  {
    feature: "Full interpretation",
    diy: "\u2715",
    fbFreelancer: "\u2715",
    otherLabs: "Rarely",
    statcraft: "\u2713",
  },
  {
    feature: "APA write-up",
    diy: "\u2715",
    fbFreelancer: "\u2715",
    otherLabs: "Extra \u20B1",
    statcraft: "\u2713 Included",
  },
  {
    feature: "Transparent pricing",
    diy: "Free",
    fbFreelancer: "\u201CDM for price\u201D",
    otherLabs: "Hidden",
    statcraft: "\u2713 Public",
  },
  {
    feature: "Defense coaching",
    diy: "\u2715",
    fbFreelancer: "\u2715",
    otherLabs: "\u2715",
    statcraft: "\u2713",
  },
  {
    feature: "Refund guarantee",
    diy: "\u2715",
    fbFreelancer: "\u2715",
    otherLabs: "Limited",
    statcraft: "\u2713 Full",
  },
];
