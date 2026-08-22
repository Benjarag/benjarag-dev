import type { Project, ProjectSlug } from "@/types/project";

export const projects = [
  {
    slug: "einkaklubburinn-arion-banki",
    year: 2026,
    technologies: [
      "C# / .NET",
      "ASP.NET Core",
      "REST API",
      "Entity Framework Core",
      "SQL Server",
      "RabbitMQ",
      "NServiceBus",
      "Docker",
      "Azure DevOps",
    ],
    cardTechnologies: [
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
    slug: "dr-cinema",
    year: 2025,
    technologies: ["TypeScript", "React Native", "Expo", "REST API", "CSS"],
    icon: "cinema",
  },
  {
    slug: "cryptocop",
    year: 2025,
    technologies: [".NET", "PostgreSQL", "RabbitMQ", "JWT"],
    icon: "shield",
  },
  {
    slug: "fasteignavefur",
    year: 2025,
    technologies: ["Python", "Django", "PostgreSQL", "REST API"],
    icon: "house",
  },
  {
    slug: "e-commerce-microservices",
    year: 2025,
    technologies: [
      "C# / .NET",
      "REST API",
      "API Gateway",
      "PostgreSQL",
      "Entity Framework Core",
      "Next.js",
      "Auth0",
      "JWT",
      "M2M Authentication",
      "Docker",
    ],
    cardTechnologies: [
      "C# / .NET",
      "API Gateway",
      "PostgreSQL",
      "Next.js",
      "Auth0",
      "Docker",
    ],
    icon: "boxes",
  },
] satisfies readonly Project[];

export function getProject(slug: ProjectSlug): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
