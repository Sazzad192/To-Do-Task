/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-50": "#F0FDFA",
        "primary-100": "#CCFBF1",
        "primary-200": "#99F6E4",
        "primary-300": "#5EEAD4",
        "primary-400": "#2DD4BF",
        "primary-500": "#0D9488",
        "primary-600": "#0F766E",
        "primary-700": "#115E59",
        "primary-800": "#134E4A",
        "primary-900": "#042F2E",
        "primary-bg": "#CCFBF1",
        "main-bg": "#F7FDFC",
        "gray-bg": "#FDFDFD",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};