import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), image(),astroI18next()],
	site: 'https://www.giovannecorrea.com',
});
