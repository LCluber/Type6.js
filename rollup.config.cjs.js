import resolve from "@rollup/plugin-node-resolve";
// import babel from "@rollup/plugin-babel";

export default {
  input: "build/es6/type6.js",
  output: {
    name: "Type6",
    file: "build/type6.cjs.js",
    format: "cjs"
  },
  external: [
  ],
  plugins: [
    resolve(),
    // babel({ 
    //   // babelHelpers: 'bundled',
    //   babelrc: false,
		//   presets: [
    //     ["@babel/env", 
    //       { 
    //         // modules: false,
    //         targets: {
    //           node: "current"
    //         }
    //       }
    //     ]
    //   ]
  
    // })
  ]
};