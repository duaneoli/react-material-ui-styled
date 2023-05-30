const commonPlugins = ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-export-default-from']
const productionPlugins = [['transform-remove-console', { exclude: ['error', 'warn'] }]]
const plugins = process.env.REACT_APP_ENV === 'prd' ? [...commonPlugins, ...productionPlugins] : [...commonPlugins]

module.exports = [
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [...plugins],
    },
  ],
  ['use-eslint-config', '.eslintrc.json'],
]
