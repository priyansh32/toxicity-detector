/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
      height: {
        "9/10-screen": "calc(100vh - 196px)",
      },
      minHeight: {
        "9/10-screen": "calc(100vh - 196px)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
