const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/recipes/index.svelte"),
	() => import("../../../src/routes/recipes/new/index.svelte"),
	() => import("../../../src/routes/recipes/[id]/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	,

	// src/routes/recipes/index.svelte
	[/^\/recipes\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/recipes/new/index.svelte
	[/^\/recipes\/new\/?$/, [c[0], c[4]], [c[1]]],

	,

	// src/routes/recipes/[id]/index.svelte
	[/^\/recipes\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ id: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];