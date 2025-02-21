import { useState, useContext } from 'react';
import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/headerLogo.png";
import { LocaleContext, useLocale } from '../LocaleContext';

function Nav() {
  const { locale, messages, switchLocale } = useLocale() || {};
  const [langOpen, setlangOpen] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);

  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('LocaleContext must be used within a LocaleProvider');
  }

  const changeLocale = (newLocale: string) => {
    if (switchLocale) switchLocale(newLocale);
  };

  // Adding state for menu
  const langMenu = () => {
    setlangOpen(prevState => !prevState);
  };

  const sectionMenu = () => {
    setmenuOpen(prevState => !prevState);
  };


  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {messages.navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="lang-button"
              aria-expanded={langOpen}
              aria-haspopup="true"
              onClick={langMenu}
            >
              Lang
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {langOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="lang-button"
            >
              <div className="py-1" role="none">
                <button
                  onClick={() => changeLocale('ar')}
                  type="submit"
                  className="block w-full px-4 py-2 text-right text-sm text-gray-700"
                  role="menuitem"
                  id="menu-item-1"
                >
                  عربية
                </button>
                <button
                  onClick={() => changeLocale('he')}
                  type="submit"
                  className="block w-full px-4 py-2 text-right text-sm text-gray-700"
                  role="menuitem"
                  id="menu-item-2"
                >
                  עברית
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="hidden max-lg:block ">
          <button              
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={sectionMenu}
            >
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </button>
          {menuOpen && (
            <div 
              className=" text-right absolute right-0 z-40 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1 z-40" role="none">
                <ul className="flex flex-col relative z-40">
                  {messages.navLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray px-5">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;




