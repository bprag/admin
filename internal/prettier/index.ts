import * as prettierPluginTailwindcss from 'prettier-plugin-tailwindcss';

export default {
  endOfLine: 'auto',
  tabWidth: 2,
  printWidth: 80,
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [prettierPluginTailwindcss],
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
  ],
};
