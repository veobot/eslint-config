module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/nodejs',
    './rules/strict-mode',
    './rules/style',
    './rules/variables',

    './rules/plugins/import',
    './rules/plugins/jest',
    './rules/plugins/promise',
    './rules/plugins/security',
    './rules/plugins/typescript',
    './rules/plugins/vue',
    './rules/plugins/vue-i18n',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
};
