import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "pAboutShadow": "17px 0px 50px 10px rgba(66, 68, 90, 1)",
        "imgAboutShadow": "-20px 0px 50px 7px rgba(66, 68, 90, 1)",
        "divContactShadow": "inset 0px 0px 50px -8px rgba(66, 68, 90, 1)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
