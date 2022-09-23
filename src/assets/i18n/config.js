import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';

import language from './language';

import az from './common/locales/az.json';
import en from './common/locales/en.json';

i18next.use(initReactI18next).init({
  fallbackLng: language,
  supportedLngs: language,
  lng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      translation: en,
    },
    az: {
      translation: az,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

moment.locale(language);

i18next.on('languageChanged', (lng) => {
  moment.locale(lng);
});

i18next.addResourceBundle('en', 'common', en);
i18next.addResourceBundle('de', 'common', az);

export default i18next;
