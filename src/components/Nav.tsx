
import React, { useContext } from 'react';
import { hamburger } from "../assets/icons";
import  headerLogo  from "../assets/images/headerLogo.png";
import { navLinks } from "../constants";
import { useState } from "react";
import { LocaleContext,useLocale } from '../LocaleContext';

// export interface LocaleContextProps {
//   locale: string;
//   messages: any;
//   switchLocale: (locale: string) => void;
// }

function Nav() {
  const context = useContext(LocaleContext);
  const { locale, messages, switchLocal } = useLocale();

  if (!context) {
    throw new Error('LocaleContext must be used within a LocaleProvider');
  }

  const { switchLocale } = context;

  const changeLocale = (newLocale: string) => {
    switchLocale(newLocale);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {messages.naviLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                    >
                      {item.label}
                  </a>
                </li>

              ))}
            </ul>


<div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Lang
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      {/* <a  href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">عربية</a> */}
        <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>changeLocale('ar')} type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">عربية</button>
        <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>changeLocale('he')} type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">עברית</button>
    </div>
  </div>
</div>

            <div className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              />
            </div>
        </nav>
    </header>

  )
}

export default Nav