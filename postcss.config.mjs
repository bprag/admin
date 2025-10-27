import config from './tailwind.config.mjs';

export default {
  plugins: {
    'postcss-nesting': {},
    '@tailwindcss/postcss': { config },
    'postcss-preset-env': {},
    cssnano: {},
  },
};
