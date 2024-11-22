import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../translations/messages-en.json';
import de from '../translations/messages-de.json';
import fr from '../translations/messages-fr.json';

let locale = location.pathname.split('/')[1];
const locales = ['en', 'fr', 'de'];

if (!locales.includes(locale)) {
    if (localStorage.getItem("lang")) {
        locale = localStorage.getItem("lang");
    }
}

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: locale,
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            },
            de: {
                translation: de
            }
        },
        supportedLngs: locales
    });

export default i18n;