import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        grove: {
          50: "#f3f8f1",
          100: "#dfeede",
          200: "#bfdcbc",
          300: "#95c28f",
          400: "#6aa463",
          500: "#4d8848",
          600: "#3a6d37",
          700: "#30562f",
          800: "#294628",
          900: "#233b24"
        },
        pipe: "#1f4f5f",
        cream: "#fbf7ef",
        copper: "#b46b3c"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(31, 79, 95, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
