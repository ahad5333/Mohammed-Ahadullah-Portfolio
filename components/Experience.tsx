
import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_CONTENT } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
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

      <div className="max-w-4xl mx-auto">
        {EXPERIENCE_CONTENT.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-8 pb-12 border-l border-slate-200 dark:border-dark-border last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-dark-bg shadow-lg shadow-accent/50"></div>
            
            <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
                    {item.company}
                  </p>
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {item.duration}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {item.description.map((point, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
