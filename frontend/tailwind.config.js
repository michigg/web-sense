/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "var(--color-primary)",
        inactive: "hsl(7, 40%, 72%)",
      },
      surface1: {
        DEFAULT: "var(--color-surface-1)",
        inactive: "hsl(7, 40%, 72%)",
      },
      surface2: {
        DEFAULT: "var(--color-surface-2)",
        inactive: "hsl(7, 40%, 72%)",
      },
      secondary: {
        DEFAULT: "#989898",
      },
      success: {
        DEFAULT: "var(--color-success)",
      },
      danger: {
        DEFAULT: "var(--color-danger)",
      },
      background: {
        from: "rgba(255, 202, 139, 1)",
        to: "rgba(255, 169, 169, 1)",
      },
      cardBackground: {
        DEFAULT: "rgba(255, 255, 255, .6)",
      },
    },
    extend: {},
  },
  plugins: [],
};
