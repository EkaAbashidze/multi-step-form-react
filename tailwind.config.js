/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "sky-blue": "#BEE2FD",
        denim: "#022959",
        grey: "#9699AA",
        bg: "#EFF5FF",
      },
      backgroundImage: {
        // "bg-mobile": "url('../public/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
