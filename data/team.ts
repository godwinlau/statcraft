export interface TeamMember {
  initials: string;
  name: string;
  title: string;
  role: string;
  location: string;
  emoji: string;
  quirk: string;
  gradient: string;
  image?: string;
  tags: { label: string; accent?: boolean }[];
}

export const team: TeamMember[] = [
  {
    initials: "JQ",
    name: "Jullana",
    title: "Statistical Analyst & Math Tutor",
    role: "Lead analyst",
    location: "Davao de Oro",
    emoji: "\u2615",
    quirk: "Runs on 3 cups of coffee per analysis. Has a theory that ANOVA sounds like a planet.",
    gradient: "linear-gradient(135deg, #E8530E, #F59E0B)",
    image: "/people/jullana.png",
    tags: [
      { label: "SPSS", accent: true },
      { label: "R", accent: true },
      { label: "Python", accent: true },
      { label: "AMOS", accent: true },
      { label: "SEM" },
      { label: "Factor Analysis" },
    ],
  },
  {
    initials: "GQ",
    name: "Godwin",
    title: "Project Manager & Client Experience",
    role: "Operations",
    location: "Philippines",
    emoji: "\uD83C\uDFAE",
    quirk: 'Plays Dota 2 between client calls. Treats project timelines like ranked matches \u2014 no throwing.',
    gradient: "linear-gradient(135deg, #1C1917, #57534E)",
    image: "/people/godwin.png",
    tags: [
      { label: "Client comms" },
      { label: "Scoping" },
      { label: "QA" },
      { label: "Delivery" },
    ],
  },
  {
    initials: "RC",
    name: "Rafael",
    title: "R & Python Specialist",
    role: "Specialist",
    location: "Cebu City",
    emoji: "\uD83E\uDDE0",
    quirk: "Has a tattoo of a normal distribution curve. Not joking. Thinks in p-values.",
    gradient: "linear-gradient(135deg, #2166b8, #60A5FA)",
    image: "/people/rafael.png",
    tags: [
      { label: "R", accent: true },
      { label: "Python", accent: true },
      { label: "SEM" },
      { label: "ML" },
      { label: "Multi-level" },
    ],
  },
  {
    initials: "AS",
    name: "Angela",
    title: "Academic Writing Specialist",
    role: "Writing",
    location: "Manila",
    emoji: "\u270D\uFE0F",
    quirk: "Gets personally offended by misplaced commas. Owns 4 copies of the APA manual.",
    gradient: "linear-gradient(135deg, #16A34A, #4ADE80)",
    image: "/people/angela.png",
    tags: [
      { label: "APA 7th" },
      { label: "Academic writing" },
      { label: "Proofreading" },
    ],
  },
  {
    initials: "MR",
    name: "Marco",
    title: "Survey Design & Data Cleaning",
    role: "Data",
    location: "Davao City",
    emoji: "\uD83E\uDDF9",
    quirk: 'Once cleaned a 12,000-row dataset in one sitting. Calls Excel "the chaos engine."',
    gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
    image: "/people/marco.png",
    tags: [
      { label: "Excel", accent: true },
      { label: "Jamovi", accent: true },
      { label: "Survey design" },
      { label: "Data cleaning" },
    ],
  },
  {
    initials: "KL",
    name: "Karen",
    title: "Math Tutor \u2014 Calculus & Algebra",
    role: "Tutor",
    location: "Cagayan de Oro",
    emoji: "\uD83E\uDD6D",
    quirk: "Explains integrals using food analogies. Once taught derivatives using a mango ripening.",
    gradient: "linear-gradient(135deg, #D97706, #FBBF24)",
    image: "/people/karen.png",
    tags: [
      { label: "Algebra" },
      { label: "Calculus" },
      { label: "Pre-calc" },
      { label: "Prob & Stats" },
    ],
  },
];
