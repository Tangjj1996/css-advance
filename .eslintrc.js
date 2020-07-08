module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['plugin:vue/essential', 'standard', 'prettier', 'prettier/vue'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-new': 0
  }
}
