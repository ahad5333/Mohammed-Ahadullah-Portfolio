
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.FC<{ className?: string }>;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
