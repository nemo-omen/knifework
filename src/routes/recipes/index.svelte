<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import { quintIn } from 'svelte/easing';
  import RecipeGridLayout from '$lib/components/RecipeGridLayout.svelte';

  console.log('$page in /recipe', $page);
</script>

<section class="page" in:fade={{ duration: 200, delay: 200, easing: quintIn }}>
  <RecipeGridLayout />
</section>
