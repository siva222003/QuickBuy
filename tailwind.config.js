/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [  require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
