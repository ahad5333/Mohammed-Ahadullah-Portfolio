
import React from 'react';
import { motion } from 'motion/react';
import { SKILLS_CONTENT } from '../constants';
import { Cpu } from 'lucide-react';
import TiltCard from './TiltCard';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4"
        >
          <Cpu className="w-4 h-4" />
          Tech Stack
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white text-center"
        >
          Skills & Technologies
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 [perspective:1000px]">
        {SKILLS_CONTENT.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="h-full"
          >
            <TiltCard 
              tiltAmount={6}
              className="h-full bg-white dark:bg-slate-900/60 p-6 rounded-[2rem] border border-slate-200/50 dark:border-slate-800/40 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between"
            >
              <div style={{ transformStyle: 'preserve-3d' }}>
                <h3 
                  className="text-lg font-display font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800/60 pb-3"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {category.name}
                </h3>
                <div 
                  className="grid grid-cols-2 gap-4"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group">
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 group-hover:bg-accent/15 border border-transparent group-hover:border-accent/20 transition-all duration-300">
                        <skill.icon className="w-7 h-7 text-slate-600 dark:text-slate-400 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
