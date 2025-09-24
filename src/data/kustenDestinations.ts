export interface KustDestination {
  slug: string;
  title: string;
  excerpt: string;
  body: string[]; // paragraphs
  image: string;
  imageAlt: string;
  seo?: {
    description?: string;
  };
}

export const kustDestinations: KustDestination[] = [
  {
    slug: 'perast',
    title: 'Perast',
    excerpt: 'Romantisk barockstad med kyrköar och stilla palats vid Kotorbukten.',
    image: '/images/perast.jpg',
    imageAlt: 'Perast kuststad',
    body: [
      'Perast är en av de mest stämningsfulla platserna längs Kotorbukten – en liten stad som känns som ett levande museum från barockens glansdagar.',
      'Från kajen blickar du ut mot de två ikoniska kyrköarna: Gospa od Škrpjela och Sveti Đorđe. Båtturer går regelbundet och ger ett unikt perspektiv på bukten.',
      'Under lågsäsong är Perast stilla och poetisk, perfekt för långsamma promenader och fotografering i mjukt ljus.',
      'Kombinera gärna med ett besök i Kotor eller en solnedgångstur med privat båt.'
    ],
    seo: { description: 'Upptäck Perast – en barock pärla i Kotorbukten med kyrköar och stilla skönhet.' }
  },
  {
    slug: 'blue-cave',
    title: 'Blue Cave',
    excerpt: 'Magisk havsgrotta med turkost vatten och dramatiskt ljusspel.',
    image: '/images/blue.jpg',
    imageAlt: 'Blue Cave turkost vatten',
    body: [
      'Blue Cave (Plava špilja) är en av Montenegros mest omtalade naturupplevelser – känd för sitt elektriskt turkosa vatten.',
      'Grottan nås med båt och upplevelsen är som bäst under klar förmiddag då ljuset reflekteras maximalt i vattnet.',
      'Många kombinerar grottan med badstopp vid avskilda vikar eller besök till fästningen Mamula.',
      'Vid lugnt hav kan du simma in och uppleva ljusfenomenet från insidan – en nästan overklig känsla.'
    ],
    seo: { description: 'Blue Cave i Montenegro – upplev det magiska ljuset och kristallklart vatten i en havsgrotta.' }
  },
  {
    slug: 'ulcinj',
    title: 'Ulcinj',
    excerpt: 'Södra kusten med milslång sandstrand och mångkulturell historia.',
    image: '/images/ulcinj.jpg',
    imageAlt: 'Ulcinj sandstrand',
    body: [
      'Ulcinj ligger längst söderut och bjuder på en helt annan stämning än övriga kusten – präglad av orientaliska influenser och lång historia.',
      'Velika Plaža är en av Europas längsta sandstränder och ett paradis för kitesurfare under sommarens vindar.',
      'Gamla stan klättrar uppför klipporna med utsikt mot havet och Albaniens kustlinje längre söderut.',
      'Om våren och hösten är stranden nästan tom – perfekt för naturälskare som söker stillhet.'
    ],
    seo: { description: 'Ulcinj – södra Montenegros sandstränder, historia och kitesurf.' }
  },
  {
    slug: 'sveti-stefan',
    title: 'Sveti Stefan ö',
    excerpt: 'Ikonisk ö med lyxig atmosfär, terrakottatak och exklusiva stränder.',
    image: '/images/svetistefan2.jpg',
    imageAlt: 'Sveti Stefan ikonisk ö',
    body: [
      'Sveti Stefan är Montenegros mest fotograferade siluett – en liten ö förbunden med fastlandet via en smal sandbank.',
      'Ön huserar idag ett exklusivt hotellområde, men vyerna och stränderna runt om är tillgängliga för alla.',
      'Soluppgång och solnedgång ger dramatiska färger över bukten och de rosatonade stenhusen.',
      'En kort bilresa bort ligger lugnare stränder och traditionella byar för avkoppling.'
    ],
    seo: { description: 'Sveti Stefan – Montenegros ikoniska ö med terrakottatak och exklusiv atmosfär.' }
  },
  {
    slug: 'budva',
    title: 'Budva',
    excerpt: 'Levande kuststad med historisk kärna, stränder och nattliv.',
    image: '/images/budva3.webp',
    imageAlt: 'Budva gammal stad och hav',
    body: [
      'Budva kombinerar badliv, nattliv och kultur i en kompakt och energisk stad.',
      'Den murade gamla staden (Stari Grad) bjuder på smala gränder, små torg och havsnära murar.',
      'Under sensommar och tidig höst är klimatet milt men staden lugnare – perfekt för en balanserad vistelse.',
      'Från Budva utgår båtutflykter till närliggande öar och dolda vikar.'
    ],
    seo: { description: 'Budva – stränder, nattliv och historisk charm på Montenegros kust.' }
  },
  {
    slug: 'kotorbukten',
    title: 'Kotorbukten',
    excerpt: 'UNESCO-skyddad fjordliknande bukt med dramatisk natur och historia.',
    image: '/images/kotorbukten.jpg',
    imageAlt: 'Kotorbukten vy',
    body: [
      'Kotorbukten (Boka Kotorska) slingrar sig som en fjord in i bergen och skapar ett unikt mikroklimat.',
      'Städer som Kotor, Perast och Herceg Novi ligger som pärlor runt vattnet och bjuder på kultur och stillhet.',
      'Vandring upp till Kotor-fortets murar ger en av de mest klassiska vyerna i hela Montenegro.',
      'Båtutflykter, kajak och lugna morgonpromenader gör bukten attraktiv året runt.'
    ],
    seo: { description: 'Kotorbukten – dramatik, kulturarv och natur i Montenegros UNESCO-skyddade fjord.' }
  },
  {
    slug: 'mamula',
    title: 'Forten Mamula',
    excerpt: 'Historisk fästning på en rund ö vid kusten – idag restaurerad.',
    image: '/images/mamula.jpg',
    imageAlt: 'Forten Mamula ö',
    body: [
      'Forten Mamula ligger på ön Lastavica och utgjorde en viktig defensiv punkt vid inloppet till Kotorbukten.',
      'Idag är delar av anläggningen restaurerad och kombinerar historia med exklusiv gästfrihet.',
      'Båtutflykter hit kan kombineras med badstopp i Blue Cave eller avskilda vikar.',
      'Solnedgång runt ön ger dramatiska siluetter mot Adriatiska havet.'
    ],
    seo: { description: 'Forten Mamula – historisk fästning på en rund ö i Adriatiska havet.' }
  },
  {
    slug: 'herceg-novi',
    title: 'Herceg Novi',
    excerpt: 'Lugnare kuststad med botaniska inslag, fort och lång strandpromenad.',
    image: '/images/stari-grad3.jpg',
    imageAlt: 'Herceg Novi gammal stad',
    body: [
      'Herceg Novi ligger vid inloppet till Kotorbukten och är känd för sina trappor, fort och blomstrande växtlighet.',
      'Strandpromenaden Igalo–Meljine sträcker sig flera kilometer och passar för cykel eller långsam kvällspromenad.',
      'Staden är ett bra basläger för de som vill kombinera kustliv med små utflykter in i bukten.',
      'Festivaler under våren och sommaren ger färg och lokalt liv åt gränderna.'
    ],
    seo: { description: 'Herceg Novi – kuststad med blomstrande vegetation, fort och lång promenad.' }
  },
  {
    slug: 'tivat',
    title: 'Tivat',
    excerpt: 'Marina, design, gastronomi och modern energi vid havet.',
    image: '/images/Tivat.webp',
    imageAlt: 'Tivat marina',
    body: [
      'Tivat har genomgått en dynamisk transformation de senaste åren med lyxmarinan Porto Montenegro som nav.',
      'Restauranger, caféer och designbutiker skapar en kosmopolitisk känsla längs kajerna.',
      'Perfekt för resenärer som vill kombinera båtliv med bekväm bas nära flygplatsen.',
      'Kvällstid speglar sig ljusen i den stilla bukten och skapar en elegant atmosfär.'
    ],
    seo: { description: 'Tivat – modern marina, design och avslappnad elegans på kusten.' }
  },
  {
    slug: 'bar',
    title: 'Gamla stan i Bar',
    excerpt: 'Ruinstad och friluftsmuseum med lager av historia.',
    image: '/images/bar.jpg',
    imageAlt: 'Gamla stan i Bar ruiner',
    body: [
      'Gamla Bar (Stari Bar) ligger några kilometer från den moderna kuststaden och ger en tidsresa genom epoker.',
      'Området rymmer rester av kyrkor, fästningsverk och bostadshus omgivna av olivlundar.',
      'I närheten finns ett av regionens äldsta olivträd – symbol för uthållighet och lokal kultur.',
      'På kvällen lyser små caféer upp stenmurarna och skapar intim stämning.'
    ],
    seo: { description: 'Gamla stan i Bar – ruiner, olivlundar och historia i öppet friluftsmuseum.' }
  },
  {
    slug: 'st-nicola',
    title: 'St Nicola ö',
    excerpt: 'Ö nära Budva med badvikar och stilla natur.',
    image: '/images/st.jpg',
    imageAlt: 'St Nicola ö havsvy',
    body: [
      'St Nicola (Sveti Nikola) är en populär dagsutflykt från Budva med klara vatten och små stränder.',
      'Ön nås med båt på bara några minuter och erbjuder en stilla kontrast till Budvas puls.',
      'Utanför högsäsong är det enkelt att hitta en egen plats för bad och avkoppling.',
      'En picknick i skuggan av tallarna på eftermiddagen rekommenderas.'
    ],
    seo: { description: 'St Nicola – lugn ö nära Budva med klart vatten och små stränder.' }
  }
];

export function getKustDestination(slug: string) {
  return kustDestinations.find(d => d.slug === slug);
}
