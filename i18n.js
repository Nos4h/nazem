// src/i18n.js
import { createI18n } from 'vue-i18n';

// Define your translations
const messages = {
  en: {
    startButton: 'Start',
    adminLoginButton: 'Login as Admin',
    // Add other translations...
  },
  ar: {
    startButton: 'ابدأ',
    adminLoginButton: 'تسجيل الدخول كمسؤول',
    // Add other translations...
  },
};

const i18n = createI18n({
  locale: 'en', // Set default locale
  fallbackLocale: 'en',
  messages,
});

export default i18n;
