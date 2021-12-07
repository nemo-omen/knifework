<script>
  // import '$lib/style/open-props.min.css';
  import '$lib/style/global.css';
  import { menuService } from '$lib/machines/menu.machine.js';
  import Icon from '$lib/components/Icon.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';

  $: current = $menuService.context.currentMenu;

  function sendToMain() {
    menuService.send({ type: 'GO', key: 'welcome' });
  }
</script>

<header>
  <div id="brand" on:click={sendToMain}><Icon name="knife" />Knifework</div>

  <!-- <input type="text" placeholder="Search" /> -->
</header>

<Sidebar />

<main>
  <slot />
</main>
