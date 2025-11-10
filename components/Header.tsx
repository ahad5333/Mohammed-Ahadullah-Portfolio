import React, { useState } from 'react';
import { NAV_LINKS, HERO_CONTENT, SOCIAL_LINKS } from '../constants';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);
const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-slate-800 dark:text-slate-50 hover:text-accent dark:hover:text-dark-accent transition-colors">
            {HERO_CONTENT.name.split(' ')[0]}
          </a>
          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isExternal = link.href.startsWith('http');
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-50 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
            <div className="flex items-center gap-4">
               {SOCIAL_LINKS.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-800 dark:text-slate-50 focus:outline-none">
                {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={toggleMenu}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-50 transition-colors text-lg"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;