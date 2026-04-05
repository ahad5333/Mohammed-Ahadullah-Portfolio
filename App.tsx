
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LockScreen from './components/LockScreen';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-500">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lockscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <LockScreen onUnlock={handleUnlock} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="flex-grow">
              <Hero />
              <div className="container mx-auto px-6 md:px-12 space-y-32 py-20">
                <About />
                <Experience />
                <Projects />
                <Testimonials />
                <Skills />
                <Contact />
              </div>
            </main>
            <footer className="py-10 text-center border-t border-slate-200 dark:border-dark-border text-slate-500 dark:text-slate-400">
              <p>© {new Date().getFullYear()} Mohammed Ahadullah. Built with passion.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
