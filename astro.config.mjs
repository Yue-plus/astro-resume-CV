// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://resume-CV.astro.yue.zone/',
  vite: {
    plugins: [tailwindcss()]
  }
});