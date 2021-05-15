module.exports = {
  root: true,
  extends: ['standard', 'prettier', 'eslint:recommended'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    mocha: true,
  },
  rules: {
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'auto',
        jsxBracketSameLine: false,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
};
