import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {IntlProvider} from "react-intl";
import hebrew from "./constants/languages/hebrew.json";
import arabic from "./constants/languages/arabic.json";
import { LocaleProvider, LocaleContext } from './LocaleContext';
import './index.css'

const messages: { [key: string]: any } = {
  'ar': arabic,
  'he': hebrew
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <LocaleContext.Consumer>
      {({ locale }) => (
        <IntlProvider locale={locale} messages={messages[locale]}>
          <App />
        </IntlProvider>
      )}
      </LocaleContext.Consumer>
    </LocaleProvider>
  </StrictMode>,
)
