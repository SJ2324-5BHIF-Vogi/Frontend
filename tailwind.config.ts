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
        'lilac-300': '#af8dc9',
        'lilac-500': '#A875CF',
        'lilac-700': '#4e3363',
        'toothpaste-500': '#00F0FF',
        'eggplant-500': '#8A00FF',
        'dragonfruit-500': '#FF006B',
        'midnight-600': '#3e2e59',
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
