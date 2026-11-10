import { createElement as h, Fragment, useRef } from 'react';
import { createRoot } from 'react-dom/client';

                
                   
                
                
              
                      
  

const concepts                     = [
  {
    occasion: 'Weddings', title: 'The Ivory Wedding', image: './wedding.jpg',
    alt: 'Ivory drapery, roses and candles in a stone orangery',
    description: 'Candlelit tables, soft draping and ivory flowers for a warm, understated reception.',
  },
  {
    occasion: 'Baptisms', title: 'A Soft Sage Baptism', image: './baptism.jpg',
    alt: 'White flowers and pale sage linens at a baptism reception',
    description: 'White blooms and pale sage linens for a family gathering after the service.',
  },
  {
    occasion: 'Anniversaries', title: 'A Candlelit Anniversary', image: './anniversary.jpg',
    alt: 'Burgundy flowers and candles on a linen-covered dinner table',
    description: 'Deep burgundy flowers, cream linen and candlelight for a milestone dinner.',
  },
  {
    occasion: 'Other events', title: 'A Terracotta Celebration', image: './celebration.jpg',
    alt: 'Peach florals and a terracotta backdrop framing a birthday cake',
    description: 'A sculptural backdrop and peach flowers frame the cake table for a birthday or family party.',
  },
];

function Header() {
  return h('header', null,
    h('a', { className: 'brand', href: '#' }, 'Habesha Decor'),
    h('nav', { 'aria-label': 'Main navigation' },
      h('a', { href: '#occasions' }, 'Gallery'),
      h('a', { href: '#services' }, 'Services'),
      h('a', { className: 'nav-cta', href: '#planning' }, 'Plan your event')));
}

function Hero() {
  const wedding = concepts[0];
  return h('section', { className: 'hero' },
    h('div', null,
      h('span', { className: 'eyebrow' }, 'Home / Habesha wedding decor Switzerland'),
      h('h1', null, 'Habesha Wedding Decorator in ', h('em', null, 'Switzerland')),
      h('p', null, 'Ethiopian and Eritrean wedding decor, from the reception to the Melse. Styling for baptisms, anniversaries, and family celebrations across Switzerland.'),
      h('div', { className: 'hero-actions' },
        h('a', { className: 'button', href: '#planning' }, 'Plan your event'),
        h('a', { className: 'button button-outline', href: '#occasions' }, 'View decor ideas ↓'))),
    h('img', { className: 'art', src: wedding.image, fetchPriority: 'high', alt: '' }));
}

function Introduction() {
  return h('section', { className: 'intro' },
    h('p', null, 'Habesha Decor brings Ethiopian and Eritrean wedding traditions into the setting you choose for your celebration in Switzerland.'),
    h('span', { className: 'gold-rule', 'aria-hidden': true }),
    h('p', null, 'Find inspiration for your reception, Melse, or next family celebration. Selections can begin with a backdrop, a palette, or a detail you love.'));
}

function Services() {
  return h('section', { className: 'service-feature', id: 'services' },
    h('figure', null,
      h('img', { src: './anniversary.jpg', alt: concepts[2].alt, loading: 'lazy' }),
      h('figcaption', null, 'Styling concept · Candlelit tablescape')),
    h('div', null,
      h('span', { className: 'eyebrow' }, 'Habesha wedding styling'),
      h('h2', null, 'From the reception to the Melse'),
      h('p', null, 'Think ivory draping and floral arrangements around the sweetheart table, then warm tones and woven textures for the Melse. Leave room in your plan for a buna corner, family seating, and dancing.'),
      h('a', { className: 'button', href: '#planning' }, 'Plan your celebration')));
}

function ConceptCard({ concept }                      ) {
  const dialog = useRef                   (null);
  const titleId = concept.image.slice(2, -4) + '-title';

  return h('article', { className: 'card' },
    h('button', { className: 'photo-button', type: 'button',
      'aria-label': 'View ' + concept.title, onClick: () => dialog.current?.showModal() },
      h('img', { src: concept.image, alt: '', loading: 'lazy' }),
      h('span', { className: 'photo-icon', 'aria-hidden': true }, '↗')),
    h('span', null, concept.occasion),
    h('h3', null, concept.title),
    h('p', null, concept.description),
    h('dialog', { ref: dialog, 'aria-labelledby': titleId },
      h('img', { src: concept.image, alt: concept.alt, loading: 'lazy' }),
      h('div', { className: 'photo-caption' },
        h('h3', { id: titleId }, concept.title),
        h('form', { method: 'dialog' }, h('button', { className: 'close-button', autoFocus: true }, 'Close')))));
}

function Gallery() {
  return h('section', { className: 'services', id: 'occasions' },
    h('span', { className: 'eyebrow' }, 'Honoring Habesha tradition'),
    h('h2', null, 'Ethiopian & Eritrean wedding inspiration'),
    h('p', { className: 'gallery-note' }, 'Explore four AI-generated styling concepts for inspiration. Select a photo to see it in more detail.'),
    h('div', { className: 'grid' }, concepts.map(concept => h(ConceptCard, { key: concept.occasion, concept }))));
}

function Planning() {
  return h('section', { className: 'planning', id: 'planning' },
    h('div', null,
      h('span', { className: 'eyebrow' }, 'Plan your event'),
      h('h2', null, 'Bring your ideas together')),
    h('ul', { className: 'event-details' },
      h('li', null, 'Your event date and the town or venue'),
      h('li', null, 'Your occasion and approximate guest count'),
      h('li', null, 'Colors, inspiration photos, and decor details you love')));
}

function Questions() {
  const questions = [
    ['What occasions does Habesha Decor cover?', 'Weddings, baptisms, anniversaries, birthdays, and other family celebrations in Switzerland.'],
    ['What should I have ready when planning decor?', 'Start with your event date, venue or town, and approximate guest count. Add any colors, traditions, or decor ideas you want to include.'],
    ['Can I use a gallery concept as inspiration?', 'Yes. Choose the colors, flowers, or backdrop details you like, then use them as a starting point for your own celebration.'],
  ];

  return h('section', { className: 'faq' },
    h('span', { className: 'eyebrow' }, 'Before your event'),
    h('h2', null, 'Frequently asked questions'),
    ...questions.map(([question, answer]) => h('details', { key: question },
      h('summary', null, question), h('p', null, answer))));
}

function App() {
  return h(Fragment, null,
    h('a', { className: 'skip-link', href: '#main' }, 'Skip to content'),
    h(Header),
    h('main', { id: 'main' }, h(Hero), h(Introduction), h(Gallery), h(Services), h(Questions), h(Planning)),
    h('footer', null, 'Habesha Decor · Switzerland'));
}

const root = document.getElementById('root');
if (root) createRoot(root).render(h(App));


