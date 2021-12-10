// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),
  kit: {
    ssr: false,
    adapter: adapter({ out: 'dist' }),
    vite: () => ({
      // optimizeDeps: {
      //   include: ['pg'],
      //   esbuildOptions: {
      //     keepNames: true
      //   }
      // }
    })

    // hydrate the <div id="svelte"> element in src/app.html
    // target: '#svelte'
  }
};

export default config;
