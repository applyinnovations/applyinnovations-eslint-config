/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [require.resolve("./eslint.react.js")],
  plugins: ["react-native"],
  rules: {
    "react-native/no-inline-styles": "error",
  },
};
