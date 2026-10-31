// ============================================================
// portfolioData.js — Portfolio Data Source
// ============================================================

export const personalInfo = {
  name: "Jagadish Mala",
  firstName: "Jagadish Mala",
  brandName: "Jagadish Mala", // shown in the preloader, navbar and footer
  title: "Java FullStack Developer",
  location: "Adoni, India",
  phone: "+917993833410",
  emails: {
    primary: "meenlijagadish@gmail.com",
    secondary: "",
  },
  summary: "I’m a Java Full Stack Developer skilled in Java, Spring Boot, REST APIs, MySQL, HTML, CSS, and JavaScript, passionate about building responsive, user-friendly web applications and solving real-world problems through technology.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/jagan73-dev",
  linkedin: "https://linkedin.com/in/jagadishmala",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Jagadish Mala",
  titleHighlight: "Java FullStack Developer",
  subtitle: "Passionate about building responsive, robust full-stack applications with Java, Spring Boot, and modern web technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:meenlijagadish@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Jagadish Mala</span>, a passionate Java FullStack Developer based in Adoni, India. I specialize in developing responsive, scalable web applications with Java, Spring Boot, MySQL, and modern frontends, while sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, full-stack approach ensuring clean architecture, seamless APIs, and intuitive user experiences.",
  cards: [
    { number: "01", title: "Research", text: "Analyze requirements, map domain entities, and plan robust database schemas." },
    { number: "02", title: "Design", text: "Architect RESTful API endpoints and design intuitive, user-friendly UI layouts." },
    { number: "03", title: "Develop", text: "Implement clean Java/Spring backend services integrated with responsive frontends." },
    { number: "04", title: "Deploy", text: "Thoroughly test endpoints, optimize queries, and deploy production-ready applications." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "Eclipse" }, { name: "Postman" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Club & Peer Mentorship",
    description: "Led peer mentoring sessions on Java programming and Data Structures, helping junior students build practical problem-solving skills.",
    role: "Student Coordinator",
    badge: "Mentorship",
  },
  {
    title: "Full Stack Collaborative Projects",
    description: "Organized team code reviews and sprint retrospectives during group web application builds, streamlining Git workflows and API integrations.",
    role: "Team Lead",
    badge: "Collaboration",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Developer Trainee",
    duration: "2024 - Present",
    skills: [
      "End-to-end full stack web application development",
      "Designing robust REST APIs and database schemas with MySQL",
      "Backend architecture using Java, Servlets, and Spring Boot",
      "Responsive frontend engineering with modern JavaScript and React",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "React", "JavaScript", "REST APIs"],
  },
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex business logic into maintainable, efficient code." },
  { name: "Communication", icon: "💬", desc: "Collaborating transparently and discussing technical requirements clearly." },
  { name: "Adaptability", icon: "🔄", desc: "Quickly learning and applying new frameworks, tools, and best practices." },
  { name: "Time Management", icon: "⏱️", desc: "Prioritizing tasks and delivering milestones systematically on schedule." },
];

export const projects = [
  {
    id: "fashion-store",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "E-Commerce Fashion Store Application",
    description: "Developed a full-stack E-Commerce Fashion Store application that allows users to browse products, explore categories, manage shopping carts, and place orders. Built the frontend using HTML, CSS, and JavaScript, with a Java backend using JDBC, Servlets, JSP, and MySQL for database management.",
    techTags: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "JavaScript"],
    links: { github: "https://github.com/jagan73-dev", demo: "" }, // demo "" shows "Demo Coming Soon"
    isFlagship: true,
  },
  {
    id: "student-management",
    number: "02",
    badge: null,
    title: "Student Management System",
    description: "Developed a Student Management System using Java and Spring Boot REST APIs to manage student information efficiently. Implemented CRUD operations to add, retrieve, update, and delete student records with MySQL database.",
    techTags: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    links: { github: "https://github.com/jagan73-dev", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://linkedin.com/in/jagadishmala",
};

export const education = {
  degree: "B.Tech in Information Technology",
  institution: "Sri Venkateswara College of Engineering, Tirupati",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java FullStack Developer", "Java · Spring Boot · MySQL · React", "Building scalable & user-friendly web solutions"],
  credential: "B.Tech in Information Technology",
  copyright: `© ${new Date().getFullYear()} Jagadish Mala | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
