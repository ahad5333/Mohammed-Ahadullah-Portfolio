
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_CONTENT } from '../constants';
import type { ProjectItem } from '../types';

const IconGitHub: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const IconExternalLink: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const SpinnerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
);

const FeaturedProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentCardRef = cardRef.current;
        if (currentCardRef) {
            observer.observe(currentCardRef);
        }

        return () => {
            if (currentCardRef) {
                observer.unobserve(currentCardRef);
            }
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
            {/* Featured Banner */}
            <div className="absolute top-7 -right-12 z-30 rotate-45 bg-accent text-white font-bold py-1.5 px-16 shadow-lg shadow-black/20 border-y border-white/20 text-sm tracking-widest uppercase">
                Featured
            </div>

            {/* Image Background */}
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700">
                {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <SpinnerIcon className="animate-spin h-10 w-10 text-slate-500 dark:text-slate-400" />
                    </div>
                )}
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                />
            </div>
       
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 md:opacity-95 pointer-events-none" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
                <div className="max-w-4xl">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                    <p className="text-lg text-slate-200 mb-6 line-clamp-3 md:line-clamp-none max-w-2xl leading-relaxed font-light">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-medium px-3 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 md:gap-6">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-accent/30">
                                <IconExternalLink className="h-5 w-5" />
                                Visit Website
                            </a>
                        )}
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" 
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/50 px-6 py-3 rounded-full font-bold transition-all">
                                <IconGitHub className="h-5 w-5" />
                                View Source
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentCardRef = cardRef.current;
        if (currentCardRef) {
            observer.observe(currentCardRef);
        }

        return () => {
            if (currentCardRef) {
                observer.unobserve(currentCardRef);
            }
        };
    }, []);

    const animationStyle: React.CSSProperties = {
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'backwards',
    };

    return (
        <div 
            ref={cardRef}
            className={`group flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10 dark:hover:shadow-rose-400/10 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={animationStyle}
        >
            <div className="relative w-full h-52 md:h-60 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                 {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <SpinnerIcon className="animate-spin h-8 w-8 text-slate-500 dark:text-slate-400" />
                    </div>
                )}
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Overlay for card */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50 mb-2">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                         <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors">
                            <IconExternalLink className="h-4 w-4" />
                            Live Demo
                        </a>
                    )}
                    {project.repoUrl && (
                         <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                            <IconGitHub className="h-4 w-4" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
  const [featuredProject, ...otherProjects] = PROJECTS_CONTENT;

  return (
    <section id="projects" className="py-20 md:py-32">
        <div className="text-center mb-16 animate-fade-in-up">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
             <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                I build things for the web. Here are some of my recent full-stack projects.
             </p>
        </div>
      
      {/* Featured Project Banner */}
      {featuredProject && (
        <div className="mb-12 md:mb-16">
            <FeaturedProjectCard project={featuredProject} />
        </div>
      )}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 auto-rows-fr">
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
