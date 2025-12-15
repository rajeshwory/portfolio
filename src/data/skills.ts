import { Skill } from "@/domain/types";

export const skills: Skill[] = [
  // Core
  { id: "react", name: "React", category: "core" },
  { id: "typescript", name: "TypeScript", category: "core" },
  { id: "javascript", name: "JavaScript (ES6+)", category: "core" },
  { id: "html", name: "HTML5", category: "core" },
  { id: "css", name: "CSS3", category: "core" },

  // Libraries & Frameworks
  { id: "nextjs", name: "Next.js", category: "library" },
  { id: "react-native", name: "React Native", category: "library" },
  { id: "vitejs", name: "Vite.js", category: "library" },
  { id: "redux", name: "Redux Toolkit", category: "library" },
  { id: "axios", name: "Axios", category: "library" },
  { id: "shadcn", name: "Shadcn UI", category: "library" },
  { id: "zustand", name: "Zustand", category: "library" },
  { id: "framer", name: "Framer Motion", category: "library" },

  // Tools & Styling
  { id: "tailwind", name: "Tailwind CSS", category: "tool" },
  { id: "git", name: "Git", category: "tool" },
  { id: "webpack", name: "Webpack", category: "tool" },
  { id: "supabase", name: "Supabase", category: "tool" },

  // Testing
  { id: "jest", name: "Jest", category: "testing" },
  { id: "rtl", name: "React Testing Library", category: "testing" },
];


