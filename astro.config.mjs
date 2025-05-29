import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://tunombre.github.io',
  base: '/accesibilidad-for-dummies/',
  integrations: [tailwind(), image()],
  vite: {
    build: {
      target: 'esnext' // Para mejor soporte de accesibilidad
    }
  }
});