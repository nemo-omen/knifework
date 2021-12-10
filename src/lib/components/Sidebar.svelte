<script>
  import { page } from '$app/stores';
  import { menuService } from '$lib/machines/menu.machine.js';
  import Icon from '$lib/components/Icon.svelte';

  $: current = $page.path;

  function toggleMenu(key) {
    menuService.send({ type: 'CLICK', key });
  }

  console.log($page);
</script>

<aside id="sidebar" class="expanded">
  <a class="icon-button {current === '/recipes' ? 'current' : ''}" href="/recipes">
    <Icon name="book" /> <span class="button-label">Recipes</span>
  </a>

  <a class="icon-button {current === '/shopping' ? 'current' : ''}" href="/shopping">
    <Icon name="cart" /> <span class="button-label">Shopping Lists</span>
  </a>

  <a class="icon-button {current === '/recipes/new' ? 'current' : ''}" href="/recipes/new">
    <Icon name="add" /> <span class="button-label">New Recipe</span>
  </a>
</aside>
