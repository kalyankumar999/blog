/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0A0A0A",
          soft: "#121212",
          card: "#161616",
        },
        line: "#262626",
        gray: {
          400: "#A3A3A3",
          500: "#8A8A8A",
          600: "#6B6B6B",
        },
        orange: {
          DEFAULT: "#FF6A00",
          light: "#FF8C42",
          dim: "#7A3410",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(14px) translateX(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,106,0,0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgba(255,106,0,0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "pulse-dot": "pulseDot 2s infinite",
      },
    },
  },
  plugins: [],
};
