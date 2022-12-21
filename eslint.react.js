/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    require.resolve("./eslint.base.js"),
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  plugins: ["react", "react-hooks", "react-native"],
  rules: {
    "jsx-a11y/alt-tex": "off",
    "jsx-a11y/alt-text": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-native/no-inline-styles": "error",
    "react/display-name": "off",
    "react/function-component-definition": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],
    "react/jsx-no-constructed-context-values": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "error",
    "react/no-danger": "off",
    "react/no-unstable-nested-components": "off",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "error",
    "react/require-default-props": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
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
