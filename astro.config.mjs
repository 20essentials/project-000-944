// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport'
  },
  build: {
    assets: 'static',
  },
  trailingSlash: 'never',
  integrations: [icon()],
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: { drafts: { customMedia: true } }
    },
    build: { cssMinify: 'lightningcss' }
  }
});
