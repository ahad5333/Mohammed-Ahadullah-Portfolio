
import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_CONTENT } from '../constants';
import { Briefcase, Terminal, GraduationCap, ShoppingBag, Database, LineChart } from 'lucide-react';
import TiltCard from './TiltCard';

const Experience: React.FC = () => {
  // Helper to map company names to custom Lucide icons
  const getExperienceIcon = (company: string) => {
    const c = company.toLowerCase();
    if (c.includes('freelance') || c.includes('self employed')) return Terminal;
    if (c.includes('teks')) return GraduationCap;
    if (c.includes('noon')) return ShoppingBag;
    if (c.includes('thenx')) return Database;
    if (c.includes('tp')) return LineChart;
    return Briefcase;
  };

  return (
    <section id="experience" className="py-20">
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4"
        >
          <Briefcase className="w-4 h-4" />
          Career Path
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white text-center"
        >
          Professional Journey
        </motion.h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-6xl mx-auto [perspective:1000px] px-4 md:px-0">
        
        {/* Center line for desktop, left line for mobile */}
        <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-16 relative">
          {EXPERIENCE_CONTENT.map((item, index) => {
            const IconComponent = getExperienceIcon(item.company);
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className="relative flex flex-col lg:flex-row items-center justify-between lg:even:flex-row-reverse w-full"
              >
                {/* Glowing Glass Icon Node */}
                <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-4 lg:top-8 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center z-20 text-accent hover:border-accent/40 hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content Card Wrapper */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full lg:w-[calc(50%-2.5rem)] pl-16 lg:pl-0"
                >
                  <TiltCard 
                    tiltAmount={5}
                    className="w-full bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500"
                  >
                    {/* Header Block */}
                    <div 
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"
                      style={{ transform: 'translateZ(25px)' }}
                    >
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors leading-tight">
                          {item.role}
                        </h3>
                        <p className="text-base font-semibold text-accent mt-1">
                          {item.company}
                        </p>
                      </div>
                      <span className="inline-block self-start sm:self-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                        {item.duration}
                      </span>
                    </div>

                    {/* Detailed bullet list */}
                    <ul 
                      className="space-y-3 mb-8 text-sm md:text-base"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {item.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed items-start">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Tag list */}
                    <div 
                      className="flex flex-wrap gap-2"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {item.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800/40 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:border-accent/30 hover:text-accent transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>

                {/* Empty Spacer to balance alignment on desktop */}
                <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
