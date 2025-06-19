// @ts-check
const angular = require('angular-eslint');
const angularTemplateParser = require('@angular-eslint/template-parser');
const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const angularPlugin = require('@angular-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    ignores: ['.angular/', '.github/', '.vscode/', 'dist/', 'node_modules/'],
  },
  {
    files: ['**/*.ts'],
    ignores: ['**/*.spec.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        projectService: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@angular-eslint': angularPlugin,
      prettier: prettierPlugin,
    },
    processor: angular.processInlineTemplates,
    rules: {
      ...typescriptPlugin.configs.all.rules,
      ...angularPlugin.configs.all.rules,
      ...prettierPlugin.configs?.rules,
      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignoreEnums: true,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./demo/tsconfig.spec.json'],
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@angular-eslint': angularPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...angularPlugin.configs.recommended.rules,
      ...prettierPlugin.configs?.rules,
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...angularTemplatePlugin.configs.all.rules,
      '@angular-eslint/template/no-call-expression': 'off',
    },
  },
  eslintPluginPrettierRecommended,
];
