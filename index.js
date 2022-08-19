module.exports = {
    'extends': [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
		'sourceType': 'module',
		'ecmaFeatures': {
            'jsx': true
        }
	},
	'settings': {
		'react': {
		  'pragma': 'h',
		  'version': '17'
		}
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'jsdoc'
	],
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'quotes': ['error', 'single'],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            'error',
            'always'
        ],

        '@typescript-eslint/no-inferrable-types': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-parameter-properties': 0,
		'@typescript-eslint/explicit-function-return-type': 2,
		'@typescript-eslint/no-shadow': [ 'error' ],
		'@typescript-eslint/space-before-function-paren': 2,
		'@typescript-eslint/keyword-spacing': 2,
		'@typescript-eslint/type-annotation-spacing': 2,

		'jsdoc/check-param-names': 2,
		'jsdoc/check-tag-names': 2,
		'jsdoc/check-types': 2,
		'jsdoc/newline-after-description': 0,
		'jsdoc/require-description-complete-sentence': 2,
		'jsdoc/require-example': 0,
		'jsdoc/require-hyphen-before-param-description': 2,
		'jsdoc/require-param': 2,
		'jsdoc/require-param-description': 2,
		'jsdoc/require-param-name': 2,
		'jsdoc/require-param-type': 2,
		'jsdoc/require-returns-description': 0,
		'jsdoc/require-returns-type': 0,
		'jsdoc/require-jsdoc': [
			'error', { 
				'require': { 
					'ClassDeclaration': false,
					'MethodDefinition': true
				}
			}
		],

		'semi-spacing': 2,
		'comma-spacing': 2,
		'no-unused-vars': 0,
        'space-in-parens': 2,
		'space-before-blocks': 2,
        'arrow-spacing': 2,
        'key-spacing': 2,
		'brace-style': 2,
		'comma-dangle': 2,
        'eqeqeq': [2, 'smart'],
        'complexity': [2, 6],
        'no-else-return': 2,
        'no-eval': 2,
        'no-eq-null': 2,
        'no-lone-blocks': 2,
        'constructor-super': 2,
        'no-const-assign': 2,
        'no-var': 2,
        'no-this-before-super': 2,
        'prefer-const': 2,
        'no-dupe-class-members': 2,
        'max-lines-per-function': [ 'error', 40 ],
        'max-depth': [ 'error', 2],
        'max-len': [ 'error', { 'code': 140 } ],
        'max-lines': [ 'error', { 
            'max': 280
        }],
        'max-params': [ 'error', { 
            'max': 4
        }],
        'max-statements': [ 'error', 20 ],
        'array-bracket-spacing': [ 2, 'always' ],
        'block-spacing': [ 2, 'always' ],
        'camelcase': [ 2, { 'properties': 'always' } ],
        'no-lonely-if': 2,
		'no-shadow': 'off',
        'no-shadow-restricted-names': 2,
        'no-console': 2,
        'no-alert': 2,
        'no-dupe-args': 2,
        'no-constant-condition': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
		'no-fallthrough': 2,
		'no-func-assign': 2,
		'no-unreachable': 2,
		'no-unsafe-negation': 2,
		'require-atomic-updates': 2,
		'use-isnan': 2,
		'max-classes-per-file': [ 'error', 1 ],
		'no-extra-bind': 2,
		'no-redeclare': 2,
		'no-return-assign': 2,
		'no-self-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-unmodified-loop-condition': 2,
		'no-useless-escape': 2,
		'no-useless-return': 2,
		'yoda': 2,
		'block-spacing': 2,
		'no-whitespace-before-property': 2,
		'object-curly-spacing': [ 'error', 'always' ],
		'prefer-template': 2,
		'prefer-arrow-callback': 2,
		'no-this-before-super': 2,
		'no-duplicate-imports': 2,
		'no-const-assign': 2,
		'no-multi-spaces': 2,
		'constructor-super': 2,
		'sort-imports': ['error', {
			'ignoreCase': true,
			'ignoreDeclarationSort': true,
			'ignoreMemberSort': true,
			'memberSyntaxSortOrder': ['single', 'all', 'multiple', 'none']
		}],
		'space-infix-ops': 2,
		'sort-keys': ['error', 'asc', {'caseSensitive': true, 'natural': false}],
		'keyword-spacing': ['error', { 'before': true, 'after': true}]
    }
};