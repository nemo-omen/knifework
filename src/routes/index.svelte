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
  import '$lib/style/global.css';
  import { menuService } from '$lib/machines/menu.machine.js';
  import { layout } from '$lib/stores/layout.store.js';
  import Icon from '$lib/components/Icon.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Recipes from '$lib/pages/Recipes.svelte';
  import Ingredients from '$lib/pages/Ingredients.svelte';
  import Equipment from '$lib/pages/Equipment.svelte';
  import Shopping from '$lib/pages/Shopping.svelte';
  import Welcome from '$lib/pages/Welcome.svelte';
  import Settings from '$lib/pages/Settings.svelte';
  import PostRecipe from '$lib/pages/PostRecipe.svelte';

  export let recipes;
  $: current = $menuService.context.currentMenu;

  function sendToMain() {
    menuService.send({ type: 'GO', key: 'welcome' });
  }

  function setLayout(layoutKey) {
    $layout = layoutKey;
  }

  console.log('recipes: ', recipes);
</script>

{#if $menuService.context.currentMenu !== 'welcome'}
  <div id="content-header" class="content-sub-header">
    {#if $menuService.context.currentMenu === 'recipes'}
      <div class="page-heading">
        <Icon name="book" />
        <h2>Recipes</h2>
      </div>
      <div class="page-layout-control">
        <button class="icon-control-button" on:click={() => setLayout('list')}>
          <Icon name="list" />
        </button>
        <button class="icon-control-button" on:click={() => setLayout('grid')}>
          <Icon name="grid" />
        </button>
      </div>
    {:else if $menuService.context.currentMenu === 'shopping'}
      <div class="page-heading">
        <Icon name="cart" />
        <h2>Shopping Lists</h2>
      </div>
      <div class="page-layout-control">
        <button class="icon-control-button" on:click={() => setLayout('list')}>
          <Icon name="list" />
        </button>
        <button class="icon-control-button" on:click={() => setLayout('grid')}>
          <Icon name="grid" />
        </button>
      </div>
    {:else if $menuService.context.currentMenu === 'postrecipe'}
      <div class="page-heading">
        <Icon name="add" />
        <h2>New Recipe</h2>
      </div>
    {/if}
  </div>
{/if}

{#if $menuService.context.currentMenu === 'recipes'}
  <Recipes />
{:else if $menuService.context.currentMenu === 'shopping'}
  <Shopping />
{:else if $menuService.context.currentMenu === 'postrecipe'}
  <PostRecipe />
{:else if $menuService.context.currentMenu === 'welcome'}
  <Welcome />
{:else}
  <Welcome />
{/if}
