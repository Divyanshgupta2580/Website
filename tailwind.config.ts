import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D0F",
        surface: {
          DEFAULT: "#15191D",
          secondary: "#15191D",
          concrete: "#1D2227",
          hover: "#22282E",
        },
        primary: {
          DEFAULT: "#F3F1EC",
          muted: "#A7ADB3",
        },
        border: {
          DEFAULT: "#2A3035",
          subtle: "#2A3035",
          strong: "#3F474E",
        },
        accent: {
          bronze: "#B89A63",
          hover: "#D0B47A",
          tech: "#667582",
          subtle: "rgba(184, 154, 99, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
