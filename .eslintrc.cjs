/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    // === eslint ====
    'no-console': ['warn', { allow: ['error'] }],
    'no-warning-comments': ['warn'],

    // === react ====
    'react-hooks/exhaustive-deps': 'warn',

    // === @typescript-eslint ====
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'separate-type-imports',
      },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/naming-convention': [
      'off',
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      { ignorePrimitives: { string: true } },
    ],
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',

    // === PLUGINS ====
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/require-description': ['error', { ignore: [] }],

    //imports
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // "react" imports or starting with "react/"
          ['^react(?:/.*)?$'],
          // "next" imports or starting with "next/"
          ['^next(?:/.*)?$'],
          // Imports starting with a letter or "@"
          ['^[a-zA-Z@]'],
          // Imports starting with "~" our paths are set in tsconfig.json
          ['^~'],
          // Imports starting with "components/"
          ['^components/'],
          // Imports starting with "components/"
          ['^src/'],
          // Imports starting with ".."
          ['^\\.\\.'],
          // Imports starting with "."
          ['^\\.'],
          // Side effect imports
          ['^\\u0000'],
          // CSS files
          ['.*\\.css$'],
          // Anything not matched in another group
          ['^'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
}

module.exports = config
