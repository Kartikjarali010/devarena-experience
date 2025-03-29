
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        marvel: {
          red: "#ED1D24",
          blue: "#0476F2",
          dark: "#15151E",
          gray: "#2D2D38",
          gold: "#F0C000",
          purple: "#9C27B0",  // Mind Stone / Thanos
          green: "#4CAF50",   // Time Stone
          orange: "#FF9800",  // Soul Stone
          cosmic: "#3D1D4E",  // Cosmic energy
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 10px rgba(237, 29, 36, 0.7), 0 0 20px rgba(4, 118, 242, 0.5)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 15px rgba(237, 29, 36, 0.9), 0 0 30px rgba(4, 118, 242, 0.7)",
            transform: "scale(1.01)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "hero-pulse": {
          "0%, 100%": { 
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": { 
            opacity: "0.5",
            transform: "scale(1.05)"
          },
        },
        "shield-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "reality-shift": {
          "0%, 100%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(15deg)" },
        },
        "portal-open": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "portal-glow": {
          "0%, 100%": { boxShadow: "0 0 15px currentColor" },
          "50%": { boxShadow: "0 0 30px currentColor, 0 0 50px currentColor" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "pulse-glow": "pulse-glow 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "hero-pulse": "hero-pulse 2s ease-in-out infinite",
        "shield-spin": "shield-spin 8s linear infinite",
        "reality-shift": "reality-shift 10s ease-in-out infinite",
        "portal-open": "portal-open 1.5s ease-out",
        "portal-glow": "portal-glow 2s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        marvel: ["Marvel", "Bangers", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "marvel-gradient": "linear-gradient(45deg, #ED1D24, #0476F2)",
        "marvel-multiverse": "linear-gradient(45deg, #ED1D24, #0476F2, #9C27B0, #F0C000)",
        "hero-pattern": "url('/marvel-background.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
