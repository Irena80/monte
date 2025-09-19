// Central shared packages data
export interface TravelPackage {
  id?: string;
  title: string;
  location?: string;
  description: string;
  price?: string;
  imageUrl: string;
  link?: string;
}

export const travelPackages: TravelPackage[] = [
  {
    id: 'budva',
    title: 'Konferensresa till Budva',
    location: 'Avresa februari-oktober 2025 | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Här spenderar ni tre dagar i Budva området där ni mellan konferenser och teambuildning njuter av salta bad, middagar och fest.',
    price: 'Pris från: 12 999 sek',
    imageUrl: '/images/Budva.jpg',
    link: '/budva'
  },
  {
    id: 'hercegnovi',
    title: 'Konferensresa till Herceg Novi',
    location: 'Avresa februari-oktober 2025 | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Här spenderar ni tre dagar i Herceg Novi området där ni mellan konferenser och teambuildning njuter av salta bad, middagar och fest.',
    price: 'Pris från: 12 900 sek',
    imageUrl: '/images/stari-grad3.jpg',
    link: '/hercegnovi'
  },
  {
    id: 'tivat',
    title: 'Konferensresa till Tivat',
    location: 'Avresa året runt | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Här spenderar ni tre dagar i Tivat där ni mellan konferenser och teambuildning njuter av den vackra staden.',
    price: 'Pris från: 11 000 sek',
    imageUrl: '/images/Tivat.webp',
    link: '/tivat'
  },
  {
    id: 'kotor',
    title: 'Konferensresa till Kotor',
    location: 'Avresa året runt | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Här spenderar ni tre dagar i Kotor där ni mellan konferenser och teambuildning njuter av den vackra staden.',
    price: 'Pris från: 10 000 sek',
    imageUrl: '/images/kotorbukten.jpg',
    link: '/kotor'
  },
  {
    id: 'gruppresor',
    title: 'Gruppresor till Montenegro',
    location: 'Avresa året om | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Hör av er till oss så tar vi fram det bästa resepaket som passar just er.',
    price: 'Pris från: 14 900 sek',
    imageUrl: '/images/friends.webp',
    link: '/resor/gruppresor'
  },
  {
    id: 'sportresor',
    title: 'Sportresor till Montenegro',
    location: 'Avresa året om | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Kontakta oss så tar vi fram ett sportarrangemang som passar just er.',
    price: 'Pris från: 16 900 sek',
    imageUrl: '/images/paragliding.webp',
    link: '/resor/sportresor'
  },
  {
    id: 'hostpaket',
    title: 'Höstpaket till Montenegro',
    location: 'Avresa året om | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Hör av er till oss så tar vi fram det bästa resepaket som passar just er.',
    price: 'Kontakta oss för pris',
    imageUrl: '/images/priroda.webp',
    link: '/hostpaket'
  },
  {
    id: 'varpaket',
    title: 'Vårpaket till Montenegro',
    location: 'Avresa året om | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Hör av er till oss så tar vi fram det bästa resepaket som passar just er.',
    price: 'Kontakta oss för pris',
    imageUrl: '/images/spring montenegro.jpg',
    link: '/varpaket'
  },
  {
    id: 'vinterpaket',
    title: 'Vinterpaket till Montenegro',
    location: 'Avresa november-april | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Hör av er till oss så tar vi fram det bästa resepaket som passar just er.',
    price: 'Kontakta oss för pris',
    imageUrl: '/images/kolasin2.jpg',
    link: '/vinterpaket'
  },
  {
    id: 'ekologisk',
    title: 'Ekologik matupplevelse',
    location: 'Avresa året om | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Hör av er till oss så tar vi fram det bästa resepaket som passar just er.',
    price: '',
    imageUrl: '/images/ovcepriroda.jpg',
    link: '/ekologisk'
  },
  {
    id: 'skraeddarsydd',
    title: 'Skräddarsydda resor',
    location: 'Avresa året om | Flyg från Stockholm, Göteborg | 4* hotell',
    description: 'Hör av er till oss så tar vi fram det bästa resepaket som passar just er.',
    price: '',
    imageUrl: '/images/svetistefan2.jpg',
    link: '/kontakt'
  },
  {
    id: 'durmitor',
    title: 'Teambuilding i Durmitor Nationalpark',
    location: 'Avresa maj–oktober | Flyg till Podgorica | Lodger & konferens',
    description: 'Stärk laget i UNESCO-skyddad nationalpark med rafting, vandring och aktiviteter kombinerat med konferens.',
    price: 'Pris från: 7 900 sek',
    imageUrl: '/images/Durmitor.jpg',
    link: '/durmitor'
  }
];
