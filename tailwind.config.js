/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
 
theme: {
  extend: {
    animation: {
      fadeIn: "fadeIn 2s ease-out",
      glow: "glow 2s infinite ease-in-out",
    },
     dropShadow: {
      neon: "0 0 20px rgba(0,255,255,0.3)",
    },
    keyframes: {
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      glow: {
        "0%, 100%": { textShadow: "0 0 10px #0ff, 0 0 20px #0ff" },
        "50%": { textShadow: "0 0 20px #0ff, 0 0 40px #0ff" },
      },
    },
  },
},
}
