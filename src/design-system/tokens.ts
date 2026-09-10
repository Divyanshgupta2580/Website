/**
 * GG Construction Co. Design System Tokens
 * Architectural, restrained, editorial, dark visual identity.
 */

export const colors = {
  background: {
    primary: "#0B0D0F",     // Deep Charcoal Black
    surface: "#15191D",     // Elevated Architectural Surface
    concrete: "#1D2227",    // Dark Concrete / Subtle Section Fill
    hover: "#22282E",       // Hover Surface
  },
  text: {
    primary: "#F3F1EC",     // Warm High-Contrast Off-White
    secondary: "#A7ADB3",   // Muted Technical Slate
    muted: "#667582",       // Low-Contrast Metadata / Timestamps
    accent: "#B89A63",      // Architectural Bronze
  },
  border: {
    subtle: "#2A3035",      // 1px Monolithic Grid Lines
    strong: "#3F474E",      // Focus & Card Hover Borders
    accent: "#B89A63",      // Bronze Highlight Border
  },
  accent: {
    primary: "#B89A63",     // Architectural Bronze / Gold
    hover: "#D0B47A",       // Luminous Bronze Hover
    technical: "#667582",   // Steel / Engineering Accent
    subtleBg: "rgba(184, 154, 99, 0.08)",
    borderBg: "rgba(184, 154, 99, 0.25)",
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'var(--font-display), var(--font-sans), sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  sizes: {
    hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08]",
    h1: "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-snug",
    h3: "text-xl sm:text-2xl font-normal tracking-normal",
    h4: "text-lg font-medium tracking-normal",
    bodyLarge: "text-base sm:text-lg leading-relaxed text-[#A7ADB3]",
    body: "text-sm sm:text-base leading-relaxed text-[#A7ADB3]",
    bodySmall: "text-xs sm:text-sm leading-relaxed text-[#A7ADB3]",
    eyebrow: "text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B89A63]",
    caption: "text-[10px] font-mono uppercase tracking-wider text-[#667582]",
  },
} as const;

export const spacing = {
  section: "py-20 md:py-28",
  sectionCompact: "py-16 md:py-20",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  containerNarrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
} as const;

export const radius = {
  none: "rounded-none",
  minimal: "rounded-sm", // Max 2px for subtle corner softening
} as const;

export const shadows = {
  card: "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.6)]",
  elevated: "shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8)]",
  glowBronze: "shadow-[0_0_24px_rgba(184,154,99,0.15)]",
} as const;

export const transitions = {
  default: "transition-all duration-200 ease-out",
  smooth: "transition-all duration-300 ease-in-out",
  slow: "transition-all duration-500 ease-out",
} as const;
