import React from 'react';
import { HERO_CONTENT } from '../constants';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  // Use the professional photo from GitHub
  const avatarUrl = "https://github.com/ahad5333.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 animate-fade-in">
      <div 
        className="cursor-pointer group"
        onClick={onUnlock}
        aria-label="Enter portfolio"
        role="button"
        tabIndex={0}
      >
        <img 
          src={avatarUrl} 
          alt="Profile"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-accent shadow-lg transition-all duration-300 animate-subtle-pulse group-hover:animate-none group-hover:scale-105 group-hover:shadow-accent/40 dark:group-hover:shadow-dark-accent/40"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-8 text-slate-800 dark:text-slate-50 transition-colors duration-300 group-hover:text-accent dark:group-hover:text-dark-accent">
          {HERO_CONTENT.name}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mt-2">
          {HERO_CONTENT.title}
        </p>
         <p className="text-md text-slate-500 dark:text-slate-400 mt-8 animate-pulse">
            Click my picture to view my portfolio
        </p>
      </div>
    </div>
  );
};

export default LockScreen;