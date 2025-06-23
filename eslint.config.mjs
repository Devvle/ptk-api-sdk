import parser from '@typescript-eslint/parser';

export default [
	{
		name: 'promptTKEslintConfig',
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
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules
		}
	}
];
