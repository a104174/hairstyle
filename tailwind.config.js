/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",                     
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      /* ---------- CORES PERSONALIZADAS ---------- */
      colors: {
        background: "#F4ECE4",           
        graydark: "#111827",             
        primary: "#ff5e62",
        accent: "#ff9966",
        accent2: "#ff5e62",
      },

      /* ---------- FONTES & LETTER-SPACING -------- */
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        tiny: "0.04em",
      },

      /* ---------- BACKGROUND IMAGES ------------- */
      backgroundImage: {
        "hero-deco": "url('/img/paula-pattern.svg')",
      },

      /* ---------- ANIMAÇÕES --------------------- */
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInUp: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out both",
        slideInUp: "slideInUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};






  