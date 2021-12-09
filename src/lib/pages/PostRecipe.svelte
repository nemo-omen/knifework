<script>
  import { fade } from 'svelte/transition';
  import { quintIn } from 'svelte/easing';
  import Icon from '$lib/components/Icon.svelte';

  let name;
  $: servings = 0;

  function incrementServings() {
    servings++;
  }

  function decrementServings() {
    if (servings > 0) {
      servings--;
    }
  }
</script>

<section class="page" in:fade={{ duration: 400, delay: 250, easing: quintIn }}>
  <div class="page-content">
    <div class="recipe-form">
      <div class="input-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" bind:value={name} />
      </div>
      <div class="input-group third">
        <span>Servings</span>
        <div class="button-group">
          <button class="icon-button no-bg" on:click={decrementServings}>
            <Icon name="subtract" />
          </button>
          <button class="icon-button no-bg" on:click={incrementServings}>
            <Icon name="add2" />
          </button>
        </div>
        <span class="servings">{servings}</span>
      </div>
    </div>
  </div>
</section>

<style>
  .recipe-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    position: absolute;
    top: 1rem;
    left: 15vw;
    right: 15vw;
    background-color: var(--gray-8);
    border-radius: 1rem;
    box-shadow: var(--shadow-4);
    padding: 2rem 2.25rem;
  }
  .input-group {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }

  .third {
    grid-template-columns: auto 1fr 10%;
  }

  .button-group {
    display: flex;
    justify-self: end;
  }
  .servings {
    font-size: 2rem;
    justify-self: end;
  }

  .no-bg {
    background-color: transparent;
  }
</style>
