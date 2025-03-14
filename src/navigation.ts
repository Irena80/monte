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
          text: 'Blogg',
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
          href: getPermalink('/om'),
        },
        {
          text: 'Reseinfo',
          href: getPermalink('/reseinfo'),
        },
        {
          text: 'Resevillkor',
          href: getPermalink('/resevillkor'),
        },
       
       
      
        
      ],
    },
  
  ],
 
};

export const footerData = {
  links: [
    {
      title: 'Resor',
      links: [
        { text: 'Företagsresor', href: '/resor/foretagsresor' },
        { text: 'Gruppresor', href: '/resor/gruppresor' },
        { text: 'Sportresor', href: '/resor/sportresor' },
     
      ],
    },
    {
      title: 'Resepaket',
      links: [
        { text: 'Färdiga paket', href: '/boka' },
        { text: 'Utflykter', href: '/utflykter' },
     
      ],
    },
    {
      title: 'Utforska',
      links: [
        { text: 'Aktiviteter', href: '/aktiviteter' },
        { text: 'Kusten', href: '/kusten' },
        { text: 'Inlandet', href: '/inlandet' },
        { text: 'Blogg', href: '/blog' },
     
      ],
    },
    {
      title: 'Info',
      links: [
      
        { text: 'Om oss', href: '/om' },
        { text: 'Kontakt', href: '/contact' }, 
     
 
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Resevillkor', href: getPermalink('/resevillkor') },
    { text: 'Reseinfo', href: getPermalink('/reseinfo') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mediteranobay_travel/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
   
    
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="../images/logo3.png" alt="onWidget logo" loading="lazy"></img>
     <a class="text-blue-600 underline dark:text-muted" href="https://mediteranobay.com/"> Mediteranobay</a> · All rights reserved.
  `,
};
