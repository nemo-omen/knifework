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
  export let recipes;
  import '$lib/style/global.css';
  import { menuService } from '$lib/machines/menu.machine.js';
  import Icon from '$lib/components/Icon.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Recipes from '$lib/pages/Recipes.svelte';
  import Ingredients from '$lib/pages/Ingredients.svelte';
  import Equipment from '$lib/pages/Equipment.svelte';
  import Shopping from '$lib/pages/Shopping.svelte';
  import Welcome from '$lib/pages/Welcome.svelte';
  import Settings from '$lib/pages/Settings.svelte';
  import PostRecipe from '$lib/pages/PostRecipe.svelte';

  $: current = $menuService.context.currentMenu;

  function sendToMain() {
    menuService.send({ type: 'GO', key: 'welcome' });
  }

  console.log('recipes: ', recipes);
</script>

{#if $menuService.context.currentMenu === 'recipes'}
  <Recipes />
{:else if $menuService.context.currentMenu === 'ingredients'}
  <Ingredients />
{:else if $menuService.context.currentMenu === 'equipment'}
  <Equipment />
{:else if $menuService.context.currentMenu === 'shopping'}
  <Shopping />
{:else if $menuService.context.currentMenu === 'settings'}
  <Settings />
{:else if $menuService.context.currentMenu === 'postrecipe'}
  <PostRecipe />
{:else if $menuService.context.currentMenu === 'welcome'}
  <Welcome />
{:else}
  <Welcome />
{/if}
