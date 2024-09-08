/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
    },
    textShadow: {
      md: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    },
    animation: {
      fadeIn: 'fadeIn 1.2s ease-in-out',
    },
    textShadow: {
      md: '3px 3px 8px rgba(0, 0, 0, 0.3)',
    },
  },
};
export const plugins = [
  require('tailwindcss-textshadow'),
];
