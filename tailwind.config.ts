import type { Config } from "tailwindcss";

/**
 * Vercel-inspired design system tokens.
 * Single source of truth for colors, type scale, radius, spacing, shadows.
 */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        "on-primary": "#ffffff",
        ink: "#171717",
        body: "#4d4d4d",
        mute: "#888888",
        hairline: "#ebebeb",
        "hairline-strong": "#a1a1a1",
        canvas: "#ffffff",
        "canvas-soft": "#fafafa",
        "canvas-soft-2": "#f5f5f5",
        link: "#0070f3",
        "link-deep": "#0761d1",
        "link-bg-soft": "#d3e5ff",
        success: "#0070f3",
        error: "#ee0000",
        "error-soft": "#f7d4d6",
        "error-deep": "#c50000",
        warning: "#f5a623",
        "warning-soft": "#ffefcf",
        "warning-deep": "#ab570a",
        violet: "#7928ca",
        "violet-soft": "#d8ccf1",
        "violet-deep": "#4c2889",
        cyan: "#50e3c2",
        "cyan-soft": "#aaffec",
        "cyan-deep": "#29bc9b",
        "highlight-pink": "#ff0080",
        "highlight-magenta": "#eb367f",
        // ── "Curator's Journal" editorial palette ──
        bone: "#f9f9f9",
        "bone-2": "#f3f3f3",
        "bone-3": "#eeeeee",
        "ink-soft": "#444748",
        "ink-mute": "#747878",
        "rule": "#e5e5e5",
        "rule-strong": "#c4c7c7",
        electric: "#0058be",
        "electric-bright": "#2170e4",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "monospace"],
        // Editorial serif for "Curator's Journal" headlines (system stack — no download).
        serif: [
          "EB Garamond",
          "Hoefler Text",
          "Iowan Old Style",
          "Apple Garamond",
          "Baskerville",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing, fontWeight }]
        "display-xl": ["48px", { lineHeight: "48px", letterSpacing: "-2.4px", fontWeight: "600" }],
        "display-lg": ["32px", { lineHeight: "40px", letterSpacing: "-1.28px", fontWeight: "600" }],
        "display-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.96px", fontWeight: "600" }],
        "display-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.6px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0px" }],
        "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
        "body-sm": ["14px", { lineHeight: "20px", letterSpacing: "-0.28px" }],
        caption: ["12px", { lineHeight: "16px", letterSpacing: "0px" }],
        code: ["13px", { lineHeight: "20px", letterSpacing: "0px" }],
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
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "pill-sm": "64px",
        pill: "100px",
        full: "9999px",
      },
      maxWidth: {
        page: "1400px",
        content: "768px",
        prose: "65ch",
      },
      boxShadow: {
        // Stacked-shadow elevation ladder
        "level-1": "0 0 0 1px #00000014",
        "level-2": "0px 0px 0px 1px #00000014, 0px 1px 1px #00000005, 0px 2px 2px #0000000a",
        "level-3": "0px 0px 0px 1px #00000014, 0px 2px 2px #0000000a, 0px 8px 8px -8px #0000000a",
        "level-4": "0px 0px 0px 1px #00000014, 0px 2px 2px #0000000a, 0px 8px 16px -4px #0000000a",
        "level-5":
          "0px 0px 0px 1px #00000014, 0px 1px 1px #00000005, 0px 8px 16px -4px #0000000a, 0px 24px 32px -8px #0000000f",
      },
    },
  },
  plugins: [],
};

export default config;
