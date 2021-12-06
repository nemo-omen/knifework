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

	console.log('recipes: ', recipes);
</script>

<h1>Stuff</h1>
