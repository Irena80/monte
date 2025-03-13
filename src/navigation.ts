import { getPermalink, getBlogPermalink, } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Resor',
      links: [
        {
          text: 'Företagsresor',
          href: getPermalink('/resor/foretagsresor'),
        },
        {
          text: 'Gruppresor',
          href: getPermalink('/resor/gruppresor'),
        },
      
        {
          text: 'Sportresor',
          href: getPermalink('/resor/sportresor'),
        },
        {
          text: 'Herceg Novi',
          href: getPermalink('/hercegnovi'),
        },
      
        {
          text: 'Budva',
          href: getPermalink('/budva'),
        },
       
        
        {
          text: 'Andra destionationer',
          href: getPermalink('/belgrad'),
        },
      
      
       
       

      ],
    },
    {
      text: 'Resepaket',
      links: [
       
        {
          text: 'Resepaket',
          href: getPermalink('/boka'),
        },
        {
          text: 'Utflykter',
          href: getPermalink('/utflykter'),
        },
       
        
    
     
      ],
    },
    {
      text: 'Utforska',
      links: [
        
      
        {
          text: 'Kusten',
          href: getPermalink('/kusten'),
        },
       
       
        {
          text: 'Inlandet',
          href: getPermalink('/inlandet'),
        },
        {
          text: 'Aktiviteter',
          href: getPermalink('/aktiviteter'),
        },
        {
          text: 'Hotell',
          href: getPermalink('/hotell'),
        },
      
        
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
      ],
    },
  
    {
      text: 'Kontakt',
      links: [
      
        {
          text: 'Kontakt',
          href: getPermalink('/contact'), 
        },
        {
          text: 'Om oss',
          href: getPermalink('/about'),
        },
        {
          text: 'Reseinfo',
          href: getPermalink('/reseinfo'),
        },
        {
          text: 'Resevillkor',
          href: getPermalink('/privacy'),
        },
       
       
      
        
      ],
    },
  
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mediteranobay_travel/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
   
    
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="../src/assets/images/morecovek.webp" alt="onWidget logo" loading="lazy"></img>
     <a class="text-blue-600 underline dark:text-muted" href="https://mediteranobay.com/"> Mediteranobay</a> · All rights reserved.
  `,
};
