export default {
	printWidth: 80,
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
		{
			files: ["**/*.json"],
			options: {
				parser: "json",
				tabWidth: 4,
				semi: false,
				singleQuote: true,
			},
		},
		{
			files: ["**/*.md"],
			options: {
				parser: "markdown",
				proseWrap: "always",
				tabWidth: 2,
				embeddedLanguageFormatting: "off",
			},
		},
		{
			files: ["**/*.{js,jsx,ts,tsx}"],
			options: {
				parser: "typescript",
				semi: true,
				singleQuote: true,
				arrowParens: "always",
				trailingComma: "all",
			},
		},
	],
};
