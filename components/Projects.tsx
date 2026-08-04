
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_CONTENT } from '../constants';
import { ExternalLink, Github, Layout, Sparkles, Code2, LineChart } from 'lucide-react';
import TiltCard from './TiltCard';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'AI & Machine Learning', 'Data & Analytics'];

  // Categorize projects dynamically
  const getProjectCategory = (project: typeof PROJECTS_CONTENT[0]) => {
    const title = project.title.toLowerCase();
    const techs = project.technologies.map(t => t.toLowerCase());

    if (
      techs.includes('tensorflow') || 
      techs.includes('scikit-learn') || 
      techs.includes('machine learning') || 
      techs.includes('deep learning') || 
      techs.includes('gemini api') || 
      techs.includes('tensorflow.js') ||
      title.includes('ai') || 
      title.includes('prediction') || 
      title.includes('fraud') || 
      title.includes('classifier')
    ) {
      return 'AI & Machine Learning';
    }

    if (
      techs.includes('streamlit') || 
      techs.includes('matplotlib') || 
      techs.includes('data analysis') || 
      title.includes('dashboard') || 
      title.includes('sales')
    ) {
      return 'Data & Analytics';
    }

    return 'Web Development';
  };

  const filteredProjects = PROJECTS_CONTENT.filter(project => {
    if (activeCategory === 'All') return true;
    return getProjectCategory(project) === activeCategory;
  });

  // Icon selector for filter buttons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development': return Code2;
      case 'AI & Machine Learning': return Sparkles;
      case 'Data & Analytics': return LineChart;
      default: return Layout;
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6"
          >
            <Layout className="w-4 h-4" />
            Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white"
          >
            Featured Work
          </motion.h2>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isActive 
                    ? 'bg-accent border-accent text-white shadow-lg shadow-accent/25' 
                    : 'bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Animated Grid Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 [perspective:1000px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <TiltCard className="group relative flex flex-col h-full bg-white dark:bg-dark-card rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/40 hover:shadow-2xl hover:shadow-accent/5 transition-shadow duration-500">
                  
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="flex gap-4" style={{ transform: 'translateZ(40px)' }}>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-4 bg-white text-slate-900 rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a 
                            href={project.repoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-4 bg-white text-slate-900 rounded-full hover:bg-accent hover:text-white transition-all duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-8 md:p-10" style={{ transformStyle: 'preserve-3d' }}>
                    <h3 
                      className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-accent transition-colors leading-tight"
                      style={{ transform: 'translateZ(35px)' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed text-sm md:text-base flex-1"
                      style={{ transform: 'translateZ(25px)' }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: 'translateZ(30px)' }}>
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3.5 py-1.5 text-xs font-semibold bg-slate-50 dark:bg-slate-950/80 text-slate-500 dark:text-slate-400 rounded-xl border border-slate-100 dark:border-slate-800/40 hover:border-accent/20 hover:text-accent transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
