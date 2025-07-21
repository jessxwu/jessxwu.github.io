import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  site: 'https://jessxwu.github.io',
  integrations: [
    mdx({
      remarkPlugins: [remarkReadingTime], // for .mdx files
    }),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    sentry(),
    spotlightjs()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime] // for .md files
  },
  viewTransitions: true
});