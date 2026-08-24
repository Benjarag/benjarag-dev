import type { Dictionary } from "@/i18n/types";

export const is = {
  metadata: {
    siteTitle: "Benjamín Ragnarsson | Hugbúnaðarverkfræðingur",
    titleTemplate: "%s | Benjamín Ragnarsson",
    description:
      "Hugbúnaðarverkfræðingur í Reykjavík sem þróar áreiðanleg bakendakerfi, API og heildarlausnir.",
  },
  header: {
    navigationLabel: "Aðalvalmynd",
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
    gallery: "Myndir úr viðmóti",
    screenshot: "skjámynd úr viðmóti",
    openScreenshot: "Opna skjámynd í fullri stærð",
    closeGallery: "Loka myndaskoðara",
    previousScreenshot: "Fyrri skjámynd",
    nextScreenshot: "Næsta skjámynd",
    technologies: "Tækni",
    year: "Ár",
    items: {
      "einkaklubburinn-arion-banki": {
        title: "Einkaklúbburinn endurhugsaður — Arion banki",
        category: "BSc-lokaverkefni",
        summary:
          "Frumgerð að gagnadrifnu fríðinda- og afsláttarkerfi, þróuð í samstarfi við Arion banka.",
        details: [
          "Ég vann í fimm manna teymi að tæknilegri frumgerð sem endurhugsaði fríðindakerfi Arion banka. Kerfið heldur utan um samstarfsaðila, söluaðila, posa og afsláttarreglur og metur færslur út frá meðal annars kortategund, fríðindastöðu, búsetu og forgangi tilboða.",
          "Bakendinn var byggður með ASP.NET Core REST API, Entity Framework Core og SQL Server og skýrum aðskilnaði endapunkta, viðskiptareglna og gagnalags. RabbitMQ og NServiceBus sáu um ósamstillta færsluvinnslu með vörn gegn tvívinnslu, endurtilraunum, villuröðum og niðurstöðuskeytum fyrir framtíðar endurgreiðslu- og tilkynningaþjónustur. Frumgerðin vann úr yfir 100 færslum á mínútu í prófunum.",
          "Teymið nýtti Docker Compose, Azure DevOps Pipelines og Octopus Deploy til að samræma þróun, prófanir og dreifingu. Mín meginábyrgð var skýrslugerð og upplýsingamiðlun: að viðhalda sameiginlegri sýn á umfang og stöðu verkefnisins, taka saman vinnu- og framvindugögn og styðja samstarfið frá Brisbane þrátt fyrir mikinn tímamun.",
        ],
      },
      "dr-cinema": {
        title: "Dr. Cinema",
        category: "Smáforrit",
        summary:
          "Kvikmyndaforrit með lifandi dagskrá, ítarlegum síum, uppáhaldslistum, umsögnum og sýningartímum.",
        details: [
          "Þróaði React Native og Expo forrit sem nýtir aðgangsstýrt REST API frá Kvikmyndir.is, þar á meðal meðhöndlun aðgangslykils, ósamstilltar fyrirspurnir, hleðslustöður og skýr villuskilaboð. Redux Toolkit heldur aðskildu og fyrirsjáanlegu ástandi fyrir kvikmyndir, kvikmyndahús, síur, uppáhald og umsagnir.",
          "Notendur geta skoðað kvikmyndir eftir kvikmyndahúsi og síað eftir einkunnum, leikurum, leikstjórum, aldurstakmörkum og sýningartímum. Kvikmyndasíður sýna stiklu, einkunnir og miðaupplýsingar. Breytilegar leiðir í Expo Router varðveita samhengi kvikmyndahússins svo réttir sýningartímar birtast strax, en samt er hægt að skipta um hús.",
          "Uppáhaldslistar og umsagnir vistast á milli keyrslna með AsyncStorage. Raða má uppáhaldi með því að draga og sleppa og deila listum með djúptenglum sem flytja inn eða sameina lista. Forritið inniheldur einnig endurnýtanlega hluti, ljóst og dökkt þema, innbyggða deilingu, veggspjöld á öllum skjánum, YouTube-stiklur og kortatengla.",
        ],
      },
      cryptocop: {
        title: "Cryptocop",
        category: "Lokaverkefni í vefþjónustum",
        summary:
          "Atburðadrifið pöntunarkerfi sem sameinar örugg API, bakgrunnsvinnslu og markaðsgögn rafmynta.",
        details: [
          "Þróaði ASP.NET Core pöntunarkerfi þar sem notendur geta auðkennt sig, skoðað rafmyntir og kauphallir, unnið með körfu, heimilisföng og greiðslumáta, lagt inn pantanir og skoðað kaupsögu. Lagskipt uppbygging með stýringum, þjónustum og gagnageymslum aðskilur viðskiptareglur frá Entity Framework Core gagnalagi í PostgreSQL.",
          "JWT-auðkenning verndar endapunkta, geymir nauðsynleg auðkennisgögn og styður afturköllun aðgangslykla. Inntak og greiðslukort eru sannreynd, þar á meðal kortanúmer og földun viðkvæmra gagna. Við stofnun pöntunar eru RabbitMQ-atburðir birtir og sjálfstæðar .NET-bakgrunnsþjónustur sjá um kortastaðfestingu og staðfestingarpóst með SendGrid.",
          "Kerfið sækir einnig gögn frá ytra rafmynta-API með HttpClient og birtir þau í eigin REST-endapunktum. Docker Compose keyrir API, PostgreSQL, RabbitMQ og bakgrunnsþjónustur aðskilið með varanlegri gagnageymslu, stöðuvöktun, skilgreindri ræsingarröð og umhverfisstillingum.",
        ],
      },
      fasteignavefur: {
        title: "Fasteignavefur",
        category: "Full-stack vefverkefni",
        summary:
          "Hlutverkaskiptur fasteignamarkaður sem nær frá leit og tilboðum yfir í fullnaðarferli kaupa.",
        details: [
          "Þróaði Django-fasteignamarkað með mismunandi upplifun fyrir gesti, kaupendur og seljendur. Kerfinu er skipt í afmörkuð Django-forrit fyrir aðganga, eignir, seljendur, tilboð og tilkynningar. Django ORM og PostgreSQL halda utan um eignir, myndir, seljendasnið, uppáhald og kauptilboð.",
          "Kaupendur geta leitað, síað og raðað eftir staðsetningu, verði, eignartegund, stærð og skráningardegi, skoðað myndríkar eignasíður og vistað uppáhald með ósamstilltum JavaScript-beiðnum. Seljendur geta samþykkt, hafnað eða uppfært tilboð og heimildir og viðskiptareglur koma í veg fyrir ógildar aðgerðir eftir sölu eða samþykkt tilboð.",
          "Fjölskrefa kaupferli safnar tengiliðaupplýsingum, sannreynir greiðslumáta og uppfærir stöðu eignar og tengdra tilboða á samræmdan hátt. Verkefnið inniheldur einnig tölvupósttilkynningar og skjáaðlagað viðmót byggt með Django-sniðmátum, Bootstrap, CSS og JavaScript og var keyrt á Azure.",
        ],
      },
      "e-commerce-microservices": {
        title: "E-Commerce Microservices Platform",
        category: "Full-stack og bakendaverkefni",
        summary:
          "Öruggur, Docker-keyrður örþjónustuvettvangur fyrir vörulista og pantanir.",
        details: [
          "Hannaði aðskildar ASP.NET Core-þjónustur fyrir vörulista og pantanir á bak við API Gateway. Hver þjónusta fylgir lagskiptri uppbyggingu með stýringum, þjónustum, gagnageymslum og DTO-líkönum, en gagnagrunnsuppfærslur Entity Framework Core halda utan um breytingar á PostgreSQL-gögnum.",
          "Auth0 og JWT-heimildareglur vernda endapunkta notenda. Fyrir innri samskipti notar gáttin OAuth client credentials til að sækja aðgangslykil fyrir samskipti milli þjónusta. Hún sameinar einnig gögn milli þjónusta með því að auðga pöntunarlínur með núverandi heiti og verði úr vörulista og reikna heildarverð pöntunar.",
          "Lítill Next.js- og TypeScript-framendi sér um Auth0-innskráningu og sækir aðgangslykil til að prófa verndaða API-endapunkta. Docker Compose pakkar gáttinni, báðum API-þjónustum, framenda og PostgreSQL í aðskildar þjónustur á innra neti með varanlegri gagnageymslu.",
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
    technologyTitle: "Færni / Tækni",
    engineeringTitle: "Verkfæri / Vinnubrögð",
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
