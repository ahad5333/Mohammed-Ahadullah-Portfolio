
import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_CONTENT, PROFILE_IMAGE_URL } from '../constants';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4"
        >
          <User className="w-4 h-4" />
          About Me
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white text-center"
        >
          My Story
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white dark:border-dark-card shadow-2xl aspect-square max-w-md mx-auto lg:mx-0">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="Profile" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
            I'm a passionate Software Engineer based in India.
          </h3>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>{ABOUT_CONTENT.p1}</p>
            <p>{ABOUT_CONTENT.p2}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <p className="text-3xl font-display font-bold text-accent">4+</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Years Experience</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <p className="text-3xl font-display font-bold text-accent">10+</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
