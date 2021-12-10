<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/recipes.json');

    if (res.ok) {
      return {
        props: {
          recipes: await res.json()
        }
      };
    }

    return {
      status: res.status,
      error: new Error(res.error.message)
    };
  }
</script>

<script>
  import { page } from '$app/stores';
  import '$lib/style/global.css';
  import { recipeStore } from '$lib/stores/recipe.store.js';
  import Icon from '$lib/components/Icon.svelte';
  import { fade } from 'svelte/transition';
  import { quintIn, quintOut } from 'svelte/easing';
  // import { menuService } from '$lib/machines/menu.machine.js';
  // import { layout } from '$lib/stores/layout.store.js';
  // import Recipes from '$lib/pages/Recipes.svelte';
  // import Shopping from '$lib/pages/Shopping.svelte';
  // import Welcome from '$lib/pages/Welcome.svelte';
  // import PostRecipe from '$lib/pages/PostRecipe.svelte';

  export let recipes;

  // $: current = $menuService.context.currentMenu;

  // function sendToMain() {
  //   menuService.send({ type: 'GO', key: 'welcome' });
  // }

  // function setLayout(layoutKey) {
  //   $layout = layoutKey;
  // }

  console.log('recipes: ', recipes);

  for (const recipe of recipes) {
    $recipeStore[recipe.id] = recipe;
  }

  console.log($recipeStore);
</script>

<!-- {#if $menuService.context.currentMenu !== 'welcome'}
  <div id="content-header" class="content-sub-header">
    {#if $menuService.context.currentMenu === 'recipes'}
      <div class="page-heading">
        <Icon name="book" />
        <h2>Recipes</h2>
      </div>
    {:else if $menuService.context.currentMenu === 'shopping'}
      <div class="page-heading">
        <Icon name="cart" />
        <h2>Shopping Lists</h2>
      </div>
    {:else if $menuService.context.currentMenu === 'postrecipe'}
      <div class="page-heading">
        <Icon name="add" />
        <h2>New Recipe</h2>
      </div>
    {/if}
  </div>
{/if} -->

<!-- {#if $menuService.context.currentMenu === 'recipes'}
  <Recipes />
{:else if $menuService.context.currentMenu === 'shopping'}
  <Shopping />
{:else if $menuService.context.currentMenu === 'postrecipe'}
  <PostRecipe />
{:else if $menuService.context.currentMenu === 'welcome'}
  <Welcome />
{:else}
  <Welcome />
{/if} -->

<div id="intro" class="center" in:fade={{ duration: 400, delay: 250, easing: quintIn }}>
  <div id="intro-icon">
    <Icon name="knife" />
  </div>
  <h1 id="intro-heading">Knifework</h1>
  <div class="three-up">
    <a class="card card-welcome" href="/recipes">
      <h3>Recipes</h3>
      <Icon name="book" />
    </a>
    <a class="card card-welcome" href="/recipes/new">
      <h3>New Recipe</h3>
      <Icon name="add" />
    </a>
    <a class="card card-welcome" href="/shopping">
      <h3>Shopping</h3>
      <Icon name="cart" />
    </a>
  </div>
</div>

<style>
  #intro {
    gap: 1rem;
    color: var(--accent);
  }

  #intro-icon {
    font-size: 10vw;
    order: 1;
  }

  #intro-heading {
    font-size: 3rem;
    font-weight: 400;
    order: 2;
  }

  .three-up {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 3rem;
    order: 3;
  }

  .card {
    border: none;
    background: var(--dark);
    color: var(--light-mid);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transition: all 0.3s ease-out;
  }
  .card:hover {
    color: var(--accent-secondary);
    /* background: var(--dark-mid); */
  }

  .card h3 {
    order: 2;
  }

  .card:nth-child(2) {
    order: 1;
  }

  .card-welcome {
    font-size: 3rem;
  }

  .card-welcome h3 {
    font-size: 1.5rem;
  }

  a {
    color: var(--accent-secondary);
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: none;
  }
</style>
