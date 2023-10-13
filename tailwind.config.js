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
      boxShadow: {
        custom: "0px 25px 40px -20px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        // "bg-mobile": "url('../public/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
