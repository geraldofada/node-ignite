import { terser } from 'rollup-plugin-terser'

module.exports = {
  input: './build/main.js',
  output: {
    file: './build/release/vendor.js',
    format: 'cjs',
  },
  plugins: [
    terser({
      mangle: {
        toplevel: true,
      },
    }),
  ],
}
