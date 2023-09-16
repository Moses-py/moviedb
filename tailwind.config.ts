import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        24: "24px",
      },
      colors: {
        primary: "#BE123C",
      },
      screens: {
        xs: "365px",
      },
    },
  },
  plugins: [],
};
export default config;
