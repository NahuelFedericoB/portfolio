import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        vi: true,
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    rules: {
      'no-undef': 0,
      '@typescript-eslint/ban-ts-comment': 0,
    },
  },
  {
    ignores: [
      'build/',
      'dist/',
      'dist-ssr/',
      'coverage/',
      '.svelte-kit/',
      'package/',
      'node_modules/',
      '.env',
      '.env.*',
      'package-lock.json',
      'storybook-static/',
    ],
  },
];
