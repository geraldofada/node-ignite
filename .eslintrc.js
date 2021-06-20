module.exports = {
  'parser': '@typescript-eslint/parser',
  'env': {
    'es6': true,
    'node': true
  },
  'plugins': [
    '@typescript-esling'
  ],
  'extends': [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'semi': [2, 'always'],
  }
}
