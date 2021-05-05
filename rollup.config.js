import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
        file: 'umd/my-string-library-aa.js',
        format: 'umd',
        name: 'my-string-library-aa',
        esModule: false
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm'
    }
  }
];