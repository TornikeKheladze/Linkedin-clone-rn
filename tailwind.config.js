/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "*.{jsx,tsx}", "src/**/*{jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0a66c2",
        customBlack: "#000000e6",
      },
    },
  },
  plugins: [],
};
