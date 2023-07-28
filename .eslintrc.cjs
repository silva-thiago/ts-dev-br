module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			env: { node: true },
			files: [ '.eslintrc.{js, cjs}' ],
			parserOptions: { sourceType: 'script' }
		}
	],
	ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [ 'react-refresh', '@typescript-eslint', 'react', 'prettier' ],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}
