module.exports = {
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.2',
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    webextensions: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'prettier', 'jest'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['setupTests.ts', 'src/components', 'src/types', 'src/shared'],
  rules: {
    'react/jsx-uses-vars': 2,
    'react/no-children-prop': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-unknown-property': 0,
    'react/no-deprecated': 0,
    'react/jsx-key': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/no-unescaped-entities': 0,
    'no-template-curly-in-string': 0,
    'import/no-anonymous-default-export': 0,
    'no-console': 0,
    eqeqeq: ['error', 'always'],
    'jsx-a11y/anchor-is-valid': 0,
    'no-unreachable': 2,
    'no-var': 'error',
    'no-import-assign': 0,
    'no-prototype-builtins': 0,
    'object-curly-spacing': ['warn', 'always'],
    '@typescript-eslint/no-redeclare': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'off',
    'no-control-regex': 0,
    "semi": ["error", "always", { "omitLastInOneLineBlock": false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": ["error"],
    "semi-spacing": ["error", { "before": false, "after": true }]
  },
};
