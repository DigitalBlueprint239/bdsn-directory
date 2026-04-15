import type { Config } from "tailwindcss";

const config: Config = {
    content: [
          "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
    theme: {
          extend: {
                  colors: {
                            brand: {
                                        navy: "#0A1628",
                                        gold: "#D4A843",
                                        blue: "#1E3A5F",
                                        light: "#F0F4F8",
                                        accent: "#FF6B35",
                            },
                  },
                  fontFamily: {
                            heading: ["var(--font-heading)", "sans-serif"],
                            body: ["var(--font-body)", "sans-serif"],
                  },
          },
    },
    plugins: [],
};

export default config;
