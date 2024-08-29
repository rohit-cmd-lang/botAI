/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: "#D7C7F4",
      purpleLight: "#F5F0FF",
      purpleFeedback: "#FAF7FF",
      purpleText: "#9785BA",
      customGray: "#414146",
    },
  },
  plugins: [],
};
