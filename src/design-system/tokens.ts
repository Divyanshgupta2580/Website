/**
 * GG Construction Co. Design System Tokens
 * Practical, solid, trustworthy, local construction company identity.
 */

export const colors = {
  background: {
    primary: "#F4F2EE",     // Primary Background (Light warm neutral)
    white: "#FFFFFF",        // White Surface
    surface: "#FFFFFF",      // Surface cards & containers
    secondary: "#E8E6E1",    // Secondary Surface
    navy: "#18324A",         // Deep Navy Accent / Strong Surface
  },
  text: {
    primary: "#20272D",     // Primary High-Contrast Charcoal
    navy: "#18324A",        // Deep Navy Headings
    muted: "#66717A",       // Muted Technical / Descriptive Text
    accent: "#D96B27",      // Construction Orange
    inverse: "#FFFFFF",     // White text on dark/orange surfaces
  },
  border: {
    subtle: "#D5D4D0",      // Primary Border
    strong: "#18324A",      // Strong Navy Border
    accent: "#D96B27",      // Construction Orange Border
  },
  accent: {
    orange: "#D96B27",      // Construction Orange (CTAs, key highlights)
    orangeHover: "#B9551D", // Orange Hover
    orangeSoft: "#F3D8C7",  // Soft Orange / Highlight Badges
    navy: "#18324A",        // Deep Navy
    steel: "#66717A",       // Gray / Steel Accent
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-manrope), "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'var(--font-manrope), "Manrope", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  sizes: {
    hero: "text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12]",
    h1: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug",
    h3: "text-xl sm:text-2xl font-semibold tracking-normal",
    h4: "text-lg font-semibold tracking-normal",
    bodyLarge: "text-base sm:text-lg leading-relaxed text-[#66717A]",
    body: "text-sm sm:text-base leading-relaxed text-[#20272D]",
    bodySmall: "text-xs sm:text-sm leading-relaxed text-[#66717A]",
    eyebrow: "text-xs font-bold uppercase tracking-[0.2em] text-[#D96B27]",
    caption: "text-xs font-mono uppercase tracking-wider text-[#66717A]",
  },
} as const;

export const spacing = {
  section: "py-16 md:py-24",
  sectionCompact: "py-12 md:py-16",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  containerNarrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
} as const;

export const radius = {
  none: "rounded-none",
  xs: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-sm",
  lg: "rounded-sm",
  xl: "rounded-none",
  mac: "rounded-none",
  macLg: "rounded-none",
  macSm: "rounded-none",
  macXs: "rounded-none",
} as const;

export const shadows = {
  subtle: "shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]",
  card: "shadow-[0_2px_8px_rgba(32,39,45,0.06)]",
  elevated: "shadow-[0_8px_24px_rgba(24,50,74,0.08)]",
} as const;

export const transitions = {
  default: "transition-all duration-200 ease-out",
  smooth: "transition-all duration-300 ease-in-out",
} as const;
