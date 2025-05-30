import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site:'https://github.com/4KaifaZ4',
  base: 'Eval_DD_wcag-educativo',
});
