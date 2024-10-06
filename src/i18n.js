import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  de: { translation: de },
};

i18n
  .use(initReactI18next)  // Initialize i18n with react-i18next
  .init({
    resources,
    lng: 'en',            // Default language
    fallbackLng: 'en',     // Fallback language
    debug: true,           // Enable debug mode for logs in console
    interpolation: {
      escapeValue: false,  // React already escapes by default
    }
  });

export default i18n;
