module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'extends': [
    'standard',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'prettier'
  ],
  'overrides': [
    {
      'files': ['**/*.svelte'],
      'processor': 'svelte3/svelte3'
    }
  ],
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'extraFileExtensions': ['.svelte']
  },
  'plugins': ['import', 'svelte3'],
  'settings': {
    'svelte3/ignore-styles': () => true,
    'import/resolver': {
      'alias': {
        'map': [
          ['@', './src/']
        ],
        'extensions': ['.js','.svelte']
      }
    }
  }
}
