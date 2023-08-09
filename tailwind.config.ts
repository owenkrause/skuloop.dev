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
        'gray-200': '#EEEEEE',
        'gray-800': '#424242'
      },
      keyframes: {
        width: {
          '25%': { width: '0px' },
          '40%': { width: '100px' },
          '50%': { width: '100px' },
          '70%': { width: '130px' },
          '100%': { width: '324px' }
        }
      }
    },
  },
  plugins: [],
}
export default config
