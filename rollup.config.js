import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const extensions = ['.ts', '.js']

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'esm' },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [babel({ extensions })],
}
