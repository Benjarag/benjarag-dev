import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Einkaklúbburinn endurhugsaður — Arion banki",
    description:
      "Backend solution for a new benefits system developed as my BSc final project.",
    technologies: [
      "C# / .NET",
      "ASP.NET Core",
      "SQL Server",
      "RabbitMQ",
      "Docker",
      "Azure DevOps",
    ],
    icon: "landmark",
    featured: true,
  },
  {
    title: "Dr. Cinema",
    description:
      "Mobile app for browsing movies, showtimes, trailers and ticket information.",
    technologies: ["TypeScript", "React Native", "Expo", "REST API"],
    icon: "cinema",
  },
  {
    title: "Cryptocop",
    description:
      "Event-driven microservice ordering system for cryptocurrency purchases.",
    technologies: [".NET", "PostgreSQL", "RabbitMQ", "JWT"],
    icon: "shield",
  },
  {
    title: "Fasteignavefur",
    description:
      "Full-stack real-estate platform with separate flows for buyers and sellers.",
    technologies: ["Python", "Django", "PostgreSQL", "REST API"],
    icon: "house",
  },
  {
    title: "E-Commerce Microservices Platform",
    description:
      "Containerized e-commerce platform built around backend microservices.",
    technologies: [
      ".NET",
      "API Gateway",
      "PostgreSQL",
      "Next.js",
      "Auth0",
      "Docker",
    ],
    icon: "boxes",
  },
];