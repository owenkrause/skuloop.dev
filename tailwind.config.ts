import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#F5F5F5',
        'gray-200': '#EEEEEE',
        'gray-400': '#BDBDBD',
        'gray-800': '#424242'
      },
      keyframes: {
        width: {
          '25%': { width: '0px' },
          '100%': { width: '324px' }
        }
      }
    },
  },
  plugins: [],
}
export default config
