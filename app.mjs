import { createElement as h } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './page.mjs';

const root = document.getElementById('root');
if (root) createRoot(root).render(h(App));

