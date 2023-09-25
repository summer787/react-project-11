module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
    react: { version: '18.2' },
    'import/resolver': {
      alias: {
        map: [['@', './src', 'swiper']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  plugins: ['react-refresh', 'prettier'],
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'error',
    'react-refresh/only-export-components': [
      'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};