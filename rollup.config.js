import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './blockify-main/pages/scripts/editor.js',
  output: {
    dir: './blockify-main/pages/scripts/bundled/',
    format: 'cjs'
  },
  plugins: [nodeResolve.nodeResolve()]
};