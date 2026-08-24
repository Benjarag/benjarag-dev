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
        status: "Graduation October 2026",
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
    gallery: "Interface gallery",
    screenshot: "interface screenshot",
    openScreenshot: "Open full-size screenshot",
    closeGallery: "Close image viewer",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    technologies: "Technologies",
    year: "Year",
    items: {
      "einkaklubburinn-arion-banki": {
        title: "Einkaklúbburinn endurhugsaður — Arion banki",
        category: "BSc final project",
        summary:
          "A production-minded prototype for a data-driven benefits and discount platform, developed with Arion Bank.",
        details: [
          "In a five-person team, I helped deliver a technical prototype that reimagined Arion Bank's benefits platform. The system manages partners, merchants, terminals and discount rules, then evaluates customer transactions against conditions such as card type, loyalty status, location and offer priority.",
          "The backend used ASP.NET Core REST APIs, Entity Framework Core and SQL Server with a clear separation between endpoints, business logic and data access. RabbitMQ and NServiceBus handled transaction events asynchronously, including duplicate protection, retries, error queues and outbound events for future refund and notification services. The prototype processed more than 100 transactions per minute in testing.",
          "The team used Docker Compose, Azure DevOps pipelines and Octopus Deploy to keep development, testing and deployment repeatable. My main responsibility was project reporting and internal information flow: maintaining a shared view of scope and progress, compiling time and delivery data, and supporting collaboration from Brisbane across a large time-zone difference.",
        ],
      },
      "dr-cinema": {
        title: "Dr. Cinema",
        category: "Mobile application",
        summary:
          "A feature-rich cinema app with live listings, advanced filters, favorites, reviews and contextual showtimes.",
        details: [
          "Built a React Native and Expo application around the authenticated Kvikmyndir.is REST API, including access-token handling, asynchronous requests, loading states and clear error feedback. Redux Toolkit slices keep movies, cinemas, filters, favorites and user reviews separated and predictable.",
          "Users can browse by cinema, search and filter by ratings, cast, directors, age certificates and showtime ranges, then open detailed movie pages with trailers, ratings and ticket information. Dynamic Expo Router routes preserve cinema context, so a movie opened from a cinema immediately shows the relevant screenings while still allowing users to switch venue.",
          "Favorites and reviews persist between sessions with AsyncStorage. Favorite lists can be reordered by drag and drop and shared through deep links that import or merge a list. The app also includes reusable components, light and dark themes, native sharing, full-screen posters, YouTube trailers and external map links.",
        ],
      },
      cryptocop: {
        title: "Cryptocop",
        category: "Web services final project",
        summary:
          "An event-driven ordering backend combining secure APIs, background workers and cryptocurrency market data.",
        details: [
          "Built an ASP.NET Core ordering platform where users can authenticate, browse cryptocurrencies and exchanges, manage carts, addresses and payment methods, place orders and review purchase history. A layered controller, service and repository structure separates business rules from Entity Framework Core data access in PostgreSQL.",
          "JWT bearer authentication protects endpoints and supports claims and token revocation, while input and payment-card validation includes number checks and masking. Order creation publishes RabbitMQ events that independent .NET workers consume for card validation and SendGrid confirmation emails, keeping the API loosely coupled from background work.",
          "The platform also adapts data from an external cryptocurrency API through HttpClient and exposes it through its own REST endpoints. Docker Compose runs the API, PostgreSQL, RabbitMQ and workers as separate services with persistent storage, health checks, service dependencies and environment-based configuration.",
        ],
      },
      fasteignavefur: {
        title: "Fasteignavefur",
        category: "Full-stack web project",
        summary:
          "A role-based real-estate marketplace covering discovery, offers and the full purchase workflow.",
        details: [
          "Built a Django marketplace with separate experiences for guests, buyers and sellers. The application is divided into focused apps for accounts, properties, sellers, offers and notifications, with Django ORM and PostgreSQL modelling listings, images, seller profiles, favorites and purchase offers.",
          "Buyers can search, filter and sort by location, price, property type, size and listing date, inspect image-rich property pages and save favorites through asynchronous JavaScript requests. Sellers can review, accept, reject or update offers, with permissions and business rules preventing invalid actions after a sale or accepted offer.",
          "A multi-step purchase flow collects contact details, validates the chosen payment method and updates related property and offer states consistently. The project also includes event email notifications and a responsive interface built with Django templates, Bootstrap, CSS and JavaScript, deployed using Azure.",
        ],
      },
      "e-commerce-microservices": {
        title: "E-Commerce Microservices Platform",
        category: "Full-stack and backend project",
        summary:
          "A secured, containerized microservices platform for product catalog and order management.",
        details: [
          "Designed separate ASP.NET Core Product Catalog and Order Management services behind an API Gateway. Each service follows a layered controller, service, repository and DTO structure, with Entity Framework Core migrations managing its PostgreSQL data.",
          "Auth0 and JWT permission policies protect user-facing endpoints. For internal calls, the gateway uses OAuth client credentials to obtain machine-to-machine tokens. It also composes cross-service data by enriching order lines with current catalog names and prices and calculating a detailed order total.",
          "A small Next.js and TypeScript frontend handles Auth0 login and access-token retrieval for protected API testing. Docker Compose packages the gateway, both APIs, frontend and PostgreSQL as isolated services on an internal network with persistent database storage.",
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
    technologyTitle: "Skills / Tech Stack",
    engineeringTitle: "Tools / Best Practices",
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
