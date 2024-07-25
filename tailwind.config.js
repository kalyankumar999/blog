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
    },
  },
  plugins: [],
};
