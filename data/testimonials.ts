export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    initials: "MA",
    name: "Maria A.",
    role: "MBA Marketing Research \u00B7 UST",
    text: "\u201CStuck on Chapter 4 for three months. StatCraft delivered a complete analysis with 6 APA tables in five days. My adviser at UST approved it on the first submission \u2014 no revisions.\u201D",
  },
  {
    initials: "JR",
    name: "James R.",
    role: "BS Psychology \u00B7 CMU",
    text: "\u201CWhat surprised me was they didn\u2019t just send SPSS output \u2014 they walked me through every result on Google Meet so I actually understood what to say during defense. Zero panel questions I couldn\u2019t answer.\u201D",
  },
  {
    initials: "DM",
    name: "Daniel M.",
    role: "BS Civil Engineering \u00B7 DLSU",
    text: "\u201CI was failing calculus. After 6 tutoring sessions, I went from a 1.75 to top 10 in class. Jullana explains things the way I wish my professor did.\u201D",
  },
];
