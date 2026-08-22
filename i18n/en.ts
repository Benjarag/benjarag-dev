import type { Dictionary } from "@/i18n/types";

export const en = {
  metadata: {
    siteTitle: "Benjamín Ragnarsson | Software Engineer",
    titleTemplate: "%s | Benjamín Ragnarsson",
    description:
      "Software engineer based in Reykjavík, building reliable backend systems, APIs and full-stack applications.",
  },
  header: {
    navigationLabel: "Primary navigation",
    languageLabel: "Choose language",
    projects: "Projects",
    about: "About",
    skills: "Skills",
    contact: "Contact",
    cv: "CV",
  },
  hero: {
    name: "Benjamín Ragnarsson",
    subtitle: "Software Engineer · BSc requirements completed",
    availability: "Available for work",
    status: "All coursework completed and ready to contribute.",
    introduction:
      "Based in Reykjavík, Iceland. I build reliable backend systems, APIs and full-stack applications with a focus on clean code, maintainability and real-world impact.",
    viewProjects: "View Projects",
    github: "GitHub",
    linkedin: "LinkedIn",
    contact: "Contact Me",
    scroll: "Scroll to explore",
    education: {
      university: {
        title: "Reykjavík University",
        subtitle: "BSc requirements completed",
        status: "Completed",
      },
      gpa: {
        title: "GPA 8.8 / 10",
        subtitle: "Strong academic performance",
      },
      exchange: {
        title: "QUT Exchange, Brisbane",
        subtitle: "Exchange semester in Australia",
      },
    },
  },
  projects: {
    eyebrow: "Finished work",
    title: "Featured Projects",
    viewProject: "View project details",
    back: "Back to projects",
    overview: "Project overview",
    technologies: "Technologies",
    year: "Year",
    items: {
      "einkaklubburinn-arion-banki": {
        title: "Einkaklúbburinn endurhugsaður — Arion banki",
        category: "BSc final project",
        summary:
          "Backend solution for a new benefits system developed as my BSc final project.",
        details: [
          "Developed the backend solution for a new benefits system for Arion Bank.",
          "The solution used C# and .NET, ASP.NET Core REST APIs, Entity Framework Core with SQL Server, RabbitMQ and NServiceBus, Docker, and Azure DevOps.",
        ],
      },
      "dr-cinema": {
        title: "Dr. Cinema",
        category: "Mobile application",
        summary:
          "Mobile app for browsing movies, showtimes, trailers and ticket information.",
        details: [
          "Built a mobile application that uses the Kvikmyndir.is API to present movie information, showtimes, trailers and ticket-purchase links.",
          "Developed in TypeScript with React Native and Expo, with REST API integration and an emphasis on a clear user interface.",
        ],
      },
      cryptocop: {
        title: "Cryptocop",
        category: "Web services final project",
        summary:
          "Event-driven microservice ordering system for cryptocurrency purchases.",
        details: [
          "Developed a containerized .NET microservice ordering system for cryptocurrency purchases.",
          "Used PostgreSQL, RabbitMQ and JWT, together with background services for payment confirmation and email.",
        ],
      },
      fasteignavefur: {
        title: "Fasteignavefur",
        category: "Full-stack web project",
        summary:
          "Full-stack real-estate platform with separate flows for buyers and sellers.",
        details: [
          "Developed a full-stack real-estate website with a feature-rich interface and different flows for buyers and sellers.",
          "The project covered frontend and backend integration, database work and more complex user flows.",
        ],
      },
      "e-commerce-microservices": {
        title: "E-Commerce Microservices Platform",
        category: "Full-stack and backend project",
        summary:
          "Containerized e-commerce platform built around backend microservices.",
        details: [
          "Developed a containerized e-commerce system with C# and .NET, REST APIs, an API Gateway, PostgreSQL, Entity Framework Core and Next.js.",
          "Worked with Auth0, JWT, machine-to-machine authentication and Docker.",
        ],
      },
    },
  },
  about: {
    eyebrow: "A little context",
    title: "About Me",
    paragraphs: [
      "I have completed all requirements for my BSc in Software Engineering at Reykjavík University, with formal graduation scheduled for October 2026.",
      "During my studies I also completed an exchange semester at Queensland University of Technology in Brisbane, with a focus on areas including cybersecurity and secure software development.",
      "I enjoy building backend systems and full-stack applications, learning new technologies and solving problems with software that is clear, maintainable and useful.",
    ],
    location: "Reykjavík, Iceland",
    education: "BSc requirements completed",
  },
  skills: {
    title: "Skills / Tech Stack",
  },
  contact: {
    eyebrow: "What's next?",
    title: "Let's build something useful.",
    introduction:
      "I'm available for software engineering opportunities and looking for a team where I can contribute, learn quickly and keep improving as a developer.",
    contact: "Contact Me",
    github: "GitHub",
    linkedin: "LinkedIn",
    features: {
      learning: {
        title: "Quick to learn",
        description: "I enjoy picking up new technologies.",
      },
      teamwork: {
        title: "Team player",
        description: "I value collaboration and clear communication.",
      },
      problemSolving: {
        title: "Problem solver",
        description: "I like understanding how and why things work.",
      },
    },
  },
  footer: {
    location: "Reykjavík, Iceland",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
} satisfies Dictionary;
