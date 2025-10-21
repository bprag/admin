export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-rational-order',
  ],
  ignoreFiles: ['**/*.{js,ts,jsx,tsx,json,md}'],
  overrides: [
    {
      customSyntax: 'postcss-html',
      files: ['**/*.{html,vue}'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global', 'deep'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    },
    {
      customSyntax: 'postcss-scss',
      files: ['**/*.scss'],
    },
  ],
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
  rules: {
    'at-rule-no-deprecated': null,
    'at-rule-no-unknown': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'for',
          'each',
          'media',
          'at-root',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'use',
          'forward',
          'return',
        ],
      },
    ],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        'rules',
      ],
      { severity: 'error' },
    ],
    'prettier/prettier': true,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'selector-class-pattern':
      '^[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$',
    'function-no-unknown': null,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'selector-not-notation': null,
  },
};
