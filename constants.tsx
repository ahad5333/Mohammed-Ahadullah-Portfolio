
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
const IconTypescript = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#3178C6" d="M0 0h24v24H0z"/><path d="M1.334 22.668h21.332V1.332H1.334v21.336zM17.135 15.352c.234.398.544.733.918 1.002.378.261.815.394 1.309.394.494 0 .918-.119 1.272-.358.354-.238.531-.614.531-1.127 0-.301-.064-.543-.191-.726-.127-.183-.342-.358-.644-.523-.301-.165-.724-.344-1.267-.534-.946-.334-1.636-.71-2.072-1.127-.432-.416-.648-1.004-.648-1.762 0-.825.291-1.472.871-1.942.584-.471 1.365-.707 2.342-.707 1.002 0 1.83.25 2.484.75.648.498 1.01 1.157 1.082 1.976h-2.146c-.053-.41-.186-.714-.401-.913-.21-.2-.553-.299-1.026-.299-.444 0-.8.093-1.066.279-.267.186-.399.458-.399.814 0 .285.083.51.248.674.166.165.421.314.767.45.344.135.834.33 1.468.583.829.324 1.455.619 1.88.884.425.265.733.593.924.981.192.388.288.874.288 1.458 0 .973-.357 1.745-1.073 2.316-.716.57-1.745.856-3.087.856-1.139 0-2.074-.249-2.804-.746-.73-.5-1.189-1.229-1.378-2.188h2.152v.004zm-5.918-6.173h-2.527V21.46h-2.253V9.179H3.92v-1.89h10.975v1.89h.002z"/></svg>;
const IconFlask = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 4V2H7V4L10 7.5V11C10 11 10.02 11.23 10.07 11.5L4 18.5V22H20V18.5L13.93 11.5C13.98 11.23 14 11 14 11V7.5L17 4ZM18.06 20H5.94L11 14.15V11H13V14.15L18.06 20ZM12 9.4L10 7.07V4H14V7.07L12 9.4Z" fill="currentColor"/>
  </svg>
);
const IconMachineLearning = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM11 16H13V14H11V16ZM11 12H13V7H11V12Z" fill="currentColor"/>
    <path d="M18 10L19 11L20 10L19 9L18 10ZM5 14L4 13L3 14L4 15L5 14ZM12 22V20M12 4V2M20 12H22M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconPython = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.89 0C5.32 0 5.67 2.85 5.67 2.85V5.59H12.01V6.2H3.59C1.19 6.2 0 7.58 0 10.15c0 2.57 1.95 3.1 3.59 3.1h2.15v-3.05c0-2.39 1.99-4.27 4.54-4.27h4.54V2.85S15.17 0 11.89 0zM8.5 2.1c.42 0 .76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76zM12.11 24c6.57 0 6.22-2.85 6.22-2.85v-2.74H12v-.61h8.41c2.4 0 3.59-1.38 3.59-3.95 0-2.57-1.95-3.1-3.59-3.1h-2.15v3.05c0 2.39-1.99 4.27-4.54 4.27H9.2v3.08S8.83 24 12.11 24zm3.39-2.1a.76.76 0 1 1 0-1.52.76.76 0 0 1 0 1.52z" fill="#3776AB"/>
    <path d="M11.89 0C5.32 0 5.67 2.85 5.67 2.85V5.59H12.01V6.2H3.59C1.19 6.2 0 7.58 0 10.15c0 2.57 1.95 3.1 3.59 3.1h2.15v-3.05c0-2.39 1.99-4.27 4.54-4.27h4.54V2.85S15.17 0 11.89 0zM8.5 2.1c.42 0 .76.34.76.76s-.34.76-.76.76-.76-.34-.76-.76.34-.76.76-.76z" fill="#3776AB"/>
    <path d="M12.11 24c6.57 0 6.22-2.85 6.22-2.85v-2.74H12v-.61h8.41c2.4 0 3.59-1.38 3.59-3.95 0-2.57-1.95-3.1-3.59-3.1h-2.15v3.05c0 2.39-1.99 4.27-4.54 4.27H9.2v3.08S8.83 24 12.11 24zm3.39-2.1a.76.76 0 1 1 0-1.52.76.76 0 0 1 0 1.52z" fill="#FFD43B"/>
  </svg>
);
const IconMongo = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#4DB33D" d="M16,14.8c-2.3-1.4-2.3-3.1,0-4.5c0.7-0.4,1.4-0.8,1.4-1.7c0-1.2-1.2-1.9-2.5-1.9c-1.6,0-2.8,0.9-2.8,2.3c0,0.8,0.5,1.2,1,1.5c-2.3,1.4-2.3,3.1,0,4.5c-0.5,0.3-1,0.7-1,1.5c0,1.4,1.2,2.3,2.8,2.3c1.3,0,2.5-0.7,2.5-1.9c0-0.9-0.7-1.3-1.4-1.7H16z"/><path fill="#39A139" d="M13.9,6.7c1.3,0,2.5,0.7,2.5,1.9c0,0.9-0.7,1.3-1.4,1.7c-2.3,1.4-2.3,3.1,0,4.5c0.7,0.4,1.4,0.8,1.4,1.7c0,1.2-1.2,1.9-2.5,1.9c-1.6,0-2.8-0.9-2.8-2.3c0-0.8,0.5-1.2,1-1.5c-1.8-1.1-1.8-2.7,0-3.8c-0.5-0.3-1-0.7-1-1.5C11.1,7.6,12.3,6.7,13.9,6.7z"/></svg>;
const IconDocker = ({ className = "h-12 w-12" }) => <svg className={className} viewBox="0 0 24 24"><path fill="#2496ED" d="M21.93,12.2a4.44,4.44,0,0,0-2.7-4,1.42,1.42,0,0,0-1.1-.1A6.73,6.73,0,0,0,12.5,2.4,6.7,6.7,0,0,0,2.4,9.5a6.7,6.7,0,0,0,.6,3L2.3,13a1.42,1.42,0,0,0-.4,1,1.4,1.4,0,0,0,1.5,1.4H4v.1h.1V17H4v.1h.1v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1v.1H4v.1h.1l.1.1v.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.1l.1.1h.-2.4a3.84,3.84,0,0,0-3.1-2.9,1.42,1.42,0,0,0-1.4.6,4.44,4.44,0,0,0-4,2.7A4.44,4.44,0,0,0,12.5,21.9a1.42,1.42,0,0,0,.6,1.4,3.84,3.84,0,0,0,2.9,3.1h2.5a3.84,3.84,0,0,0,3.1-2.9,1.42,1.42,0,0,0-.6-1.4,4.44,4.44,0,0,0-2.7-4Z"/></svg>;
const IconAws = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.66 16.14c-1.39 0-2.43-.28-3.13-.84a2.91 2.91 0 0 1-1.04-2.3c0-.98.37-1.74 1.12-2.28 1.05-.75 2.53-.75 4.41-.75h.69v-.53c0-.57-.06-.97-.19-1.21-.2-.36-.61-.54-1.22-.54-.6 0-.96.15-1.1.44-.1.21-.15.52-.16.94l-2.01-.19c.1-1.01.44-1.76 1.05-2.24A4.1 4.1 0 0 1 12.16 6c1.32 0 2.29.32 2.91.95.62.63.93 1.55.93 2.76v5.82h-1.81v-1.12c-.52.88-1.41 1.33-2.67 1.33h.14zm.44-1.63c.69 0 1.2-.2 1.52-.61a2.31 2.31 0 0 0 .5-1.57v-.53h-.62c-1.26 0-2.13.06-2.59.18-.46.12-.8.32-1.01.6-.21.28-.32.61-.32.98 0 .43.14.77.42 1.01.28.24.65.36 1.1.36v-.42zM12 0C5.372 0 0 5.372 0 12c0 1.38.232 2.704.661 3.94l1.396-.465A10.457 10.457 0 0 1 1.5 12c0-5.799 4.701-10.5 10.5-10.5S22.5 6.201 22.5 12c0 1.11-.173 2.179-.494 3.183l1.439.421A11.944 11.944 0 0 0 24 12c0-6.628-5.372-12-12-12z" fill="#232F3E"/>
    <path d="M22.04 15.18c-3.23 2.05-7.39 3.09-12.04 3.09-2.95 0-5.73-.42-8.31-1.26l-.41 1.39a25.462 25.462 0 0 0 8.72 1.47c4.86 0 9.17-1.1 12.59-3.29l-.55-1.4z" fill="#FF9900"/>
    <path d="M1.29 17.01l.92 1.94 1.84-1.25L1.29 17.01z" fill="#FF9900"/>
  </svg>
);
const IconHtml5 = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0H22.5L20.1 21.3L12 24L3.9 21.3L1.5 0Z" fill="#E34F26"/>
    <path d="M12 2.18V21.78L18.42 19.64L20.25 3.32H12V2.18Z" fill="#EF652A"/>
    <path d="M12 11.08H8.5L8.27 8.32H12V6.14H6.05L6.5 11.08H12V13.26H8.91L9 14.41L12.18 15.27V13.26L12 11.08Z" fill="#EBEBEB"/>
    <path d="M12 11.08V8.32H15.73L15.39 12.12L12 13.04V15.25L17.5 13.5L18.14 6.14H12V11.08Z" fill="white"/>
  </svg>
);
const IconCss3 = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 0H22.5L20.1 21.3L12 24L3.9 21.3L1.5 0Z" fill="#1572B6"/>
    <path d="M12 2.18V21.78L18.42 19.64L20.25 3.32H12V2.18Z" fill="#33A9DC"/>
    <path d="M12 11.08H15.34L15.71 8.32H12V6.14H18.14L17.5 13.5L12 15.25V13.04L15.39 12.12L12 11.08Z" fill="white"/>
    <path d="M12 11.08H8.5L8.27 8.32H12V6.14H6.05L6.5 11.08H12V13.26H8.91L9 14.41L12.18 15.27V13.26L12 11.08Z" fill="#EBEBEB"/>
  </svg>
);
const IconBootstrap = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6.09v11.83a6.09 6.09 0 0 1-6.09 6.09H6.09A6.09 6.09 0 0 1 0 17.91V6.09A6.09 6.09 0 0 1 6.09 0h11.83A6.09 6.09 0 0 1 24 6.09z" fill="#7952B3"/>
    <path d="M7.14 16h3.42a2.3 2.3 0 0 0 2.4-2.18c0-1.12-.66-1.88-1.57-2 .76-.23 1.25-.97 1.25-1.85a2 2 0 0 0-2.2-2H7.14V16zm1.72-6.52h1.6a.65.65 0 1 1 0 1.3h-1.6v-1.3zm0 3.65h1.77a.78.78 0 1 1 0 1.56H8.86v-1.56z" fill="white"/>
  </svg>
);
const IconTailwind = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8"/>
  </svg>
);
const IconExpress = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0H0v24h24V0z" fill="white"/>
    <path d="M10.43 14.16c0 .41-.03.79-.1 1.15-.06.36-.18.66-.35.92-.17.25-.4.45-.69.6-.29.14-.65.21-1.07.21-.4 0-.74-.08-1.01-.24-.28-.16-.49-.37-.65-.65-.15-.27-.26-.59-.31-.95a5.55 5.55 0 0 1-.08-1.03c0-.42.03-.81.08-1.16a3.55 3.55 0 0 1 .3-.99c.16-.29.38-.51.66-.67.27-.16.62-.24 1.05-.24s.77.08 1.04.24c.26.16.48.38.64.66.16.27.27.59.33.95.06.35.09.73.09 1.15zM12 0h12v24H12V0z" fill="#000"/>
    <path d="M21.2 12.5a3.4 3.4 0 0 0-1.12-.86 3.48 3.48 0 0 0-1.52-.3c-.63 0-1.16.12-1.57.37-.4.25-.72.58-.94.97-.21.4-.36.85-.43 1.34a8.33 8.33 0 0 0-.11 1.48c0 .54.04 1.01.12 1.43a4.13 4.13 0 0 0 .42 1.25c.21.37.52.66.9.87.38.2.87.31 1.45.31 1.23 0 2.2-.47 2.91-1.4l-.53-.33a2.3 2.3 0 0 1-1.02.83 2.1 2.1 0 0 1-1.28.08c-.37-.06-.68-.21-.92-.45a1.86 1.86 0 0 1-.5-.85 6.45 6.45 0 0 1-.16-1.53c0-.06 0-.13.01-.21h4.4v-.48c0-.98-.12-1.76-.36-2.33zm-4.32 2.12c.03-.43.12-.8.25-1.1.13-.3.33-.54.58-.7.25-.17.58-.26.98-.26.68 0 1.15.22 1.41.67.26.44.4 1.01.42 1.7h-3.64v-.31z" fill="white"/>
  </svg>
);
const IconMongoose = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#880000"/>
    <path d="M18.81 12.33l-1.99-1.92-1.44 1.39-1.35-1.31L12.04 12.4l-1.99-1.92.57-4L8.3 8.8 6.31 6.89l-1.92 1.99L6.31 10.8l-1.92 1.99 1.99 1.92.36-2.48 2.05 1.98.05-.34 2-.01 1.94 1.87L14.7 14.1l1.35 1.3 2.02-1.95.74.18z" fill="white"/>
  </svg>
);
const IconMysql = ({ className = "h-12 w-12" }) => (
  <svg className={className} viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M448 171.1c-15.1-4.7-29.6-9.1-44.1-13.6l-5.1 16.5c14.1 4.4 28.1 8.8 42.2 13.2l7-16.1zM5.3 171.1l7 16.1c14.1-4.4 28.1-8.8 42.2-13.2l-5.1-16.5c-14.5 4.5-29 8.9-44.1 13.6z" fill="#00758F"/>
    <path d="M403.9 157.5c-14.5-4.5-29-8.9-44.1-13.6l-5.1 16.5c14.1 4.4 28.1 8.8 42.2 13.2l7-16.1zM44.1 143.9c-15.1 4.7-29.6 9.1-44.1 13.6l7 16.1c14.1-4.4 28.1-8.8 42.2-13.2l-5.1-16.5z" fill="#F29111"/>
    <path d="M224 48c-106 0-192 86-192 192s86 192 192 192 192-86 192-192S330 48 224 48zm0 336c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144z" fill="#00758F"/>
    <path d="M224 96c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 240c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z" fill="#F29111"/>
  </svg>
);


// --- NAVIGATION & SOCIALS ---

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const RESUME_URL = "https://drive.google.com/file/d/1PD4kIkAqAY82bcFEUzPa0Rrkl3P0JW83/view?usp=sharing";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/ahad5333', icon: IconGitHub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mohammed-ahadullah-962951200', icon: IconLinkedin },
  { name: 'WhatsApp', href: 'https://wa.me/971527853458', icon: IconWhatsapp },
];

export const PROFILE_IMAGE_URL = "https://github.com/ahad5333.png";

// --- CONTENT - EDIT THIS SECTION ---

export const HERO_CONTENT = {
    name: "Mohammed Ahadullah",
    title: "Software Engineer",
    subtitle: "Crafting high-performance, scalable web solutions with a focus on user experience and architectural excellence. Specializing in modern full-stack development."
}

export const ABOUT_CONTENT = {
    p1: "Results-oriented Full Stack Web Developer with hands-on experience in building responsive web applications using React, Node.js, Express, and MongoDB. Skilled in integrating frontend design with backend logic, optimizing databases, and developing user-focused interfaces.",
    p2: "Recently certified in Business Analysis, Power BI, and MySQL, adding analytical and data visualization strength to web development. Passionate about cloud technology and continuous learning, with an AWS Solution Architect certification."
}

export const EXPERIENCE_CONTENT: ExperienceItem[] = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Teks Academy',
    duration: 'May 2025 – Oct 2025',
    description: [
      'Developed the complete frontend of a food delivery web application using React.js and Tailwind CSS — including landing pages, menu browsing, cart, and order tracking — with a focus on responsiveness and usability.',
      'Built the UI for an automation chatbot messaging application, designing conversation flows, message components, and real-time state management using React Hooks.',
      'Designed and launched a fully responsive bakery business website with dynamic cart, WhatsApp/email order integration, and real-time pricing display.',
      'Owned frontend features end-to-end — from wireframe to production — in a fast-paced startup environment.'
    ],
    technologies: [
      'React.js', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'React Hooks', 'Responsive Design'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Noon',
    duration: 'May 2024 – Apr 2025',
    description: [
      'Built and maintained responsive React.js frontend features for a high-traffic e-commerce platform, consistently delivering pixel-perfect UI across devices and screen sizes.',
      'Developed key user-facing flows including JWT-based login/signup, product listings, shopping cart, checkout, and admin dashboards.',
      'Reduced frontend load times by approximately 30% through lazy loading, component-level code splitting, and efficient state management.',
      'Integrated third-party payment gateways and authentication SDKs into the React frontend.',
      'Collaborated with backend engineers and UX designers across Agile sprint cycles.'
    ],
    technologies: [
      'React.js', 'JavaScript', 'JWT', 'Performance Optimization', 'Agile', 'Third-party Integration'
    ]
  },
  {
    role: 'Data Management & Automation (Remote)',
    company: 'THENX Digital',
    duration: 'Feb 2023 – Apr 2024',
    description: [
      'Worked with product and tech teams on data accuracy improvements affecting frontend product displays.',
      'Automated repetitive data tasks using Python scripts, reducing manual workload by 40%.'
    ],
    technologies: [
      'Python', 'Automation', 'Data Management', 'Remote Collaboration'
    ]
  },
  {
    role: 'Data Analyst',
    company: 'Teleperformance — Google Help Center Project',
    duration: 'Jul 2022 – Dec 2022',
    description: [
      'Structured and validated datasets used to improve chatbot UI/UX accuracy.',
      'Awarded Employee of the Month.'
    ],
    technologies: [
      'Data Analysis', 'Data Validation', 'Chatbot UI/UX', 'MLOps Support'
    ]
  }
];

export const PROJECTS_CONTENT: ProjectItem[] = [
      {
        title: 'Naufel Bakers',
        description: 'A modern, responsive bakery website featuring a delightful product gallery, seamless online ordering system, and an engaging user interface designed to capture the warmth of handcrafted pastries.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        imageUrl: 'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=1000&auto=format&fit=crop',
        liveUrl: 'https://naufel-bakers-website.vercel.app/',
        repoUrl: 'https://github.com/ahad5333/Naufel-Bakers',
      },
      {
        title: 'House Price Prediction System',
        description: 'A machine learning-based application that predicts real estate prices based on various features like location, square footage, and amenities, helping users make informed property decisions.',
        technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
        imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/House-price-prediction-system',
      },
      {
        title: 'Flavour Fleet India',
        description: 'A full-stack web application for food delivery that allows users to browse restaurant menus, place orders, and track deliveries in real-time.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
        imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/FlavourFleetIndia',
      },
      {
        title: 'AI Traffic Intelligence System',
        description: 'An advanced AI-powered system designed to analyze traffic patterns, detect anomalies, and optimize flow using real-time data processing and computer vision techniques.',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
        imageUrl: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/AI-Traffic-Intelligence-System',
      },
      {
        title: 'AI Summarizer(Personal Chat Bot)',
        description: 'An application leveraging AI to provide concise summaries of long articles or text, built with a modern React frontend.',
        technologies: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/personal-chat-bot',
      },
      {
        title: 'QuickBite',
        description: 'A food ordering application where users can order items from a menu, featuring an admin panel for real-time order status updates.',
        technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/QuickBite',
      },
      {
        title: 'ShopVista',
        description: 'A comprehensive full-stack e-commerce platform featuring product browsing, shopping cart functionality, and a secure checkout process.',
        technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
        imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/ShopVista----Full-Stack-Web-Application',
      },
      {
        title: 'VociAi',
        description: 'An AI-powered application that transforms text into high-quality voice audio, utilizing modern web technologies for a seamless user experience.',
        technologies: ['TypeScript', 'React', 'AI Audio API', 'Tailwind CSS'],
        imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/VociAi',
      },
      {
        title: 'TechHireHub',
        description: 'A real-time job portal that leverages Google APIs to fetch and aggregate job listings from multiple sources, keeping users updated with the latest opportunities.',
        technologies: ['TypeScript', 'Google Jobs API', 'React', 'Node.js'],
        imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/TechHireHub',
      },
      {
        title: 'Credit Card Fraud Detection',
        description: 'A machine learning system designed to detect fraudulent credit card transactions using classification algorithms to identify suspicious patterns in imbalanced datasets.',
        technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Machine Learning'],
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/Credit-Card-Fraud-Detection-Machine-Learning-Project',
      },
      {
        title: 'Sales Dashboard',
        description: 'An interactive data visualization dashboard built with Matplotlib and Streamlit that analyzes CSV-based sales data to provide key business insights.',
        technologies: ['Python', 'Streamlit', 'Matplotlib', 'Data Analysis'],
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/Sales-dashboard-project',
      },
      {
        title: 'Video Uploader',
        description: 'A full-stack application that enables users to upload, store, and stream video content, managing both frontend interactions and backend storage.',
        technologies: ['TypeScript', 'Node.js', 'Express', 'File Storage API'],
        imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/video-uploader-full-stack-application',
      },
      {
        title: 'AI Image Classifier',
        description: 'An AI application that predicts the category of an uploaded image and provides a prediction score based on a pre-trained model.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'TensorFlow.js'],
        imageUrl: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=600&auto=format&fit=crop',
        repoUrl: 'https://github.com/ahad5333/AI-Image-Classifier',
      },
];

export const TESTIMONIALS_CONTENT: TestimonialItem[] = [
 {
  quote: "Working with Mohammed was an absolute pleasure. His technical expertise and dedication to our project were instrumental in its success. He's a proactive problem-solver and a great team player.",
  name: "Aarti Sharma",
  title: "Project Manager, Teks Academy.",
},
{
  quote: "Mohammed's ability to quickly grasp complex requirements and translate them into clean, efficient code is remarkable. He consistently delivered high-quality work ahead of schedule.",
  name: "Rohan Mehta",
  title: "Lead Developer, Teleperformance.",
},
{
  quote: "The full-stack application Mohammed built for us exceeded all expectations. His attention to detail in both frontend and backend development is top-notch. I would highly recommend him.",
  name: "Neha Reddy",
  title: "Lead Operations, Teks Academy",
},
{
  quote: "The web application developed by him at Noon significantly improved our checkout speed and reliability. His careful work on frontend performance and API integrations helped deliver a smooth, fast, and secure experience for our customers. I strongly endorse his skills and professionalism.",
  name: "Ahmed Al‑Nuaimi",
  title: "Senior Product Manager, Noon",
}



];


// Fix: Add SKILLS_CONTENT export to resolve import error in Skills.tsx
export const SKILLS_CONTENT: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'TypeScript', icon: IconTypescript },
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
      { name: 'Flask', icon: IconFlask },
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
    name: 'AI & Data Science',
    skills: [
      { name: 'Machine Learning', icon: IconMachineLearning },
      { name: 'TensorFlow', icon: IconMachineLearning },
      { name: 'Data Analysis', icon: IconMachineLearning },
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
