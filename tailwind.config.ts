// tailwind.config.js

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        'custom-light-slate-blue': 'hsl(252, 100%, 67%)',
        'custom-light-royal-blue': 'hsl(241, 81%, 54%)',
        'custom-violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
        'custom-persian-blue-circle': 'hsla(241, 72%, 46%, 0)',
        'custom-light-red': 'hsl(0, 100%, 97%)',
        'custom-orangey-yellow': 'hsl(39, 100%, 97%)',
        'custom-green-teal': 'hsl(166, 100%, 97%)',
        'custom-cobalt-blue': 'hsl(234, 85%, 97%)',
        'custom-light-red-text': 'hsl(0, 100%, 70%)',
        'custom-orangey-yellow-text': 'hsl(39, 100%, 70%)',
        'custom-green-teal-text': 'hsl(166, 100%, 40%)',
        'custom-cobalt-blue-text': 'hsl(234, 85%, 55%)',
        'custom-dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
};

export default config;
