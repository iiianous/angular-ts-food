/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        1024: "64rem",
        1200: "75rem",
        1280: "80rem",
        1536: "96rem",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.ts"],
};
