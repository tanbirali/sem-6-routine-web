import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#ff5733",
        color2: "#33ff57",
        color3: "#3357ff",
        color4: "#ff3357",
        color5: "#57ff33",
        color6: "#5733ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
