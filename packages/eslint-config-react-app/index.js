/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Inspired by https://github.com/airbnb/javascript but less opinionated.

// We use eslint-loader so even warnings are very visible.
// This is why we only use "WARNING" level for potential errors,
// and we don't use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
var restrictedGlobals = [
  'addEventListener',
  'blur',
  'close',
  'closed',
  'confirm',
  'defaultStatus',
  'defaultstatus',
  'event',
  'external',
  'find',
  'focus',
  'frameElement',
  'frames',
  'history',
  'innerHeight',
  'innerWidth',
  'length',
  'location',
  'locationbar',
  'menubar',
  'moveBy',
  'moveTo',
  'name',
  'onblur',
  'onerror',
  'onfocus',
  'onload',
  'onresize',
  'onunload',
  'open',
  'opener',
  'opera',
  'outerHeight',
  'outerWidth',
  'pageXOffset',
  'pageYOffset',
  'parent',
  'print',
  'removeEventListener',
  'resizeBy',
  'resizeTo',
  'screen',
  'screenLeft',
  'screenTop',
  'screenX',
  'screenY',
  'scroll',
  'scrollbars',
  'scrollBy',
  'scrollTo',
  'scrollX',
  'scrollY',
  'self',
  'status',
  'statusbar',
  'stop',
  'toolbar',
  'top',
];

module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['import', 'flowtype', 'jsx-a11y', 'react', 'no-unused-vars-rest'],

  extends: ['airbnb', 'react-app'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  rules: {
    semi: [2, 'never'],
    'comma-dangle': 0,
    'max-len': 0,
    'no-shadow': 0,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'global-require': 0,
    'no-confusing-arrow': 0,
    'no-param-reassign': 0,
    'no-constant-condition': 0,
    'no-underscore-dangle': 0,
    'no-empty': 0,
    // http://eslint.org/docs/rules/
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'allow-null'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'error',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-console': 0,
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'warn',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    radix: 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'error',
      // TODO: reenable once import() is no longer slow.
      // https://github.com/facebookincubator/create-react-app/issues/2176
      // {
      //   object: 'require',
      //   property: 'ensure',
      //   message: 'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
      // },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 0,
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    'class-methods-use-this': 0,

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/require-default-props': 0,
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
    'react/no-array-index-key': 0,
    'react/sort-comp': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/no-unused-prop-types': 0,
    'react/no-danger': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'no-unused-vars-rest/no-unused-vars': [
      'error',
      { ignoreDestructuredVarsWithRest: true },
    ],
    'space-before-function-paren': [2, 'always'],

    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'warn',
    'flowtype/use-flow-type': 'warn',
  },
};
