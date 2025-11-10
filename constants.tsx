
import React from 'react';
import type { NavLink, SocialLink, ExperienceItem, ProjectItem, SkillCategory, Skill, TestimonialItem } from './types';

// --- HELPER ICONS (You can add more from a library like lucide-react or heroicons) ---

const IconGitHub: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const IconLinkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const IconWhatsapp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        <path d="M14.2 12.6c-.4-.2-2.1-1-2.4-1.2-.3-.1-.6-.1-.8.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1s-1.6-.6-3-1.8c-1.1-1-1.8-2.2-2-2.6-.3-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.5s-.9-2.2-1.3-3c-.4-.8-.7-.9-1-.9h-.5c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.6 4 6.3 5.5.9.4 1.5.6 2 .7.7.2 1.5.1 2.1-.1.6-.2 2-1 2.2-1.8.3-.9.3-1.6.2-1.8-.1-.3-.4-.4-.8-.6z"></path>
    </svg>
);


// --- SKILL ICONS (Add your own here) ---
const IconReact = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>;
const IconNodeJs = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 256 256"><path fill="#8CC84B" d="M128.311 251.622c-70.52 0-106.883-48.77-106.883-48.77V53.149l106.883-48.771 106.883 48.77v149.703s-36.363 48.77-106.883 48.77z"></path><path fill="#FFFFFF" d="m143.435 158.955 45.195-25.753-45.548-26.136.143 51.889zm-29.08-109.282-70.088 40.245v80.49l70.088 40.245 70.088-40.245v-80.49L114.355 49.673zm41.28 92.493-16.144-9.252-25.136 14.364V94.81l41.28-23.824v81.177z"></path></svg>;
const IconJavascript = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#F7DF1E" d="M0 0h24v24H0z"/><path d="M1.334 22.668h21.332V1.332H1.334v21.336zM11.998 12.18l-2.427-1.402-.002-2.802 5.567 3.214-.002-3.212 2.222-1.283v8.528l-5.362-3.1-2.43 1.403v2.803l5.568-3.215-.002 3.213-2.222 1.282V9.95z"/></svg>;
const IconPython = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#3776AB" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.22-.1-5.93-2.82-6.03-6.04.1-3.22 2.81-5.94 6.03-6.04h2.01v2.01h-2.01c-2.14.08-3.86 1.81-3.94 3.95.08 2.14 1.8 3.87 3.94 3.95h2.01v2.17h-2.01zm6.04-6.04c-.1 3.22-2.81 5.94-6.03 6.04h-2.01v-2.01h2.01c2.14-.08 3.86-1.81 3.94-3.95-.08-2.14-1.8-3.87-3.94-3.95h-2.01V5.8h2.01c3.22.1 5.93 2.82 6.03 6.04z"/><path fill="#FFD43B" d="M8.5 10H10v4H8.5zM14 10h1.5v4H14z"/></svg>;
const IconMongo = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#4DB33D" d="M16,14.8c-2.3-1.4-2.3-3.1,0-4.5c0.7-0.4,1.4-0.8,1.4-1.7c0-1.2-1.2-1.9-2.5-1.9c-1.6,0-2.8,0.9-2.8,2.3c0,0.8,0.5,1.2,1,1.5c-2.3,1.4-2.3,3.1,0,4.5c-0.5,0.3-1,0.7-1,1.5c0,1.4,1.2,2.3,2.8,2.3c1.3,0,2.5-0.7,2.5-1.9c0-0.9-0.7-1.3-1.4-1.7H16z"/><path fill="#39A139" d="M13.9,6.7c1.3,0,2.5,0.7,2.5,1.9c0,0.9-0.7,1.3-1.4,1.7c-2.3,1.4-2.3,3.1,0,4.5c0.7,0.4,1.4,0.8,1.4,1.7c0,1.2-1.2,1.9-2.5,1.9c-1.6,0-2.8-0.9-2.8-2.3c0-0.8,0.5-1.2,1-1.5c-1.8-1.1-1.8-2.7,0-3.8c-0.5-0.3-1-0.7-1-1.5C11.1,7.6,12.3,6.7,13.9,6.7z"/></svg>;
const IconDocker = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#2496ED" d="M21.93,12.2a4.44,4.44,0,0,0-2.7-4,1.42,1.42,0,0,0-1.1-.1A6.73,6.73,0,0,0,12.5,2.4,6.7,6.7,0,0,0,2.4,9.5a6.7,6.7,0,0,0,.6,3L2.3,13a1.42,1.42,0,0,0-.4,1,1.4,1.4,0,0,0,1.5,1.4H4v.1h.1V17H4v.1h.1v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1l.1.1v.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.-2.4a3.84,3.84,0,0,0-3.1-2.9,1.42,1.42,0,0,0-1.4.6,4.44,4.44,0,0,0-4,2.7A4.44,4.44,0,0,0,12.5,21.9a1.42,1.42,0,0,0,.6,1.4,3.84,3.84,0,0,0,2.9,3.1h2.5a3.84,3.84,0,0,0,3.1-2.9,1.42,1.42,0,0,0-.6-1.4,4.44,4.44,0,0,0-2.7-4Z"/></svg>;
const IconAws = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#FF9900" d="M12.44,14.65a2.5,2.5,0,0,0-2.45,0L5.22,12.8A2.52,2.52,0,0,0,6.4,9.65L9.9,12.2a2.49,2.49,0,0,0,2.54,0l3.5-2.55a2.52,2.52,0,0,0,1.18,3.15ZM10,14.65a2.5,2.5,0,0,0,0,2.45l2.45,4.77a2.5,2.5,0,0,0,3.67,0L18.5,17.1a2.5,2.5,0,0,0,0-2.45L15,10ZM13.56,9.1a2.5,2.5,0,0,0,2.45,0l4.77-2.45a2.5,2.5,0,0,0,0-3.67L16.01,.5a2.5,2.5,0,0,0-2.45,0L9,5.27a2.5,2.5,0,0,0,0,2.45Z"/></svg>;
const IconHtml5 = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#E34F26" d="M3,3h18v18H3V3z"/><path fill="#EF652A" d="M12,5v14h7.5L18,8h-6V5z"/><path fill="#EBEBEB" d="M12,10h-3l-0.25,3h3.25V10z M12,14h-3.5l-0.25,3h3.75V14z"/><path fill="#FFFFFF" d="M12,10v3h3.75l-0.25-3H12z M12,14v3h3.5l-0.25-3H12z"/></svg>;
const IconCss3 = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#1572B6" d="M3,3h18v18H3V3z"/><path fill="#33A9DC" d="M12,5v14h7.5L18,8h-6V5z"/><path fill="#EBEBEB" d="M12,10h-3l-0.25,3h3.25V10z M12,14h-3.5l-0.25,3h3.75V14z"/><path fill="#FFFFFF" d="M12,10v3h3.75l-0.25-3H12z M12,14v3h3.5l-0.25-3H12z"/></svg>;
const IconBootstrap = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#7952B3" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16.5,15.5h-9V8.5h9V15.5z"/><path fill="#FFFFFF" d="M15,10h-2v4h2V10z M12,10h-2v4h2V10z"/></svg>;
const IconTailwind = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#38BDF8" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17,14c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S18.66,14,17,14z M10,14c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S11.66,14,10,14z"/></svg>;
const IconExpress = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M3 3h18v18H3V3z" fill="#333333"/><path d="M6 10l3 3l-3 3" stroke="white" strokeWidth="2"/><path d="M13 10l-3 3l3 3" stroke="white" strokeWidth="2"/></svg>;
const IconMongoose = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#880000" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"/><path fill="white" d="M12 6l-4 4v4l4 4l4-4v-4z"/></svg>;
const IconMysql = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#00758F" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z"/><path fill="#F29111" d="M12.5,10.5H11V14h1.5c1.1,0,2-0.9,2-2S13.6,10.5,12.5,10.5z M10,6v9h5c2.21,0,4-1.79,4-4s-1.79-4-4-4H10z"/><path fill="white" d="M9,6H5v9h4V6z"/></svg>;


// --- NAVIGATION & SOCIALS ---

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/ahad5333', icon: IconGitHub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mohammed-ahadullah-962951200', icon: IconLinkedin },
  { name: 'WhatsApp', href: 'https://wa.me/971527853458', icon: IconWhatsapp },
];


// --- CONTENT - EDIT THIS SECTION ---

export const HERO_CONTENT = {
    name: "Mohammed Ahadullah",
    title: "Full-Stack Developer",
    subtitle: "I build innovative, user-centric applications, applying my analytical thinking and full-stack skills to contribute to the design and development of modern web solutions."
}

export const ABOUT_CONTENT = {
    p1: "Results-oriented Full Stack Web Developer with hands-on experience in building responsive web applications using React, Node.js, Express, and MongoDB. Skilled in integrating frontend design with backend logic, optimizing databases, and developing user-focused interfaces.",
    p2: "Recently certified in Business Analysis, Power BI, and MySQL, adding analytical and data visualization strength to web development. Passionate about cloud technology and continuous learning, with an AWS Solution Architect certification."
}

export const EXPERIENCE_CONTENT: ExperienceItem[] = [
    {
      role: 'Web Development Intern',
      company: 'Teks Academy',
      duration: 'Aug 2024 - Jan 2025',
      description: [
        'Developed a food delivery application, enhancing user experience and accessibility.',
        'Collaborated with a team to create an automation chatbot messaging app, streamlining communication.',
        'Designed and launched a bakery website, showcasing products and improving online presence.',
        'Gained hands-on experience in web development technologies and teamwork in a startup environment.'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'HTML5', 'CSS'],
    },
    {
        role: 'Data Entry & Product Matching Intern',
        company: 'ThenX (Remote)',
        duration: 'Feb 2023 - Feb 2024',
        description: [
          'Managed and validated FMCG product data for accurate e-commerce listings.',
          'Matched and categorized retail data to ensure reliable product catalogs.',
          'Strengthened remote communication and self-management skills in a dynamic startup environment.'
        ],
        technologies: ['Data Management', 'E-commerce', 'Quality Assurance'],
      },
      {
        role: 'Data Analyst – Google Help Center Project',
        company: 'Teleperformance, Hyderabad',
        duration: 'Jan 2022 - Jan 2023',
        description: [
          'Collaborated with the Google Help Center team to analyze and structure large volumes of data for chatbot model improvement.',
          'Partnered with MLOps teams to ensure verified datasets were passed into model pipelines, boosting NLP performance.',
          'Documented false positives and classification errors, supporting iterative model refinement.',
          'Recognized as "Employee of the Month" for high accuracy and effective collaboration.'
        ],
        technologies: ['Data Analysis', 'NLP', 'Chatbot Training', 'Quality Control'],
      },
];

export const PROJECTS_CONTENT: ProjectItem[] = [
    {
        title: 'E-commerce Website',
        description: 'A full-featured MERN stack e-commerce platform with product browsing, a shopping cart, and user authentication.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        imageUrl: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=800&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/E-Commerce-Website',
      },
      {
        title: 'Online Food Delivery App',
        description: 'A full-stack web application that allows users to browse restaurant menus, place orders, and track deliveries in real-time.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/FOOD-DELIVERY-APP',
      },
      {
        title: 'Netflix Clone',
        description: 'A feature-rich clone of the Netflix streaming service, including user authentication, browsing by category, and a dynamic UI. Built with React and Firebase.',
        technologies: ['React', 'Firebase', 'Styled Components'],
        imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/Netflix-Clone',
      },
      {
        title: 'AI Summarizer',
        description: 'An application leveraging AI to provide concise summaries of long articles or text, built with a modern React frontend.',
        technologies: ['React', 'Vite', 'AI API', 'Tailwind CSS'],
        imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=800&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/AI-Summarizer',
      },
];

export const TESTIMONIALS_CONTENT: TestimonialItem[] = [
  {
    quote: "Working with Mohammed was an absolute pleasure. His technical expertise and dedication to our project were instrumental in its success. He's a proactive problem-solver and a great team player.",
    name: "Jane Doe",
    title: "Project Manager, Teks Academy.",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "Mohammed's ability to quickly grasp complex requirements and translate them into clean, efficient code is remarkable. He consistently delivered high-quality work ahead of schedule.",
    name: "John Smith",
    title: "Lead Developer, Teleperformance.",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    quote: "The full-stack application Mohammed built for us exceeded all expectations. His attention to detail in both frontend and backend development is top-notch. I would highly recommend him.",
    name: "Emily White",
    title: "Lead Operations, Teks Academy",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];


// Fix: Add SKILLS_CONTENT export to resolve import error in Skills.tsx
export const SKILLS_CONTENT: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: IconJavascript },
      { name: 'React', icon: IconReact },
      { name: 'HTML5', icon: IconHtml5 },
      { name: 'CSS3', icon: IconCss3 },
      { name: 'Tailwind CSS', icon: IconTailwind },
      { name: 'Bootstrap', icon: IconBootstrap },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: IconNodeJs },
      { name: 'Express', icon: IconExpress },
      { name: 'Python', icon: IconPython },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', icon: IconMongo },
      { name: 'Mongoose', icon: IconMongoose },
      { name: 'MySQL', icon: IconMysql },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: IconDocker },
      { name: 'AWS', icon: IconAws },
    ],
  },
];
