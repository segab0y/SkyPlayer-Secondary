/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      Skyxl: [
        '4rem',
        {
          fontSize: '4rem',
          lineHeight: '72px',
          letterSpacing: '-0.8px',
          fontWeight: '400',
        },
      ],
      SkyBase: [
        '1rem',
        {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
    },
  },
  plugins: [],
}
