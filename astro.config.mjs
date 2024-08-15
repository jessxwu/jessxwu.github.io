import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import { remarkReadingTime } from './remark-reading-time.mjs';


// https://astro.build/config
export default defineConfig({
  site: 'https://jessxwu.github.io',
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  }), sentry(), spotlightjs()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
    viewTransitions: true
});
