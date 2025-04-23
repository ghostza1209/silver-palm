import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "rgb(33,37,41)",
        },
      },
      animation: {
        "border-flow": "border-flow 4s ease infinite",
        "border-light": "border-light 8s linear infinite",
        "border-light-reverse": "border-light-reverse 12s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "ping-once": "ping-once 0.8s ease-out",
        "subtle-pulse": "subtle-pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "blueprint-scan": "blueprint-scan 3s ease-in-out infinite",
        "luxury-fade-in": "luxury-fade-in 0.8s ease-out",
        "key-turn": "key-turn 1s ease-out",
      },
      keyframes: {
        "border-flow": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
        "border-light": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "25%": {
            backgroundPosition: "100% 0%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "75%": {
            backgroundPosition: "0% 100%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
        "border-light-reverse": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "25%": {
            backgroundPosition: "0% 100%",
          },
          "50%": {
            backgroundPosition: "100% 100%",
          },
          "75%": {
            backgroundPosition: "100% 0%",
          },
          "100%": {
            backgroundPosition: "0% 0%",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "ping-once": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
          "70%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        "subtle-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(251, 191, 36, 0)",
          },
          "50%": {
            boxShadow: "0 0 0 4px rgba(251, 191, 36, 0.2)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "blueprint-scan": {
          "0%": {
            backgroundPosition: "0% 0%",
            opacity: "0.1",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            backgroundPosition: "100% 100%",
            opacity: "0.1",
          },
        },
        "luxury-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "key-turn": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "20%, 80%": {
            transform: "rotate(90deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
