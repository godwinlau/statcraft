export interface Tool {
  name: string;
  subtitle: string;
  icon: {
    type: "rect" | "circle";
    bg: string;
    text: string;
    textColor: string;
    fontSize?: string;
    fontFamily?: string;
  };
}

export const tools: Tool[] = [
  {
    name: "SPSS",
    subtitle: "Industry standard",
    icon: { type: "rect", bg: "#c00", text: "SPSS", textColor: "#fff", fontSize: "8" },
  },
  {
    name: "R",
    subtitle: "Statistical computing",
    icon: { type: "circle", bg: "#2166b8", text: "R", textColor: "#fff", fontSize: "15", fontFamily: "serif" },
  },
  {
    name: "Python",
    subtitle: "Data science",
    icon: { type: "rect", bg: "#3776ab", text: "Py", textColor: "#FFD43B", fontSize: "8" },
  },
  {
    name: "Excel",
    subtitle: "Advanced analysis",
    icon: { type: "rect", bg: "#1d6f42", text: "X", textColor: "#fff", fontSize: "13" },
  },
  {
    name: "LaTeX",
    subtitle: "Typesetting",
    icon: { type: "rect", bg: "#008080", text: "LaTeX", textColor: "#fff", fontSize: "9", fontFamily: "Georgia, serif" },
  },
  {
    name: "Jamovi",
    subtitle: "Open-source",
    icon: { type: "circle", bg: "#6c5ce7", text: "j", textColor: "#fff", fontSize: "10" },
  },
  {
    name: "AMOS",
    subtitle: "SEM modeling",
    icon: { type: "rect", bg: "#0f4c81", text: "AMOS", textColor: "#fff", fontSize: "7" },
  },
];
