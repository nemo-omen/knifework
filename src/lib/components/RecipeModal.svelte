<!-- <script context="module">
  export async function load({fetch}) {

  }
</script> -->
<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintIn, quintOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';
  import Icon from './Icon.svelte';
  const dispatch = createEventDispatcher();
  export let recipe;
  console.log(recipe);

  // onMount(async () => {
  //   const response = await fetch(`/recipes/${recipe.id}.json`);
  // });
</script>

<div
  class="modal"
  in:fade={{ duration: 400, easing: quintIn }}
  out:fade={{ duration: 400, easing: quintOut }}
>
  <div class="modal-head">
    <h2>{recipe.name}</h2>
    <div class="modal-control">
      <button class="icon-button modal-button" on:click={() => dispatch('edit')}>
        <Icon name="edit" />
      </button>
      <button class="icon-button modal-button" on:click={() => dispatch('close')}>
        <Icon name="close" />
      </button>
    </div>
  </div>
  <div class="recipe-info">
    {#if recipe.image}
      <img class="recipe-image" src={recipe.photourl} width="800" height="450" alt={recipe.name} />
    {/if}

    <div class="recipe-prep">
      <h3>Serves</h3>
      <p>{recipe.servings}</p>
      <h3>Prep Time</h3>
      <p>{recipe.preptime}</p>
      <h3>Cook Time</h3>
      <p>{recipe.cooktime}</p>
      <h3>Ingredients</h3>
      <ul class="recipe-list">
        {#each recipe.ingredients as ingredient}
          <li>{ingredient.Ingredient.name}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 1rem;
    left: 10vw;
    right: 10vw;
    bottom: 1rem;
    background-color: var(--gray-8);
    border-radius: 1rem;
    box-shadow: var(--shadow-4);
    padding: 1rem;
  }

  .modal-head {
    display: flex;
    justify-content: space-between;
  }

  .modal-control {
    display: flex;
    gap: 1rem;
  }

  .modal-button {
    min-height: unset;
    max-height: unset;
    padding: 0;
    padding: 0.25rem;
    border-radius: var(--radius-2);
    border: 1px solid var(--gray-7);
    /* box-shadow: var(--shadow-2); */
    /* background-color: var(--gray-8); */
  }

  .recipe-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: end; */
    /* grid-gap: 10vw; */
    /* max-width: 60%; */
    /* margin: 0 auto; */
  }

  .recipe-list {
    list-style-type: none;
    margin: 1rem 0;
    padding: 0;
  }
  .recipe-list li {
    margin: 1rem 0;
  }
  h2,
  h3 {
    text-decoration: underline;
    text-underline-offset: 0.3em;
  }

  h2 {
    font-size: 2rem;
  }
</style>
