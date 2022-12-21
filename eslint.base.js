/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "airbnb-typescript", "eslint:recommended", "prettier"],
  globals: {},
  plugins: ["import", "@typescript-eslint", "vtex"],
  rules: {
    "arrow-body-style": "off",
    "consistent-return": "off",
    "default-case": "off",
    eqeqeq: "error",
    "func-names": "off",
    "global-require": "off",
    "import/export": "off",
    "import/newline-after-import": "off",
    "import/no-cycle": "off",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": "off",
    "no-alert": "off",
    "no-bitwise": "off",
    "no-console": "off",
    "no-else-return": "error",
    "no-empty-pattern": "error",
    "no-lonely-if": "error",
    "no-nested-ternary": "off",
    "no-new": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["./*", "../*"],
      },
    ],
    "no-restricted-properties": "off",
    "no-return-assign": "off",
    "no-undef": "off",
    "no-underscore-dangle": "off",
    "no-unsafe-optional-chaining": "off",
    "no-unused-vars": "off",
    "no-useless-return": "off",
    "object-shorthand": "off",
    "prefer-const": "off",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "off",
    "prefer-template": "off",
    radix: "off",
    "vtex/prefer-early-return": "error",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      settings: {
        "import/resolver": {
          typescript: { alwaysTryTypes: true },
        },
      },
      rules: {
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "no-restricted-syntax": [
          "error",
          {
            message: "No empty string defaults",
            selector: 'LogicalExpression[operator=||][right.value=""]',
          },
          {
            message: "No empty string defaults",
            selector: 'LogicalExpression[operator=??][right.value=""]',
          },
        ],
      },
    },
  ],
};
