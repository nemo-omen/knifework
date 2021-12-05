<script context="module">
  export async function load({ page, fetch, session, stuff }) {
    const response = await fetch('/recipes.json');

    if (response.ok) {
      const recipes = await response.json();

      return {
        props: { recipes }
      };
    }

    const { message } = await response.json();

    return {
      error: new Error(message)
    };
  }
</script>

<script lang="ts">
  import type { Recipe } from './recipes/_api';
  export let recipes: Recipe[];
  export let error: Error;

  console.log('recipes: ', recipes);
</script>

<main />
