import globals from 'globals';
import pluginJs from '@eslint/js';

const config = {
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    '@eslint/js': pluginJs.configs.recommended,
  },
  rules: {
    // Ваші власні правила
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};

export default config;
