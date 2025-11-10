
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LockScreen from './components/LockScreen';

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

  if (!isUnlocked) {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow container mx-auto px-6 md:px-12 py-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
