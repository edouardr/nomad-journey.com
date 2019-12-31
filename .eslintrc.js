module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    `eslint:recommended`,
    `eslint-config-prettier`,
    `plugin:react/recommended`,
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    strict: ['error', 'never'],
  },
};
