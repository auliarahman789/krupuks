import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
      }
    },
  },
  plugins: [plugin(function ({ matchUtilities, theme }: PluginAPI) {
    matchUtilities(
      {
        'text-shadow': (value: string) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  })
  ]
};
export default config;


