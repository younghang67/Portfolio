import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-accent": "#4f46e5",
        "color-hovered": "#5c55e2",
        "color-heading": "#1c1c1c",
        "color-dark-text": "#222222",
        "color-light-text": "#efe7e7",
        "color-highlight-text": "#515151",
      },
      fontSize: {
        "heading": "3.125rem",
        "subHeading": "1.4375rem",
        "normal": "1.125rem",
        "xs": "0.9375rem",
      },
    },
  },
  plugins: [],
};
export default config;
