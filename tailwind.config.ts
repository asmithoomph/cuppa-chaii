/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      colors: {
        // Primary (Must be named as to not conflict with Nuxt UI e.g. 'midnight-purple')
        "midnight-purple": {},
        // Secondary (Must remain 'secondary' for correct implementation)
        secondary: {},
      },
    },
  },
};
