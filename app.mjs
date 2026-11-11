import { LanguageProvider } from './language.mjs';
import { createElement as h } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './page.mjs';

const root = document.getElementById('root');
if (root) createRoot(root).render(h(LanguageProvider, null, h(App)));


