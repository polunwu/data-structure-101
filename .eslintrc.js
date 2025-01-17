module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
};
