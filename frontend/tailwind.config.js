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
          /* ── Base: Bio Black ── */
          bg: '#010B13',
          sidebar: '#06111A',
          card: '#0C1A26',
          border: '#142637',

          /* ── Accent: Synthetic Line ── */
          accent: '#CCFF00',
          accentHover: '#B8E600',
          accentMuted: '#3D4D00',

          /* ── Typography ── */
          text: '#F0F6FC',
          textMuted: '#8B949E',

          /* ── Semantic ── */
          danger: '#FF4757',
          warning: '#FFAA00',
          success: '#00E676',
          info: '#29B6F6',

          /* ── Risk Level Colors ── */
          riskLow: '#00E676',
          riskMedium: '#FFAA00',
          riskHigh: '#FF6D00',
          riskCritical: '#FF1744',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-risk': 'pulseRisk 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseRisk: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}

