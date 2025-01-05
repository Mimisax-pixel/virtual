/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "060047", // Add your custom color
        bluered: "3C486B",
      },
    },
  },
  plugins: [],
};
