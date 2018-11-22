module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "jest-enzyme"
  ],
  globals: {
    __DEV__: false,
    FONT: false,
    SCALE: false,
    WIDTH: false,
    HEIGHT: false,
    Log: false,
    Color: false,
    StatusbarHeight: false,
    isIPhoneX: false,
    wait: false,
    OS: false
  },
  plugins: ["babel", "import", "jsx-a11y", "react", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/forbid-prop-types": [0],
    "react/no-array-index-key": [0],
    "react/require-default-props": [0],
    "react/destructuring-assignment": [0],
    "global-require": [0],
    "no-underscore-dangle": [0],
    "no-plusplus": "off",
    "prettier/prettier": ["error"]
  }
};
