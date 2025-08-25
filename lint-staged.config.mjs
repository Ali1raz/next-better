/** @type {import('lint-staged').Configuration} */
export default {
  // Lint and format JS/TS files on commit. lint-staged appends the file list automatically.
  "*.{js,jsx,ts,tsx}": ["eslint --max-warnings=0 --fix", "prettier --write"],

  // Format other common text files
  "*.{json,md,css,scss,html,yml,yaml}": ["prettier --write"],
  // add to lint-staged.config.mjs
  "**/*.{ts,tsx}": () => "tsc -p tsconfig.json --noEmit",
};
