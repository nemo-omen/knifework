import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),
  kit: {
    ssr: false,
    adapter: adapter(),
    vite: () => ({
      optimizeDeps: {
        include: ['remark', 'remark-rehype', 'rehype-stringify'],
        keepNames: true
      }
    })

    // hydrate the <div id="svelte"> element in src/app.html
    // target: '#svelte'
  }
};

export default config;
