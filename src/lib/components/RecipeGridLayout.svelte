<script>
  import { createEventDispatcher } from 'svelte';
  import { recipeStore } from '$lib/stores/recipe.store.js';

  const dispatch = createEventDispatcher();

  function openRecipe(id) {
    dispatch('open', id);
  }
</script>

<div class="card-grid">
  {#each Object.values($recipeStore) as recipe}
    <div class="card" on:click={() => openRecipe(recipe.id)}>
      <h3>{recipe.name}</h3>
      <div class="recipe-body">
        <p>Servings: {recipe.servings}</p>
        <p>Prep Time: {recipe.preptime} minutes</p>
        <p>Cook Time: {recipe.cooktime} minutes</p>
      </div>
    </div>
  {/each}
</div>
