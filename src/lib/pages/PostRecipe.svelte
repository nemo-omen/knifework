<script>
  import { fade } from 'svelte/transition';
  import { quintIn } from 'svelte/easing';
  import Icon from '$lib/components/Icon.svelte';
</script>

<section
  class="page"
  in:fade={{ duration: 400, delay: 250, easing: quintIn }}
  out:fade={{ duration: 200, easing: quintIn }}
>
  <div class="page-content">
    <h2>Stuff</h2>
  </div>
</section>
