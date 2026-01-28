/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f8f2ee",
        charcoal: "#2f2a27",
        taupe: "#b08d7b",
        blush: "#e5b6bf",
        blushStrong: "#d79aa7",
        line: "#e9d8d2",
        card: "#fffaf7"
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 30px rgba(47, 42, 39, 0.12)"
      },
      borderRadius: {
        xl: "18px"
      }
    }
  },
  plugins: []
};
