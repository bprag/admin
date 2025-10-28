export default {
  plugins: {
    'postcss-nesting': {},
    '@tailwindcss/postcss': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': false,
      },
    },
    // eslint-disable-next-line node/prefer-global/process
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
};
