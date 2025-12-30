export default {
	endOfLine: 'auto',
	tabWidth: 2,
	printWidth: 80,
	proseWrap: 'never',
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	plugins: ['prettier-plugin-tailwindcss'],
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
