/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1A1D29',
          soft: '#6B7280'
        },
        canvas: '#F6F7FB',
        surface: '#FFFFFF',
        brand: {
          DEFAULT: '#2C3454',
          light: '#3D4770',
          dark: '#1E2440'
        },
        accent: {
          DEFAULT: '#5B8DEF',
          light: '#E8EFFD'
        },
        good: {
          DEFAULT: '#2FAE79',
          light: '#E4F6EE'
        },
        warn: {
          DEFAULT: '#E2A83A',
          light: '#FBF2E0'
        },
        bad: {
          DEFAULT: '#E2574C',
          light: '#FCEAE8'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px'
      },
      boxShadow: {
        card: '0 1px 2px rgba(26,29,41,0.04), 0 8px 24px -12px rgba(26,29,41,0.10)'
      }
    },
  },
  plugins: [],
}
