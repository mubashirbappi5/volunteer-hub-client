/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},

  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      // Disable dark mode and only use light theme
      'light', // This ensures that only the light theme is available
    ],
  },
}

