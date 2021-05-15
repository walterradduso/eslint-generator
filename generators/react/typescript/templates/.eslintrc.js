module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
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
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_.*?$',
        ignoreRestSiblings: false,
      },
    ],
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            group: 'external',
            pattern: '~/**',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
  },
};
