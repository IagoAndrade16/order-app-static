module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		// 'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
		// 'prettier',
		'airbnb-base',
		'plugin:compat/recommended'
	],
	plugins: ['svelte3', '@typescript-eslint', 'cypress', 'compat', 'eslint-plugin-html'],
	ignorePatterns: ['*.cjs'],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'svelte3/typescript': true,
		'import/resolver': {
			'eslint-import-resolver-custom-alias': {
				alias: {
					$lib: './src/lib',
					$app: './.svelte-kit/runtime/app',
					'@sveltejs': './.svelte-kit/dev'
				},
				extensions: ['.js', '.svelte', '.ts']
			}
		}
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'import/first': 'off',
				'import/extensions': 'off',
				'no-tabs': 0,
				indent: 'off',
				'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }], // airbnb,
				'no-nested-ternary': 'off',
				'import/no-mutable-exports': 'off',
				'no-case-declarations': 'off',
				'import/prefer-default-export': 'off'
			}
		},
		{
			files: ['*.json'],
			extends: [],
			plugins: ['json-format', 'svelte3', '@typescript-eslint', 'cypress'],
			rules: {
				indent: ['error', 'tab'],
				'no-tabs': 0
			},
			settings: {
				'json/sort-package-json': 'standard'
			}
		},
		{
			parser: '@typescript-eslint/parser',
			files: ['*.ts', '*.tsx', '*.config.ts', '*.spec.ts', '*.spec.cy.ts'],
			extends: ['plugin:@typescript-eslint/recommended'],
			parserOptions: {
				ecmaVersion: 12,
				sourceType: 'module',
				project: ['./tsconfig.json']
			},
			plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
			rules: {
				indent: 'off',
				'no-tabs': 0,
				'no-plusplus': 'off',
				'no-await-in-loop': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/indent': [
					'error',
					'tab',
					{
						ignoredNodes: [
							'FunctionExpression > .params[decorators.length > 0]',
							'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
							'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
							'PropertyDefinition'
						]
					}
				],
				'no-use-before-define': 'off',
				'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'interface',
						format: ['PascalCase']
					}
				],
				'arrow-body-style': 'off',
				'import/no-unresolved': 'error',
				'class-methods-use-this': 'off',
				'no-case-declarations': 'off',
				'import/prefer-default-export': 'off',
				'no-shadow': 'off',
				'no-console': 'off',
				'no-useless-constructor': 'off',
				'no-empty-function': 'off',
				'lines-between-class-members': 'off',
				'import/extensions': [
					'error',
					'ignorePackages',
					{
						ts: 'never'
					}
				],
				'import-helpers/order-imports': [
					'error',
					{
						newlinesBetween: 'always',
						groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
						alphabetize: {
							order: 'asc',
							ignoreCase: true
						}
					}
				],
				'import/no-extraneous-dependencies': [
					'error',
					{
						devDependencies: ['**/*.spec.js']
					}
				]
			},
			settings: {
				'import/resolver': {
					typescript: {}
				}
			}
		}
	],
	rules: {
		'max-len': 'off',
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-plusplus': 'off',
		'no-continue': 'off',
		'no-await-in-loop': 'off',
		"no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
		"operator-linebreak": "off",
		"implicit-arrow-linebreak": "off",
		"no-confusing-arrow": "off",
		"function-paren-newline": "off",
		"no-underscore-dangle": "off",
	}
};
