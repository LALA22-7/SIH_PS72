/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nowcast: {
          bg: '#050505',
          sidebar: '#0a0a0a',
          card: '#111111',
          accent: '#ccff00',
          accentHover: '#b3e600',
          text: '#f8fafc',
          textMuted: '#94a3b8',
          danger: '#ef4444',
          warning: '#f59e0b',
          success: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
