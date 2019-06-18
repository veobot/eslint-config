module.exports = {
  parser: 'vue-eslint-parser',
  plugins: [ 'vue-i18n' ],
  rules: {
    'vue-i18n/no-missing-keys': 'error',
    'vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: [ '.ts', '.js', '.vue' ],
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/locales/*',
    },
  },
};
