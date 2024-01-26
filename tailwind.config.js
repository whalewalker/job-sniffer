/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      dmsans: ["var(--font-dmSans"],
      nunito: ["var(--font-nunito)"],
      inter: ["var(--font-inter)"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(1fr, 40rem))",
      },
      colors: {
        "color-curentColor": "currentColor",
        "color-transparent": "transparent",
        "color-white": "rgba(255, 255, 255, 1)",
        "color-red": "red",
        "color-grey": {
          1: "#BDBDBD",
        },
        "color-black": {
          1: "rgba(20, 20, 20, 1)",
        },
      },
    },
  },
  plugins: [],
};
