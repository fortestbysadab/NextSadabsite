import type { Config } from "tailwindcss";

/**
 * "Botanical / Organic Serif" design system.
 * Single source of truth for colors, type, radius, shadows.
 *
 * A digital ode to nature: warm alabaster canvas, deep-forest text,
 * sage & clay accents, terracotta interactions. Organic rounded shapes,
 * serif headlines (Playfair Display) + humanist body (Source Sans 3),
 * soft diffused shadows, generous whitespace.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ── Botanical palette ──
        alabaster: "#F9F8F4", // warm background
        forest: "#2D3A31", // deep forest green — primary text/foreground
        sage: "#8C9A84", // primary/accent — buttons, highlights, icons
        clay: "#DCCFC2", // secondary/muted — card & secondary bg
        "clay-soft": "#F2F0EB", // lighter clay — soft card fills / inputs
        stone: "#E6E2DA", // borders — subtle, low contrast
        terracotta: "#C27B66", // interactive — hover states, CTA pops

        // Supporting tones (derived, for text hierarchy & states)
        "forest-soft": "#4A5850", // secondary body text (AA 7.05)
        "forest-mute": "#68766D", // muted / captions (AA 4.55)
        "sage-deep": "#5F6D57", // darker sage for links/hover (AA 5.18)
        "terracotta-deep": "#A9634F", // pressed terracotta

        // Semantic (kept muted, botanical-friendly)
        success: "#6E8B6E",
        "success-soft": "#E3EBE1",
        error: "#B4544A",
        "error-soft": "#F3DED9",
        "error-deep": "#8F3D35",

        // ── Aliases so existing class names keep working ──
        primary: "#2D3A31", // was ink — now forest (buttons)
        "on-primary": "#F9F8F4",
        ink: "#2D3A31",
        body: "#4A5850",
        mute: "#77857B",
        hairline: "#E6E2DA",
        "hairline-strong": "#C7C1B6",
        canvas: "#FFFFFF",
        "canvas-soft": "#F9F8F4",
        "canvas-soft-2": "#F2F0EB",
        link: "#6E7C66", // sage-deep — inline links
        "link-deep": "#C27B66", // terracotta on hover
        "link-bg-soft": "#E3EBE1",
        warning: "#C9A24B",
        "warning-soft": "#F3EAD2",
        "warning-deep": "#8A6C25",
      },
      fontFamily: {
        // Playfair Display (serif headlines) + Source Sans 3 (body)
        serif: ["var(--font-playfair)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        // keep `mono` mapped to sans so any stray usage doesn't break
        mono: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Legacy tokens remapped to the botanical scale (serif-friendly)
        "display-xl": ["60px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["44px", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "600" }],
        "display-md": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-sm": ["24px", { lineHeight: "1.3", letterSpacing: "-0.005em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.7", letterSpacing: "0px" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0px" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0px" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        code: ["14px", { lineHeight: "1.6", letterSpacing: "0px" }],
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "96px",
        "6xl": "128px",
        section: "192px",
      },
      borderRadius: {
        none: "0px",
        xs: "6px",
        sm: "10px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "24px", // Tailwind's rounded-3xl == 24px, keep semantic
        arch: "9999px",
        "pill-sm": "9999px",
        pill: "9999px",
        full: "9999px",
      },
      maxWidth: {
        page: "80rem", // max-w-7xl
        content: "768px",
        prose: "68ch",
      },
      boxShadow: {
        // Soft, diffused only — forest-tinted, never harsh.
        soft: "0 4px 6px -1px rgba(45, 58, 49, 0.05)",
        medium: "0 10px 15px -3px rgba(45, 58, 49, 0.05)",
        large: "0 20px 40px -10px rgba(45, 58, 49, 0.05)",
        xl: "0 25px 50px -12px rgba(45, 58, 49, 0.15)",
        // Legacy aliases → mapped to the soft ladder
        "level-1": "0 4px 6px -1px rgba(45, 58, 49, 0.05)",
        "level-2": "0 4px 6px -1px rgba(45, 58, 49, 0.05)",
        "level-3": "0 10px 15px -3px rgba(45, 58, 49, 0.05)",
        "level-4": "0 20px 40px -10px rgba(45, 58, 49, 0.05)",
        "level-5": "0 25px 50px -12px rgba(45, 58, 49, 0.15)",
      },
      transitionTimingFunction: {
        organic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
