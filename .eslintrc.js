// const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:import/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    }
  },

  plugins: [
    'prettier',
    'jsx-a11y',
    'react',
    'react-hooks',
    'import',
  ],

  rules: {
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    'import/named': 'off',
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    'import/export': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/order': ['error', {
      'groups': [
        // Node built-in types e.g. `path` and `fs`.
        'builtin',
        // npm deps e.g. `react` and `styled-components`.
        'external',
        // Aliased paths e.g. `@tink/core`.
        // See https://github.com/benmosher/eslint-plugin-import/issues/1379#issuecomment-527466222.
        ['internal', 'unknown'],
        // Parent imports e.g. '../../foo'.
        'parent',
        // Sibling imports e.g. './foo` and `./bar/baz`.
        'sibling',
      ]
    }],

    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // https://eslint.org/docs/rules/no-unused-expressions

    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    /** Tink specific rules  */
    'react/jsx-boolean-value': ['error', 'never'],
    'react/display-name': 'off',
    'no-unreachable': 2, // 2 = error

    /**
     * @description rules of eslint-plugin-react
     */
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ], // also want to use with ".tsx"

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        printWidth: 100,
        trailingComma: 'es5',
      },
    ],
    /**
     * @description rules of eslint-plugin-react-hooks
     */
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'error'
  },
};
