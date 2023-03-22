// rollup.config.js
// commonjs
var common = require('./rollup.js');
// import { terser } from 'rollup-plugin-terser';
var terser = require('@rollup/plugin-terser');
// import terser from '@rollup/plugin-terser';
var json = require('@rollup/plugin-json');
var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var babel = require('@rollup/plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      name: 'nx',
      file: 'dist/index.iife.js',
      format: 'iife',
      // When export and export default are not used at the same time, set legacy to true.
      // legacy: true,
      banner: common.banner,
    },
    {
      name: 'nx',
      file: 'dist/index.iife.min.js',
      format: 'iife',
      // When export and export default are not used at the same time, set legacy to true.
      // legacy: true,
      banner: common.banner,
      plugins: [terser()],
    },
  ],
  plugins: [common.getCompiler(), json(), babel({
    // runtimeHelpers: true,
    exclude: 'node_modules/**',
    presets: ["@babel/preset-env"]
  }), resolve(), commonjs()],
};
