module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    browser: false,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'prettier',
    'plugin:import/errors',
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 12,
  },
  globals: {
    strapi: true,
  },
  rules: {},
};
