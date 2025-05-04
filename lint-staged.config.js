export default {
	// Lint and format JavaScript and Astro files
	'**/*.{js,jsx,ts,tsx,astro}': ['eslint --fix', 'prettier --write'],
	// Lint and format JSON files
	'**/*.json': ['prettier --write', 'jsonlint'],
	// Lint and format Markdown files
	'**/*.md': ['prettier --write', 'markdownlint'],
};
