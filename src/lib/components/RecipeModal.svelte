<script>
  import { fade } from 'svelte/transition';
  import { quintIn, quintOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let recipe;
</script>

<div
  class="modal"
  in:fade={{ duration: 400, easing: quintIn }}
  out:fade={{ duration: 400, easing: quintOut }}
>
  <h2>{recipe.name}</h2>
  <div class="modal-control">
    <button on:click={() => dispatch('save')} class="ui-button">Edit</button>
    <button on:click={() => dispatch('close')} class="ui-button">Close</button>
  </div>
</div>

<style>
  .modal {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray-9);
    padding: 1rem;
  }

  .modal-control {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .ui-button {
    border: none;
    background-color: var(--accent);
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.125em;
    text-transform: uppercase;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .ui-button:hover {
    background-color: var(--accent-secondary);
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.4);
  }

  .ui-button:active {
    background-color: var(--light);
  }
</style>
