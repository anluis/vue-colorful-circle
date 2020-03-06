import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
// import typescript from "rollup-plugin-typescript";
export default {
  input: "src/wrapper.js",
  output: {
    name: "VueColorfulCircle",
    exports: "named"
  },
  plugins: [
    // typescript({
    //   tsconfig: false,
    //   experimentalDecorators: true,
    //   module: "es2015"
    // }),
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    buble() // Transpile to ES5
  ],
  external: ["vue"]
};
