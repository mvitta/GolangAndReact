import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-whiteGray':
          'background: linear-gradient(90deg, rgba(223,223,223,1) 15%, rgba(255,255,255,1) 45%, rgba(233,233,233,1) 78%);',
      },
      colors: {
        'app-color': '#00acd7',
      },
      listStyleImage: {
        checkmark: 'url("../images/check.svg")',
      },
    },
  },
  plugins: [],
}
export default config
