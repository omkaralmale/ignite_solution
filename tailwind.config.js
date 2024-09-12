/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 2px 5px 0 rgba(211, 209, 238, 0.5)",
      },
      fontFamily: {
        montserrat: ["Montserrat-Regular", "sans-serif"],
        typeWriter: ['"Special Elite"'],
      },
    },
  },
  plugins: [lineClamp],
};
