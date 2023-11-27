import { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'lilac-500': '#A875CF',
        'midnight-700': '#1E1B2E',
        'midnight-800': '#14121F',
        'midnight-900': '#12101C'
      }
    },
    fontFamily: {
      righteous: ['Righteous', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif']
    }
  },
  plugins: []
}

export default config
