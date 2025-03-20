import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts'], // Apply these rules to TypeScript files
    languageOptions: {
      parser: tsParser, // Set TypeScript parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json', // Reference your tsconfig.json
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Use recommended TypeScript rules
      '@typescript-eslint/no-explicit-any': 'warn', // Custom rule overrides
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
];
