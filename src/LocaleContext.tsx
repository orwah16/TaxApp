import React, { createContext, useState, ReactNode, useContext } from 'react';
import hebrew from './constants/languages/hebrew.json';
import arabic from './constants/languages/arabic.json';

export interface LocaleContextProps {
  locale: string;
  messages: any;
  switchLocale: (locale: string) => void;
}

export const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>('he'); // default locale
  const [messages, setMessages] = useState<any>(hebrew);

  const switchLocale = (language: string) => {
    setLocale(language);
    setMessages(language === 'he' ? hebrew : arabic);
  };

  return (
    <LocaleContext.Provider value={{ locale, messages, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);