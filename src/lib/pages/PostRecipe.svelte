<script>
  import { fade } from 'svelte/transition';
  import { quintIn } from 'svelte/easing';
  import Icon from '$lib/components/Icon.svelte';

  let name;
  $: servings = 0;
  $: cooktime = 0;
  $: preptime = 0;

  function incrementServings() {
    servings++;
  }

  function decrementServings() {
    if (servings > 0) {
      servings--;
    }
  }

  function incrementCooktime() {
    cooktime++;
  }

  function decrementCooktime() {
    if (cooktime > 0) {
      cooktime--;
    }
  }

  function incrementPreptime() {
    preptime++;
  }

  function decrementPreptime() {
    if (preptime > 0) {
      preptime--;
    }
  }

  function handleImageUpload() {
    console.log('TODO!!!');
  }
</script>

<section class="page" in:fade={{ duration: 400, delay: 250, easing: quintIn }}>
  <div class="page-content">
    <div class="recipe-form">
      <div class="form-group">
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

        <div class="input-group third">
          <span>Prep Time</span>
          <div class="button-group">
            <button class="icon-button no-bg" on:click={decrementPreptime}>
              <Icon name="subtract" />
            </button>
            <button class="icon-button no-bg" on:click={incrementPreptime}>
              <Icon name="add2" />
            </button>
          </div>
          <span class="servings">{preptime} min</span>
        </div>

        <div class="input-group third">
          <span>Cook Time</span>
          <div class="button-group">
            <button class="icon-button no-bg" on:click={decrementCooktime}>
              <Icon name="subtract" />
            </button>
            <button class="icon-button no-bg" on:click={incrementCooktime}>
              <Icon name="add2" />
            </button>
          </div>
          <span class="servings">{cooktime} min</span>
        </div>
      </div>

      <div class="form-image" on:click={handleImageUpload}>
        <button class="icon-button no-bg huge">
          <Icon name="image" />
        </button>
      </div>

      <div class="form-group instruction">
        <label for="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" cols="30" rows="10" />
      </div>

      <div class="form-group notes">
        <label for="instructions">Notes</label>
        <textarea name="instructions" id="instructions" cols="30" rows="10" />
      </div>
    </div>
    <!--/form-->
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
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form-image {
    aspect-ratio: 16/9;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--gray-6);
    border-radius: var(--radius-2);
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .form-image:hover {
    border-color: var(--gray-8);
    color: var(--gray-5);
    background-color: var(--gray-9);
  }

  .input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    font-size: 1.25rem;
  }

  .button-group {
    display: flex;
    justify-self: end;
  }
  .servings {
    justify-self: end;
  }

  .no-bg {
    background-color: transparent;
  }

  .huge {
    font-size: 4rem;
    justify-self: end;
    padding: 0;
    margin: 0;
    color: var(--gray-6);
  }
</style>
