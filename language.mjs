import { createContext, createElement, useContext, useEffect, useState } from 'react';
                                       
import { translations } from './translations.mjs';

                                          
const LanguageContext = createContext({ language: 'en'            , changeLanguage: (_value          ) => {} });

export function LanguageProvider({ children }                         ) {
  const [language, setLanguage] = useState          (() => {
    try {
      const saved = localStorage.getItem('decor-language');
      return ['en', 'de', 'ti', 'am'].includes(saved || '') ? saved             : 'en';
    } catch { return 'en'; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem('decor-language', language); } catch {}
  }, [language]);
  return createElement(LanguageContext.Provider, { value: { language, changeLanguage: setLanguage } }, children);
}

export function useElements() {
  const { language } = useContext(LanguageContext);
  const translate = (text        ) => translations[text]?.[language] || text;
  return (type     , props      = null, ...children       ) => {
    const attributes = props ? { ...props } : null;
    for (const key of ['alt', 'aria-label', 'placeholder']) {
      if (attributes && typeof attributes[key] === 'string') attributes[key] = translate(attributes[key]);
    }
    return createElement(type, attributes, ...children.map(child => typeof child === 'string' ? translate(child) : child));
  };
}

export function LanguagePicker() {
  const { language, changeLanguage } = useContext(LanguageContext);
  return createElement('label', { className: 'language-picker' },
    createElement('span', null, 'Language · Sprache · ቋንቋ'),
    createElement('select', { value: language, onChange: (event     ) => changeLanguage(event.target.value), 'aria-label': 'Choose language / Sprache wählen / ቋንቋ' },
      ...[['en', 'English'], ['de', 'Deutsch'], ['ti', 'ትግርኛ'], ['am', 'አማርኛ']].map(([value, label]) => createElement('option', { value, key: value }, label))));
}
