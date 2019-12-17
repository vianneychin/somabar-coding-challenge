module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks'],
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'react-hooks/rules-of-hooks': ['error', 'never'],
    'react-hooks/exhaustive-deps': 'warn'
  }
}
