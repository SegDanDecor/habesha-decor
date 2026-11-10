import { createElement as h, Fragment, useRef } from 'react';
import { concepts, weddingReferences } from './gallery.mjs';
                                             

function Header() {
  return h('header', null,
    h('a', { className: 'brand', href: '#' }, h('img', { src: './logo.svg?v=counterspin', alt: '', width: 44, height: 44 }), 'ሰገናት Habesha Decor'),
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
    h('p', null, 'ሰገናት Habesha Decor brings Ethiopian and Eritrean wedding traditions into the setting you choose for your celebration in Switzerland.'),
    h('span', { className: 'gold-rule', 'aria-hidden': true }),
    h('p', null, 'Find inspiration for your reception, Melse, or next family celebration. Selections can begin with a backdrop, a palette, or a detail you love.'));
}

function Services() {
  return h('section', { className: 'service-feature', id: 'services' },
    h('figure', null,
      h('img', { src: weddingReferences[5].image, alt: weddingReferences[5].alt, loading: 'lazy' })),
    h('div', null,
      h('span', { className: 'eyebrow' }, 'Our services'),
      h('h2', null, 'Decor for every celebration'),
      h('ul', { className: 'event-details' },
        h('li', null, h('strong', null, 'Birthday decor'), ' — Cake tables, photo backdrops, and themed details.'),
        h('li', null, h('strong', null, 'Baptism decor'), ' — Soft palettes and welcoming table settings for the family reception.'),
        h('li', null, h('strong', null, 'Wedding decor'), ' — Reception stages, florals, and draping for weddings and Melse celebrations.'),
        h('li', null, h('strong', null, 'Family celebrations'), ' — Decor for anniversaries, engagements, and other special gatherings.')),
      h('a', { className: 'button', href: '#planning' }, 'Plan your celebration')));
}

function ConceptCard({ concept }                                            ) {
  const dialog = useRef                   (null);
  const titleId = concept.image.slice(2, concept.image.lastIndexOf('.')) + '-title';

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
    h('h2', null, 'Wedding Decor Inspiration'),
    h('div', { className: 'grid reference-grid' }, weddingReferences.map(concept => h(ConceptCard, { key: concept.image, concept }))),
    h('h2', { className: 'concept-heading' }, 'More celebration ideas'),
    h('div', { className: 'grid' }, concepts.map(concept => h(ConceptCard, { key: concept.image, concept }))));
}

function Planning() {
  return h('section', { className: 'planning', id: 'planning' },
    h('div', null,
      h('span', { className: 'eyebrow' }, 'Plan your event'),
      h('h2', null, 'Request a booking'),
      h('p', null, 'Choose your preferred date and send us your event details. We’ll reply by email to confirm availability.')),
    h('form', { className: 'booking-form', action: 'https://formsubmit.co/bekuretsion222@gmail.com', method: 'POST' },
      h('input', { type: 'hidden', name: '_subject', value: 'ሰገናት Habesha Decor booking request' }),
      h('label', null, 'Your name', h('input', { name: 'name', autoComplete: 'name', required: true })),
      h('label', null, 'Your email', h('input', { type: 'email', name: 'email', autoComplete: 'email', required: true })),
      h('label', null, 'Occasion', h('select', { name: 'occasion', required: true },
        h('option', { value: '' }, 'Select an occasion'),
        ...['Birthday', 'Baptism', 'Wedding', 'Family celebration', 'Other'].map(name => h('option', { key: name, value: name }, name)))),
      h('label', null, 'Preferred date', h('input', { type: 'date', name: 'date', required: true })),
      h('label', { className: 'booking-wide' }, 'Town or venue', h('input', { name: 'venue' })),
      h('label', { className: 'booking-wide' }, 'Decor ideas or guest count', h('textarea', { name: 'notes', rows: 3 })),
      h('div', { className: 'booking-wide' },
        h('button', { className: 'button', type: 'submit' }, 'Send Booking'))));
}

function Questions() {
  const questions = [
    ['What occasions does ሰገናት Habesha Decor cover?', 'Weddings, baptisms, anniversaries, birthdays, and other family celebrations in Switzerland.'],
    ['What should I have ready when planning decor?', 'Start with your event date, venue or town, and approximate guest count. Add any colors, traditions, or decor ideas you want to include.'],
    ['Can I use a gallery concept as inspiration?', 'Yes. Choose the colors, flowers, or backdrop details you like, then use them as a starting point for your own celebration.'],
  ];

  return h('section', { className: 'faq' },
    h('span', { className: 'eyebrow' }, 'Before your event'),
    h('h2', null, 'Frequently asked questions'),
    ...questions.map(([question, answer]) => h('details', { key: question },
      h('summary', null, question), h('p', null, answer))));
}

export function App() {
  return h(Fragment, null,
    h('a', { className: 'skip-link', href: '#main' }, 'Skip to content'),
    h(Header),
    h('main', { id: 'main' }, h(Hero), h(Introduction), h(Gallery), h(Services), h(Questions), h(Planning)),
    h('footer', null, 'ሰገናት Habesha Decor · Switzerland'));
}

