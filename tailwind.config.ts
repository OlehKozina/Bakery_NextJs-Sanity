import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontWeight: {
      extrabold: "900",
      bold: "600",
      medium: "500",
      thin: "400",
    },
    colors: {
      "brand-color": "#819b57",
      "light-color": "#faf4ea",
      "color-primarydark": "#31261a",
      "custom-white": "#ffffff",
      "custom-black": "#0000",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "605": "605px",
      },
      boxShadow: {
        custom: "-16px 16px 0px 0px #faf4ea, -16px 16px 0px 2px black",
      },
    },
  },
  plugins: [],
};
export default config;
