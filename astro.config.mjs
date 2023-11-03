import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), image()],
	site: 'https://www.giovannecorrea.com',
	base: '/portfolio_cv'
});
