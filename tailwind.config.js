/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          200: "#D8FEFF",
          500: "#00B1C8",
          600: "#0A7988",
          700: " #26828E",
        },
        secondary: {
          100: "#CECECE",
          500: "#FF7F00",
        },
        primarytext: {
          200: "#ABABAB",
          300: "#979797",
          400: "#666666",
          500: "#494949",
          600: "#535353",
          700: "#343434",
        },
        gradients: {
          morningSun1: "#FFFF66",
          morningSun2: "#FF8A65",
          morningSun3: "#FFD54F",
          morningSun4: "#64B5F6",
        },
      },

      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        oswald: ["var(--font-oswald)"],
        montecarlo: ["var(--font-monteCarlo)"],
      },
      animation: {
        "slide-up-fade-in": "slideInUp 0.8s ease-out",
        "slide-up-fade-in-delay": "slideInUp 0.8s ease-out 0.2s backwards",
        "slide-up-web": "slideInUp 0.8s ease-out 0.4s backwards",
        "fade-in-scale": "fadeInScale 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        slideInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          "0%, 100%": {
            "box-shadow": "0 0 20px rgba(138, 43, 226, 0.5)",
          },
          "50%": {
            "box-shadow": "0 0 40px rgba(138, 43, 226, 0.8)",
          },
        },
      },
    },
  },
  plugins: [],
};
