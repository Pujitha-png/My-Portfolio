import {
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaServer,
  FaTools,
} from 'react-icons/fa'
import {
  SiClaude,
  SiCodechef,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHackerrank,
  SiHtml5,
  SiJavascript,
  SiLeetcode,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
} from 'react-icons/si'

export const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Profiles', to: 'profiles' },
  { label: 'Contact', to: 'contact' },
]

export const heroContent = {
  name: 'Pujita Nagalakshmi Kotha',
  title: 'Aspiring Software Developer | Full Stack Learner | DSA Enthusiast',
  tagline:
    'Computer Science student passionate about data structures, algorithms, Java development, and building practical full-stack web solutions.',
}

export const aboutContent = [
  'I am a Computer Science student and aspiring software developer with a deep interest in Data Structures & Algorithms and Java programming.',
  'Java is my primary language, and I regularly solve coding problems to sharpen my problem-solving and logical thinking skills.',
  'I have completed HTML, CSS, and JavaScript fundamentals, and I am currently expanding my full-stack development skills with beginner-level backend experience.',
  'I enjoy building meaningful projects, exploring modern technologies, and continuously improving my technical foundation.',
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    skills: [
      { name: 'Java (Primary)', icon: FaCode },
      { name: 'JavaScript (Basics)', icon: SiJavascript },
      { name: 'Python (Basics)', icon: SiPython },
    ],
  },
  {
    title: 'Web Development',
    icon: FaServer,
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: FaCode },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React.js (Learning)', icon: SiReact },
      { name: 'Node.js (Learning)', icon: SiNodedotjs },
      { name: 'Express.js (Very Basic)', icon: SiExpress },
      { name: 'REST APIs', icon: FaExternalLinkAlt },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaTools,
    skills: [
      { name: 'Git', icon: FaCode },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Docker', icon: SiDocker },
      { name: 'ChatGPT', icon: FaCode },
      { name: 'GitHub Copilot', icon: SiGithub },
      { name: 'Claude', icon: SiClaude },
    ],
  },
  {
    title: 'Core Concepts',
    icon: FaCode,
    skills: [
      { name: 'Data Structures & Algorithms', icon: FaCode },
      { name: 'Problem Solving', icon: FaCode },
      { name: 'OOP', icon: FaCode },
      { name: 'Basic Backend Development', icon: FaServer },
    ],
  },
]

export const projects = [
  {
    title: 'Offline Customer Support Chatbot with Ollama and Llama 3.2',
    description:
      'Built a privacy-first, offline AI customer support chatbot using local LLMs to automate assistance without relying on external cloud APIs.',
    stack: ['Python', 'Ollama', 'Llama 3.2', 'AI/LLM'],
    github: 'https://github.com/Pujitha-png/local-ecommerce-support-llm',
  },
  {
    title: 'Job Application Tracking System',
    description:
      'Engineered a backend platform to manage job applications with authentication, role-based workflows, and robust status tracking.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/Pujitha-png/JobApplicationTrackingSystem',
  },
  {
    title: 'Event Driven Order Processing System',
    description:
      'Developed an event-driven backend service with asynchronous messaging to deliver scalable and reliable order processing.',
    stack: ['Node.js', 'RabbitMQ', 'Express.js'],
    github: 'https://github.com/Pujitha-png/order_processing_system',
  },
  {
    title: 'Resilient Multi-Tenant API',
    description:
      'Designed a fault-tolerant multi-tenant API focused on resilience patterns and stable backend architecture under load.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Pujitha-png/bulkhead-resilience-api',
  },
]

export const codingProfiles = [
  {
    name: 'CodeChef',
    icon: SiCodechef,
    href: 'https://www.codechef.com/users/puji_1005',
  },
  {
    name: 'HackerRank',
    icon: SiHackerrank,
    href: 'https://www.hackerrank.com/profile/pujitha0709',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    href: 'https://leetcode.com/u/Pujitha_Kotha/',
  },
]

export const contactLinks = [
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:pujitha0709@gmail.com',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/Pujitha-png',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/pujita-nagalakshmi-kotha-10539a2ba/',
  },
]
