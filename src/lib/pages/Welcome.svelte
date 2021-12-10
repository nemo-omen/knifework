<script>
  import { fade } from 'svelte/transition';
  import { quintIn, quintOut } from 'svelte/easing';
  import Icon from '$lib/components/Icon.svelte';
</script>

<div id="intro" class="center" in:fade={{ duration: 400, delay: 250, easing: quintIn }}>
  <div id="intro-icon">
    <Icon name="knife" />
  </div>
  <h1 id="intro-heading">Knifework</h1>
  <div class="three-up">
    <button class="card card-welcome" on:click={() => gotoPage('recipes')}>
      <Icon name="book" />
      <h3>Recipes</h3>
    </button>
    <button class="card card-welcome" on:click={() => gotoPage('postrecipe')}>
      <Icon name="add" />
      <h3>New Recipe</h3>
    </button>
    <button class="card card-welcome" on:click={() => gotoPage('shopping')}>
      <Icon name="cart" />
      <h3>Shopping</h3>
    </button>
  </div>
</div>

<style>
  #intro {
    gap: 1rem;
    color: var(--accent);
  }

  #intro-icon {
    font-size: 10vw;
  }

  #intro-heading {
    font-size: 3rem;
    font-weight: 400;
  }

  .three-up {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 3rem;
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

  .card-welcome {
    font-size: 3rem;
  }

  .card-welcome h3 {
    font-size: 1.5rem;
  }

  button {
    color: var(--accent-secondary);
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: none;
  }
</style>
