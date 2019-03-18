module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    process.env.NODE_ENV === 'test' &&
      '@babel/plugin-transform-modules-commonjs',
  ].filter(Boolean),
}
