import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export const typescriptRules = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json', // Specify your tsconfig.json path
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    '@typescript-eslint': tsEslint,
  },
  rules: {
    ...tsEslint.configs.recommended.rules,
    ...tsEslint.configs.stylistic.rules, // Optional: Add stylistic rules
    // Add or override TypeScript-specific rules here
  }
};

export const reactRules = {
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  plugins: {
    react: react,
    'react-hooks': reactHooks,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // Turn off if using TypeScript
    // Add or override React-specific rules here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};