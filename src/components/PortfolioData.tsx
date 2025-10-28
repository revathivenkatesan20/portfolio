export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'design' | 'ai';
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'programming';
}

export const projects: Project[] = [
  {
    id: 'virtual-chatbot',
    title: 'Virtual Chatbot Assistant',
    description: 'AI-based home automation chatbot with voice and text support for smart home control',
    longDescription: 'An intelligent chatbot assistant designed for home automation with both voice and text interaction capabilities. The system integrates with IoT devices to provide seamless control over smart home features. Built with Java Spring Boot backend and modern web technologies for the frontend.',
    image: 'https://i.pinimg.com/736x/e3/ff/fc/e3fffc513422b19dbf4b1362a3d21cad.jpg',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Voice API'],
    githubUrl: 'https://github.com/revathivenkatesan20/chatbot-assistant',
    category: 'ai',
    featured: true
  },
  {
    id: 'weather-forecast-app',
    title: 'Weather Forecast Web Application',
    description: 'Real-time weather application built during internship at Prodigy Infotech',
    longDescription: 'A comprehensive weather forecasting application developed during my internship at Prodigy Infotech. Features real-time weather updates, 7-day forecasts, location-based services, and responsive design. Integrated with live weather APIs to provide accurate meteorological data.',
    image: 'https://i.pinimg.com/1200x/f4/82/d2/f482d2c5066a2f126f9aa5bc6cb77faa.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API', 'JSON', 'Bootstrap'],
    githubUrl: 'https://github.com/revathivenkatesan20/weather-app',
    liveUrl: 'https://revathi-weather-app.netlify.app',
    category: 'web',
    featured: true
  },
  {
    id: 'excel-analytics',
    title: 'Excel Analytics Project',
    description: 'MERN stack application for uploading, analyzing, and visualizing Excel data',
    longDescription: 'A full-stack web application built with the MERN stack that allows users to upload Excel files, perform data analysis, and create interactive visualizations. Features include data filtering, chart generation, statistical analysis, and export capabilities.',
    image: 'https://i.pinimg.com/1200x/ed/8a/6c/ed8a6c3f541c1a4bb1ec3d66053def53.jpg',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Chart.js', 'xlsx'],
    githubUrl: 'https://github.com/revathivenkatesan20/excel-analytics',
    category: 'fullstack',
    featured: true
  },
  // {
  //   id: 'gym-marketing-website',
  //   title: 'Gym Marketing Website',
  //   description: 'Responsive website for gym promotion with membership details and interactive features',
  //   longDescription: 'A modern, responsive marketing website designed for fitness centers and gyms. Features include membership plans, trainer profiles, class schedules, contact forms, and image galleries. Built with responsive design principles to ensure optimal viewing across all devices.',
  //   image: 'https://images.unsplash.com/photo-1607720844146-7351a68014c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgxMjQ5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  //   githubUrl: 'https://github.com/revathivenkatesan20/gym-website',
  //   liveUrl: 'https://revathi-gym-website.netlify.app',
  //   category: 'web',
  //   featured: false
  // },
  {
    id: 'smart-ration-app',
    title: 'Smart Ration App',
    description: 'Token-based ration distribution system with multilingual UI support',
    longDescription: 'A digital solution for ration distribution management featuring token-based allocation, multilingual support, and admin dashboard. The application streamlines the process of ration distribution while ensuring transparency and efficiency in the public distribution system.',
    image: 'https://i.pinimg.com/736x/f8/1b/87/f81b87e21f8ad3acd29a16f4033169f8.jpg',
    technologies: ['Java', 'React', 'Spring Boot', 'MySQL', 'Material-UI'],
    githubUrl: 'https://github.com/revathivenkatesan20/smart-ration-app',
    category: 'fullstack',
    featured: false
  },
  {
    id: 'story-animation-app',
    title: 'Story & Rhymes Animation App',
    description: 'Fun and interactive storytelling app with smooth animations for children',
    longDescription: 'An engaging storytelling application designed for children featuring interactive animations, rhymes, and educational content. Built with React and Lottie animations to create an immersive learning experience that encourages reading and creativity.',
    image: 'https://i.pinimg.com/1200x/fc/af/4c/fcaf4c1155a99956c78a3cc7df759515.jpg',
    technologies: ['React', 'Lottie', 'CSS Animations', 'JavaScript'],
    githubUrl: 'https://github.com/revathivenkatesan20/story-animation-app',
    category: 'web',
    featured: false
  },
  {
    id: 'ecommerce-design',
    title: 'E-commerce Website Design',
    description: 'Figma prototype for gym products and equipment e-commerce platform',
    longDescription: 'A comprehensive UI/UX design for an e-commerce platform specializing in gym equipment and fitness products. Created during my internship at CodSoft, this design includes user journey mapping, wireframes, prototypes, and a complete design system.',
    image: 'https://i.pinimg.com/736x/06/c2/c1/06c2c1ec94277aea43ab2243490b5cc9.jpg',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX Design'],
    liveUrl: 'https://www.figma.com/proto/revathi-ecommerce-design',
    category: 'design',
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: 'prodigy-infotech',
    title: 'Website Developer Intern',
    company: 'Prodigy Infotech',
    period: 'Jun 2024 - Aug 2024',
    description: 'Developed a comprehensive Weather Forecast Web Application using modern web technologies. Gained hands-on experience with API integration, real-time data handling, and responsive web design. Learned to work with JSON data structures and implemented user-friendly interfaces.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API', 'Bootstrap', 'JSON']
  },
  {
    id: 'codsoft',
    title: 'UI/UX Design Intern',
    company: 'CodSoft',
    period: 'Mar 2024 - May 2024',
    description: 'Designed comprehensive UI/UX prototypes for various applications including e-commerce platforms and interactive story apps. Gained expertise in user experience design, wireframing, prototyping, and responsive design principles using industry-standard design tools.',
    technologies: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems']
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', level: 90, category: 'programming' },
  { name: 'JavaScript', level: 85, category: 'programming' },
  // { name: 'Python', level: 70, category: 'programming' },
  { name: 'SQL', level: 80, category: 'programming' },
  
  // Frontend
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Bootstrap', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  // { name: 'jQuery', level: 75, category: 'frontend' },
  
  // Backend
  // { name: 'Spring Boot', level: 80, category: 'backend' },
  // { name: 'Node.js', level: 75, category: 'backend' },
  // { name: 'Express.js', level: 75, category: 'backend' },
  // { name: 'REST APIs', level: 85, category: 'backend' },
  
  // Database
  { name: 'MySQL', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  
  // Tools & Design
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'Git/GitHub', level: 80, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'Postman', level: 75, category: 'tools' },
  
  // Design Skills
  { name: 'UI/UX Design', level: 80, category: 'design' },
  { name: 'Wireframing', level: 75, category: 'design' },
  { name: 'Prototyping', level: 80, category: 'design' },
  { name: 'Responsive Design', level: 85, category: 'design' }
];

export const personalInfo = {
  name: 'Revathi Venkatesan',
  title: 'Full Stack Developer & UI/UX Designer',
  tagline: 'Aspiring to build innovative solutions and create meaningful digital experiences',
  bio: 'Final year Computer Science & Engineering student at Peri Institute of Technology with a passion for full stack development and UI/UX design. I enjoy solving complex problems, learning new technologies, and creating user-friendly applications. Currently preparing for campus placements with top MNCs while continuously improving my coding and design skills.',
  location: 'Chennai, India',
  email: 'revathi2004manju@gmail.com',
  phone: '+91 88381 52090',
  education: 'B.E. Computer Science & Engineering (Final Year)',
  college: 'Peri Institute of Technology',
  goals: 'To become a skilled Full Stack Developer and work with leading MNCs like TCS, Wipro, Zoho, and Infosys',
  interests: ['Web Development', 'UI/UX Design', 'Problem Solving', 'Creative Drawing', 'Helping Others'],
  social: {
    github: 'https://github.com/revathivenkatesan20',
    linkedin: 'https://linkedin.com/in/revathi-venkatesan',
    website: 'https://revathi-portfolio.netlify.app'
  },
  certifications: [
    'AI & Machine Learning Basics',
    'Programming Foundations (Java)',
    'Productivity Tools & Soft Skills'
  ],
  targetCompanies: ['TCS', 'Wipro', 'Zoho', 'Infosys', 'Accenture', 'Cognizant']
};