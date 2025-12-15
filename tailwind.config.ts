import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#222222",
        primary: "#FF385C",
        secondary: "#00A699",
        gray: {
          50: "#F7F7F7",
          100: "#EBEBEB",
          200: "#DDDDDD",
          300: "#B0B0B0",
          400: "#717171",
          500: "#484848",
        },
      },
      spacing: {
        section: "5rem",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;


