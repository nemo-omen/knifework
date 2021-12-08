<!-- <script context="module">
  export async function load({fetch}) {

  }
</script> -->
<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintIn, quintOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';
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
  <div class="recipe-info">
    <h2>{recipe.name}</h2>
    <img class="recipe-image" src={recipe.photourl} width="800" height="450" alt={recipe.name} />
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
          <!-- <li>{JSON.stringify(ingredient.Ingredient)}</li> -->
        {/each}
      </ul>
    </div>
    <!-- {#if recipe.imageUrl} -->
    <!-- {/if} -->
  </div>
  <div class="modal-control">
    <button on:click={() => dispatch('save')} class="ui-button">Edit</button>
    <button on:click={() => dispatch('close')} class="ui-button">Close</button>
  </div>
</div>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    /* gap: 2rem; */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray-9);
    padding: 1rem;
  }

  .modal-control {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .ui-button {
    border: none;
    background-color: var(--accent);
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .ui-button:hover {
    background-color: var(--accent-secondary);
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.4);
  }

  .ui-button:active {
    background-color: var(--light);
  }

  .recipe-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: end; */
    /* grid-gap: 10vw; */
    max-width: 60%;
    margin: 0 auto;
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
