<script>
  import { fade } from 'svelte/transition';
  import { quintIn } from 'svelte/easing';
  import { layout } from '$lib/stores/layout.store.js';
  import { recipeStore } from '$lib/stores/recipe.store.js';
  import RecipeGridLayout from '$lib/components/RecipeGridLayout.svelte';
  import RecipeModal from '$lib/components/RecipeModal.svelte';

  let isModalOpen = false;
  let currentRecipe;

  function openRecipe(event) {
    const id = event.detail;
    currentRecipe = $recipeStore[id];
    isModalOpen = true;
  }
</script>

<section class="page" in:fade={{ duration: 400, delay: 250, easing: quintIn }}>
  <div class="page-content">
    {#if isModalOpen}
      <RecipeModal recipe={currentRecipe} on:close={() => (isModalOpen = false)} />
    {:else}
      <RecipeGridLayout on:open={openRecipe} />
    {/if}
  </div>
</section>
