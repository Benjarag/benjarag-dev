import type { Dictionary } from "@/i18n/types";

export const is = {
  metadata: {
    siteTitle: "Benjamín Ragnarsson | Hugbúnaðarverkfræðingur",
    titleTemplate: "%s | Benjamín Ragnarsson",
    description:
      "Persónulegt verkasafn Benjamíns Ragnarssonar (Benjamin Ragnarsson), hugbúnaðarverkfræðings í Reykjavík á Íslandi.",
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
    scroll: "Kannaðu meira",
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
          "Teymið nýtti Docker Compose, Azure DevOps Pipelines og Octopus Deploy til að samræma þróun, prófanir og dreifingu. Ég bar meginábyrgð á skýrslugerð og upplýsingamiðlun innan verkefnisins, hélt utan um umfang og stöðu þess og tók saman vinnu- og framvindugögn fyrir teymið. Ég lagði jafnframt áherslu á að halda samstarfinu skilvirku og upplýsingaflæði skýru þrátt fyrir að vinna frá Brisbane og takast á við verulegan tímamun.",
          "Lokaskýrsla verkefnisins: https://hdl.handle.net/1946/53852",
        ],
      },
      "dr-cinema": {
        title: "Dr. Cinema",
        category: "Smáforrit",
        summary:
          "Kvikmyndaforrit með lifandi dagskrá, ítarlegum síum, uppáhaldslistum, umsögnum og sýningartímum.",
        details: [
          "Þróaði React Native og Expo forrit sem nýtir aðgangsstýrt REST API frá Kvikmyndir.is. Forritið meðhöndlar aðgangslykil, sendir ósamstilltar fyrirspurnir og sýnir skýr skilaboð við hleðslu eða villur. Redux Toolkit heldur aðskildu og fyrirsjáanlegu ástandi fyrir kvikmyndir, kvikmyndahús, síur, uppáhald og umsagnir.",
          "Notendur geta skoðað kvikmyndir eftir kvikmyndahúsi og síað eftir einkunnum, leikurum, leikstjórum, aldurstakmörkum og sýningartímum. Kvikmyndasíður sýna stiklu, einkunnir og miðaupplýsingar. Breytilegar leiðir í Expo Router halda utan um valið kvikmyndahús og tryggja að réttir sýningartímar birtist þegar farið er á milli skjáa.",
          "Uppáhaldslistar og umsagnir vistast á milli keyrslna með AsyncStorage. Hægt er að raða uppáhaldslistum með því að draga og sleppa og deila þeim með öðrum. Forritið inniheldur einnig endurnýtanlega hluti, ljóst og dökkt þema, innbyggða deilingu, veggspjöld á öllum skjánum, YouTube-stiklur og kortatengla.",
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
          "Fasteignamarkaður fyrir gesti, kaupendur og seljendur, frá leit og tilboðum yfir í kaupferlið.",
        details: [
          "Þróaði fasteignavef í Django þar sem gestir, kaupendur og seljendur hafa mismunandi aðgang og virkni. Verkefninu er skipt í Django-forrit fyrir notendur, fasteignir, seljendur, tilboð og tilkynningar. Django ORM og PostgreSQL eru notuð til að halda utan um fasteignir, myndir, seljendasnið, uppáhald og kauptilboð.",
          "Kaupendur geta leitað, síað og raðað fasteignum eftir staðsetningu, verði, eignartegund, stærð og skráningardegi. Hægt er að skoða upplýsingar og myndir, vista fasteignir í uppáhald og gera tilboð. Seljendur geta skoðað, samþykkt, hafnað eða uppfært tilboð og kerfið kemur í veg fyrir ógildar aðgerðir eftir að tilboð hefur verið samþykkt eða fasteign seld.",
          "Kaupferlið er í nokkrum skrefum þar sem tengiliðaupplýsingum er safnað, greiðslumáti staðfestur og staða fasteignar og tilboða uppfærð. Verkefnið inniheldur einnig tölvupósttilkynningar og skjáaðlagað viðmót byggt með Django Templates, Bootstrap, CSS og JavaScript og var keyrt á Azure.",
        ],
      },
      "e-commerce-microservices": {
        title: "E-Commerce Microservices Platform",
        category: "Full-stack og bakendaverkefni",
        summary:
          "Örugg microservices-lausn fyrir vörulista og pantanir, keyrð í Docker.",
        details: [
          "Þróaði tvær ASP.NET Core-þjónustur, aðra fyrir vörulista og hina fyrir pantanir, sem tengjast í gegnum API Gateway. Hvor þjónusta fylgir lagskiptri uppbyggingu með controller, service, repository og DTO, en Entity Framework Core sér um breytingar á PostgreSQL-gagnagrunninum.",
          "Auth0 og JWT-heimildir vernda API-endapunkta fyrir notendur. Fyrir samskipti milli þjónustanna notar API Gateway OAuth client credentials til að sækja machine-to-machine token. API Gateway sækir einnig gögn úr báðum þjónustum, bætir núverandi vöruheitum og verði við pöntunarlínur og reiknar út heildarverð pöntunar.",
          "Next.js- og TypeScript-framendi sér um Auth0-innskráningu og sækir access token til að prófa verndaða API-endapunkta. Docker Compose keyrir API Gateway, bæði API-in, framendann og PostgreSQL sem sjálfstæðar þjónustur á innra neti með varanlegri gagnageymslu.",
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
