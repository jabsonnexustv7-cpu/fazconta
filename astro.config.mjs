import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fazconta.app.br',
  integrations: [sitemap()],
});
