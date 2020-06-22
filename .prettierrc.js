const { prettierConfig } = require("poetic");

module.exports = {
  ...prettierConfig,
  // Add custom rules here
  // printWidth: 100,
  bracketSpacing: true,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  jsxBracketSameLine: false,
  printWidth: 80,
  proseWrap: "preserve",
  requirePragma: false,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};
