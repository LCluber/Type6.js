import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

module.exports = {
  input: "build/es6/type6.js",
  output: {
    name: "Type6",
    file: "build/type6.iife.js",
    format: "iife"
  },
  external: [], // <-- suppresses the warning
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
};
