
import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_CONTENT, PROFILE_IMAGE_URL } from '../constants';
import { User, Award, Terminal, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

const About: React.FC = () => {
  const coreCompetencies = [
    "AWS Certified",
    "Business Analysis",
    "Power BI",
    "React / Node.js",
    "MySQL / MongoDB",
    "REST API Architecture"
  ];

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center [perspective:1000px]">
        {/* Left Side: Avatar Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex justify-center"
        >
          <TiltCard tiltAmount={10} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="Profile" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-transparent mix-blend-color-burn" />
          </TiltCard>
        </motion.div>

        {/* Right Side: Interactive Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white leading-snug">
            I'm a passionate Software Engineer based in India.
          </h3>

          {/* Glassmorphic Biography Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-accent">
                <Terminal className="w-5 h-5" />
                <h4 className="font-display font-bold text-slate-950 dark:text-white text-base">Full Stack Core</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {ABOUT_CONTENT.p1}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 text-[#a855f7]">
                <Award className="w-5 h-5" />
                <h4 className="font-display font-bold text-slate-950 dark:text-white text-base">Cloud & Analysis</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {ABOUT_CONTENT.p2}
              </p>
            </div>
          </div>

          {/* Key Competencies / Credentials Tag Cloud */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Focus & Credentials</h4>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((comp) => (
                <div 
                  key={comp} 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-accent/40 hover:text-accent dark:hover:text-accent transition-colors cursor-default"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  {comp}
                </div>
              ))}
            </div>
          </div>
          
          {/* Interactive Metric Cards */}
          <div className="grid grid-cols-2 gap-6 pt-2">
            <TiltCard tiltAmount={12} className="h-full">
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 flex flex-col items-center md:items-start hover:shadow-lg transition-shadow duration-500" style={{ transformStyle: 'preserve-3d' }}>
                <p className="text-4xl font-display font-bold text-accent" style={{ transform: 'translateZ(30px)' }}>4+</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2" style={{ transform: 'translateZ(20px)' }}>Years Experience</p>
              </div>
            </TiltCard>
            <TiltCard tiltAmount={12} className="h-full">
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/40 flex flex-col items-center md:items-start hover:shadow-lg transition-shadow duration-500" style={{ transformStyle: 'preserve-3d' }}>
                <p className="text-4xl font-display font-bold text-accent" style={{ transform: 'translateZ(30px)' }}>13</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2" style={{ transform: 'translateZ(20px)' }}>Projects Completed</p>
              </div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
