import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:["var(--roboto)"]
      },
      animation:{
        blob : "blob 4s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            tranform : "translate(0px,0px) scale(1)"
          },
          "33%":{
            tranform : "translate(30px,-50px) scale(1.1)"
          },
          "66%":{
            tranform : "translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            tranform : "translate(0px, 0px) scale(1)"
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
