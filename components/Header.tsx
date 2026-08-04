import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS, HERO_CONTENT, SOCIAL_LINKS } from '../constants';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0.1 }
    );

    const sections = ['hero', 'about', 'experience', 'projects', 'testimonials', 'skills', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
        setIsOpen(false);
        return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      {/* Floating Capsule Container */}
      <div className="flex items-center justify-between w-full max-w-5xl bg-white/70 dark:bg-slate-950/75 border border-slate-200/50 dark:border-slate-800/40 rounded-full px-6 py-2.5 shadow-xl backdrop-blur-md transition-all duration-300">
        
        {/* Logo */}
        <motion.a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#hero')}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight"
        >
          {HERO_CONTENT.name.split(' ')[0]}<span className="text-accent">.</span>
        </motion.a>

        {/* Center Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavHighlight"
                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-lg shadow-accent/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent hover:border-slate-200/30 transition-colors"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          {/* Mobile Menu Trigger */}
          <button 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-full text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Capsule-integrated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-16 left-4 right-4 bg-white/95 dark:bg-slate-950/95 border border-slate-200/60 dark:border-slate-850/60 rounded-[2rem] p-6 shadow-2xl backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-2xl font-display font-bold transition-colors ${
                      isActive ? 'text-accent' : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800/80 my-2" />
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl text-slate-500 hover:text-accent transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;