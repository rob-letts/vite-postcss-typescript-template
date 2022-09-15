module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [`eslint:recommended`, `plugin:@typescript-eslint/recommended`],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: `latest`,
    sourceType: `module`
  },
  plugins: [`@typescript-eslint`],
  rules: {
    "arrow-parens": [`error`, `as-needed`],
    "no-inline-comments": [`error`],
    camelcase: [`error`],
    "prefer-const": [`error`],
    indent: [`error`, 2],
    "linebreak-style": [`error`, `unix`],
    quotes: [`error`, `backtick`],
    semi: [`error`, `always`],
    "no-duplicate-imports": [`error`],
    "no-var": [`error`],
    "array-bracket-spacing": [`error`],
    "arrow-spacing": [`error`],
    "comma-dangle": [`error`],
    "space-before-function-paren": [`error`],
    "no-trailing-spaces": [`error`],
    "prefer-template": [`error`]
  }
};
