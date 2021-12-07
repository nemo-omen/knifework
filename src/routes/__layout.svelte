<script>
  // import '$lib/style/open-props.min.css';
  import '$lib/style/global.css';
  import Icon from '$lib/components/Icon.svelte';
</script>

<header>
  <a href="/" id="brand"><Icon name="knife" />Knifework</a>

  <input type="text" placeholder="Search" />
</header>

<slot />
