import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [
    // postcssNesting(),
    postcssImport(),
    tailwindcss,
    autoprefixer(),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': false,
      },
    }),
    cssnano(),
  ],
};
