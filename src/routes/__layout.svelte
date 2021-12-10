<script>
  import '$lib/style/global.css';
  import Icon from '$lib/components/Icon.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<header>
  <a id="brand" href="/"><Icon name="knife" />Knifework</a>
</header>

<Sidebar />

<main>
  <slot />
</main>
