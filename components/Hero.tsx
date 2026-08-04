import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HERO_CONTENT, SOCIAL_LINKS, PROFILE_IMAGE_URL, RESUME_URL } from '../constants';
import { ArrowRight, Download, Code2, Server, Cloud } from 'lucide-react';
import TiltCard from './TiltCard';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Cloud Solutions Architect",
    "AI Integration Specialist"
  ];

  // Auto-typing effect
  useEffect(() => {
    let timer: number;
    const currentString = roles[stringIndex];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === currentString) {
      timer = window.setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentString.substring(0, currentText.length - 1)
            : currentString.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, stringIndex]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background radial glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full filter blur-[120px] translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Available for new projects
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Hi, I'm <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">{HERO_CONTENT.name.split(' ')[0]}</span>
            </h1>

            {/* Auto-Typing Role Title */}
            <div className="h-10 md:h-12 flex items-center">
              <p className="text-xl md:text-3xl font-display font-medium text-slate-700 dark:text-slate-300">
                {currentText}
                <span className="inline-block w-[3px] h-[22px] md:h-[30px] bg-accent ml-1 animate-pulse" />
              </p>
            </div>

            {/* Subtitle / Description */}
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full">
              <a 
                href="#contact"
                onClick={handleContactClick}
                className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-slate-950/10 dark:shadow-none"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200/40 dark:shadow-none"
              >
                Resume
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-6">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-900 hover:bg-accent/10 dark:hover:bg-accent/10 rounded-2xl text-slate-500 hover:text-accent transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Profile Photo and Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center relative [perspective:1000px]"
          >
            {/* Interactive 3D Avatar Card */}
            <TiltCard tiltAmount={10} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl transform lg:rotate-2">
              <img 
                src="https://github.com/ahad5333.png"
                alt={HERO_CONTENT.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </TiltCard>

            {/* Floating Glassmorphic Badges */}
            {/* React Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 left-4 md:-left-4 flex items-center gap-2 bg-white/75 dark:bg-slate-900/85 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/40"
            >
              <div className="p-1.5 rounded-lg bg-[#61dafb]/10 text-[#61dafb]">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">React.js</span>
            </motion.div>

            {/* Node.js Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-1/2 -right-6 flex items-center gap-2 bg-white/75 dark:bg-slate-900/85 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/40"
            >
              <div className="p-1.5 rounded-lg bg-[#8CC84B]/10 text-[#8CC84B]">
                <Server className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Node.js</span>
            </motion.div>

            {/* AWS Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 left-6 flex items-center gap-2 bg-white/75 dark:bg-slate-900/85 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-800/40"
            >
              <div className="p-1.5 rounded-lg bg-[#FF9900]/10 text-[#FF9900]">
                <Cloud className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">AWS</span>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;