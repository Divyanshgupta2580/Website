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
        background: "#F4F2EE",
        surface: {
          DEFAULT: "#FFFFFF",
          white: "#FFFFFF",
          secondary: "#E8E6E1",
          navy: "#18324A",
          dark: "#20272D",
        },
        primary: {
          DEFAULT: "#20272D",
          navy: "#18324A",
          muted: "#66717A",
        },
        navy: {
          DEFAULT: "#18324A",
          dark: "#102232",
          light: "#234768",
        },
        orange: {
          DEFAULT: "#D96B27",
          hover: "#B9551D",
          soft: "#F3D8C7",
        },
        border: {
          DEFAULT: "#D5D4D0",
          subtle: "#D5D4D0",
          strong: "#18324A",
          orange: "#D96B27",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
