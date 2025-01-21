import { EduType, ExpType, ProjectType, TechIcon } from "./types";

export const languages: TechIcon[] = [
  {
    icon: "typescript-logo.svg",
    name: "Typescript",
  },
  {
    icon: "javascript-logo.svg",
    name: "Javascript",
  },
  {
    icon: "go-logo.svg",
    name: "Go",
  },
  {
    icon: "python-logo.svg",
    name: "Python",
  },
  {
    icon: "java-logo.svg",
    name: "JAVA",
  },
  {
    icon: "cpp-logo.svg",
    name: "C++",
  },
  {
    icon: "c-logo.svg",
    name: "C",
  },
  {
    icon: "html-logo.svg",
    name: "HTML",
    hoverText: "Imposter 🤫",
  },
];

export const frameworks: TechIcon[] = [
  {
    icon: "react-logo.svg",
    name: "React",
  },
  {
    icon: "next-logo.svg",
    name: "Next.js",
  },
  {
    icon: "node-logo.svg",
    name: "Node.js",
    hoverText: "I know it's a JS runtime env 😭",
  },
  {
    icon: "express-logo.svg",
    name: "Express.js",
  },
  {
    icon: "tailwind-logo.svg",
    name: "Tailwind",
  },
  {
    icon: "fastapi-logo.svg",
    name: "FastAPI",
  },
  {
    icon: "motion-logo.svg",
    name: "Framer Motion",
  },
  {
    icon: "native-logo.svg",
    name: "React Native",
  },
];

export const tools: TechIcon[] = [
  {
    icon: "git-logo.svg",
    name: "Git",
  },
  {
    icon: "firebase-logo.svg",
    name: "Firebase",
  },
  {
    icon: "neovim-logo.svg",
    name: "Neovim",
    hoverText: "I use neovim btw! 😎",
  },
  {
    icon: "supabase-logo.svg",
    name: "Supabase",
  },
  {
    icon: "mongodb-logo.svg",
    name: "MongoDB",
  },
  {
    icon: "postgresql-logo.svg",
    name: "PostgreSQL",
  },
  {
    icon: "docker-logo.svg",
    name: "Docker",
  },
  {
    icon: "vscode-logo.svg",
    name: "VS Code",
  },
];

export const experiences: ExpType[] = [
  {
    role: "FrontEnd Intern",
    company: "The Mangojelly",
    description:
      "Assisted in the development and maintenance of the company's website and web applications using React.js, MUI and Redux.",
    timePeriod: "November 2024 - January 2025",
  },
];

export const education: EduType[] = [
  {
    degree: "B.Tech",
    institute: "SRM Institute of Science and Technology",
    cgpa: 9.74,
    timePeriod: "Aug 2022 - July 2026",
  },
  {
    degree: "Class 12",
    institute: "Seshan Memo Eng H S School",
    percentage: 93.4,
    timePeriod: "2020 - 2021",
  },
  {
    degree: "Class 10",
    institute: "DAV Public School",
    percentage: 89.4,
    timePeriod: "2018 - 2019",
  },
];

export const tailwindTextColors = [
  "text-red-500",
  "text-red-400",
  "text-pink-500",
  "text-pink-400",
  "text-purple-500",
  "text-purple-400",
  "text-indigo-500",
  "text-indigo-400",
  "text-blue-500",
  "text-blue-400",
  "text-cyan-500",
  "text-cyan-400",
  "text-teal-500",
  "text-teal-400",
  "text-green-500",
  "text-green-400",
  "text-lime-500",
  "text-lime-400",
  "text-yellow-500",
  "text-yellow-400",
  "text-orange-500",
  "text-orange-400",
  "text-amber-500",
  "text-amber-400",
  "text-rose-500",
  "text-rose-400",
  "text-fuchsia-500",
  "text-fuchsia-400",
  "text-emerald-500",
  "text-emerald-400",
  "text-violet-500",
  "text-violet-400",
  "text-sky-500",
  "text-sky-400",
  "text-lime-600",
  "text-teal-600",
  "text-blue-600",
  "text-orange-600",
  "text-purple-600",
  "text-rose-600",
  "text-fuchsia-600",
  "text-yellow-600",
  "text-cyan-600",
  "text-indigo-600",
] as const;

export const projects: ProjectType[] = [
  {
    title: "Podify",
    description:
      "Podify is an innovative podcast app that leverages AI to generate high-quality podcasts and thumbnails. With a user-friendly interface and robust security features, including OAuth authentication, Podify makes it easy to create and manage your podcasts.",
    img: "podify.png",
    prodLink: "https://podify-beta.vercel.app",
    githubLink: "https://github.com/ayush-singh24/podify",
  },
  {
    title: "Codoc",
    description:
      "Codoc is a web-based markdown editor designed for seamless collaboration. Bring your team together in real-time to create, edit, and share documents with ease.",
    img: "codoc.jpeg",
    prodLink: "https://codoc-beta.vercel.app",
    githubLink: "https://github.com/ayush-singh24/podify",
  },
  {
    title: "Folderize",
    description: "Folder manager",
    img: "folderize.png",
    githubLink: "https://github.com/ayush-singh24/folderize",
  },
];
