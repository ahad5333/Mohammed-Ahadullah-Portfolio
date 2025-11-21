
import React from 'react';
import { HERO_CONTENT, PROFILE_IMAGE_URL } from '../constants';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 animate-fade-in">
      <div className="group">
        <img 
          src={PROFILE_IMAGE_URL}
          alt="Profile"
          onClick={onUnlock}
          className="cursor-pointer rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-accent shadow-lg transition-all duration-300 animate-subtle-pulse group-hover:animate-none group-hover:scale-105 group-hover:shadow-accent/40 dark:group-hover:shadow-dark-accent/40"
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-8 text-slate-800 dark:text-slate-50">
          {HERO_CONTENT.name}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mt-2">
          {HERO_CONTENT.title}
        </p>
         <button
            onClick={onUnlock}
            aria-label="View Portfolio"
            className="mt-10 inline-block border-2 border-accent text-accent dark:border-dark-accent dark:text-dark-accent font-semibold py-2 px-10 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-all duration-300"
        >
            View Portfolio
        </button>
      </div>
    </div>
  );
};

export default LockScreen;
