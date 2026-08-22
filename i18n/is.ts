import type { Dictionary } from "@/i18n/types";

export const is = {
  metadata: {
    siteTitle: "Benjamín Ragnarsson | Hugbúnaðarverkfræðingur",
    titleTemplate: "%s | Benjamín Ragnarsson",
    description:
      "Hugbúnaðarverkfræðingur í Reykjavík sem þróar áreiðanleg bakendakerfi, API og heildarlausnir.",
  },
  header: {
    navigationLabel: "Aðalleiðsögn",
    languageLabel: "Veldu tungumál",
    projects: "Verkefni",
    about: "Um mig",
    skills: "Færni",
    contact: "Hafa samband",
    cv: "Ferilskrá",
  },
  hero: {
    name: "Benjamín Ragnarsson",
    subtitle: "Hugbúnaðarverkfræðingur · Námskröfum til BSc-gráðu lokið",
    availability: "Laus til starfa",
    status: "Öllum námskröfum lokið og tilbúinn að leggja mitt af mörkum.",
    introduction:
      "Búsettur í Reykjavík. Ég þróa áreiðanleg bakendakerfi, API og heildarlausnir með áherslu á hreinan kóða, viðhaldshæfni og raunverulegt notagildi.",
    viewProjects: "Skoða verkefni",
    github: "GitHub",
    linkedin: "LinkedIn",
    contact: "Hafa samband",
    scroll: "Skrunaðu til að skoða",
    education: {
      university: {
        title: "Háskólinn í Reykjavík",
        subtitle: "Námskröfum til BSc-gráðu lokið",
        status: "Útskrift október 2026",
      },
      gpa: {
        title: "Meðaleinkunn 8,8 / 10",
        subtitle: "Góður námsárangur",
      },
      exchange: {
        title: "Skiptinám við QUT, Brisbane",
        subtitle: "Skiptinámsönn í Ástralíu",
      },
    },
  },
  projects: {
    eyebrow: "Lokin verkefni",
    title: "Valin verkefni",
    viewProject: "Skoða verkefni nánar",
    back: "Til baka í verkefni",
    overview: "Um verkefnið",
    technologies: "Tækni",
    year: "Ár",
    items: {
      "einkaklubburinn-arion-banki": {
        title: "Einkaklúbburinn endurhugsaður — Arion banki",
        category: "BSc-lokaverkefni",
        summary:
          "Bakendalausn fyrir nýtt fríðindakerfi Arion banka, þróuð sem BSc-lokaverkefni.",
        details: [
          "Þróaði bakendalausn fyrir nýtt fríðindakerfi Arion banka.",
          "Notaði C# og .NET, ASP.NET Core REST API, Entity Framework Core með SQL Server, RabbitMQ og NServiceBus, Docker og Azure DevOps.",
        ],
      },
      "dr-cinema": {
        title: "Dr. Cinema",
        category: "Smáforrit",
        summary:
          "Smáforrit til að skoða kvikmyndir, sýningartíma, stiklu og miðakaup.",
        details: [
          "Þróaði símaforrit sem nýtir API frá Kvikmyndir.is og birtir upplýsingar um kvikmyndir, sýningartíma, stiklu og miðakaup.",
          "Forritið var þróað í TypeScript með React Native og Expo, með REST API samþættingu og áherslu á gott notendaviðmót.",
        ],
      },
      cryptocop: {
        title: "Cryptocop",
        category: "Lokaverkefni í vefþjónustum",
        summary:
          "Containerized .NET microservice-pöntunarkerfi fyrir kaup á rafmyntum.",
        details: [
          "Þróaði containerized .NET microservice-pöntunarkerfi fyrir kaup á rafmyntum.",
          "Notaði PostgreSQL, RabbitMQ og JWT ásamt bakgrunnsþjónustum fyrir greiðslustaðfestingu og tölvupóst.",
        ],
      },
      fasteignavefur: {
        title: "Fasteignavefur",
        category: "Full-stack vefverkefni",
        summary:
          "Full-stack fasteignavefur með mismunandi flæði fyrir kaupendur og seljendur.",
        details: [
          "Þróaði full-stack fasteignavef með fjölbreyttu notendaviðmóti og mismunandi flæði fyrir kaupendur og seljendur.",
          "Verkefnið fól í sér tengingu framenda og bakenda, vinnu með gagnagrunna og flóknari notendaflæði.",
        ],
      },
      "e-commerce-microservices": {
        title: "E-Commerce Microservices Platform",
        category: "Full-stack og bakendaverkefni",
        summary:
          "Containerized e-commerce kerfi byggt upp í kringum bakendaþjónustur.",
        details: [
          "Þróaði containerized e-commerce kerfi með C# og .NET, REST API, API Gateway, PostgreSQL, Entity Framework Core og Next.js.",
          "Vann með Auth0, JWT, M2M-auðkenningu og Docker.",
        ],
      },
    },
  },
  about: {
    eyebrow: "Nánar um mig",
    title: "Um mig",
    paragraphs: [
      "Ég hef lokið öllum námskröfum til BSc-gráðu í hugbúnaðarverkfræði við Háskólann í Reykjavík og útskrifast formlega í október 2026.",
      "Í náminu tók ég einnig skiptinámsönn við Queensland University of Technology í Brisbane, með áherslu á meðal annars netöryggi og örugga hugbúnaðarþróun.",
      "Ég hef gaman af að þróa bakendakerfi og heildarlausnir, læra nýja tækni og leysa vandamál með hugbúnaði sem er skýr, viðhaldsvænn og gagnlegur.",
    ],
    location: "Reykjavík, Ísland",
    education: "Námskröfum til BSc-gráðu lokið",
  },
  skills: {
    title: "Færni / Tæknistakkur",
  },
  contact: {
    eyebrow: "Hvað er næst?",
    title: "Byggjum eitthvað gagnlegt.",
    introduction:
      "Ég er laus til starfa í hugbúnaðarverkfræði og leita að teymi þar sem ég get lagt mitt af mörkum, lært hratt og haldið áfram að bæta mig sem forritari.",
    contact: "Hafa samband",
    github: "GitHub",
    linkedin: "LinkedIn",
    features: {
      learning: {
        title: "Fljótur að læra",
        description: "Mér finnst gaman að tileinka mér nýja tækni.",
      },
      teamwork: {
        title: "Góður í teymisvinnu",
        description: "Ég legg áherslu á samvinnu og skýr samskipti.",
      },
      problemSolving: {
        title: "Lausnamiðaður",
        description: "Mér finnst gaman að skilja hvernig og hvers vegna hlutir virka.",
      },
    },
  },
  footer: {
    location: "Reykjavík, Ísland",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Netfang",
  },
} satisfies Dictionary;
