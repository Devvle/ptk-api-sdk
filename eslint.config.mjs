import parser from '@typescript-eslint/parser';

export default [
	{
		name: 'ptk-eslint-config',
		languageOptions: {
			parser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		plugins: {
			'@typescript-eslint': parser
		},
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']
	}
];
