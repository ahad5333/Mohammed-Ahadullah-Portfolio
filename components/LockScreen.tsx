import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT, LOCKSCREEN_IMAGE_URL } from '../constants';
import TiltCard from './TiltCard';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/15 dark:bg-accent/10 blur-[80px] md:blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-indigo-500/15 dark:bg-indigo-500/10 blur-[80px] md:blur-[120px] animate-blob [animation-delay:2s]" />
        <div className="absolute top-[30%] right-[15%] w-60 h-60 md:w-80 md:h-80 rounded-full bg-rose-500/10 dark:bg-rose-500/5 blur-[60px] md:blur-[100px] animate-blob [animation-delay:4s]" />
      </div>

      {/* Main Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4 p-8 md:p-12 rounded-[2.5rem] bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/40 shadow-2xl text-center"
      >
        {/* Interactive 3D Avatar Profile Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <TiltCard tiltAmount={10} className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl cursor-pointer group">
            <img 
              src={LOCKSCREEN_IMAGE_URL}
              alt="Profile"
              onClick={onUnlock}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </TiltCard>
        </motion.div>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-4xl font-display font-bold mt-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.name}
        </motion.h1>

        {/* Title */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg font-display font-medium text-accent mt-2 tracking-wide"
        >
          {HERO_CONTENT.title}
        </motion.p>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-12 h-1 bg-slate-200 dark:bg-slate-800 mx-auto my-6 rounded-full"
        />

        {/* Tagline / Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed"
        >
          Welcome to my digital space. Click below to explore my projects, skills, and experience.
        </motion.p>

        {/* View Portfolio Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onUnlock}
          aria-label="View Portfolio"
          className="mt-8 w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-accent to-rose-600 hover:from-accent/90 hover:to-rose-600/90 text-white font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center gap-2 group transition-all duration-300"
        >
          <span className="font-display">View Portfolio</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LockScreen;
