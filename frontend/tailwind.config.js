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
          bg: '#0a0d14',
          sidebar: '#111520',
          card: '#161b28',
          accent: '#f59e0b',
          accentHover: '#fbbf24',
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
