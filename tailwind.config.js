const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          color: theme('colors.gray.700'),
        },
        a: {
          color: theme('colors.gray.500'),
          textDecoration: 'underline',
          textDecorationColor: theme('colors.gray.300'),
          textUnderlineOffset: theme('spacing.1'),
          '&:hover': {
            color: theme('colors.gray.600'),
            textDecorationColor: theme('colors.gray.400'),
          },
        },
        p: {
          lineHeight: theme('lineHeight.7'),
          marginBottom: theme('spacing.4'),
        },
      });
    }),
  ],
};
