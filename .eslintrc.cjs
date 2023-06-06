module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"eslint:recommended",
		"plugin:prettier/recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier",
	],
	overrides: [
		{
			files: ["src/**/*.vue"],

			env: {
				"vue/setup-compiler-macros": true,
			},
			parser: "vue-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
		{
			files: ["src/**/*.ts", "src/**/*.vue"],

			parserOptions: {
				project: ["./tsconfig.json"],
			},
			rules: {
				// Place rules that need parserOptions.project here.
				// That setting only works with files included in tsconfig.json,
				// so not, for example, vite.config.ts.
				"@typescript-eslint/no-misused-promises": [
					"error",
					{
						checksVoidReturn: false,
					},
				],
			},
		},
		{
			files: ["**/*.json"],
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	plugins: [
		"@typescript-eslint",
		"json-format",
		"simple-import-sort",
		"prettier",
	],
	root: true,
	rules: {
		"@typescript-eslint/no-empty-function": ["off"],
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
		"@typescript-eslint/sort-type-constituents": ["warn"],
		curly: ["warn", "multi-line"],
		"import/no-anonymous-default-export": "off",
		"no-console": [
			"warn",
			{
				allow: ["warn", "error"],
			},
		],
		"no-else-return": [
			"warn",
			{
				allowElseIf: true,
			},
		],
		"no-param-reassign": [
			"error",
			{
				ignorePropertyModificationsForRegex: ["^mut_.+"],
				props: true,
			},
		],
		"no-undef": "off",
		"no-unused-vars": "off",
		"prefer-const": [
			"warn",
			{
				destructuring: "any",
				ignoreReadBeforeAssign: true,
			},
		],
		"prettier/prettier": "warn",
		"simple-import-sort/imports": ["warn"],
		"sort-keys": [
			"warn",
			"asc",
			{
				allowLineSeparatedGroups: true,
				minKeys: 5,
				natural: true,
			},
		],
		"vue/attributes-order": ["warn", { alphabetical: true }],
		"vue/component-name-in-template-casing": ["warn", "PascalCase"],
	},
	settings: {
		"json/sort-package-json": "pro",
	},
};
