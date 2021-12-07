<script>
  import { fade } from 'svelte/transition';
  import { quintIn } from 'svelte/easing';
  import Icon from '$lib/components/Icon.svelte';
  import { layout } from '$lib/stores/layout.store.js';
</script>

<section class="page" in:fade={{ duration: 400, delay: 250, easing: quintIn }}>
  <div class="page-content">
    {#if $layout === 'grid'}
      <h2>Grid</h2>
    {:else if $layout === 'list'}
      <h2>List</h2>
    {/if}
  </div>
</section>
