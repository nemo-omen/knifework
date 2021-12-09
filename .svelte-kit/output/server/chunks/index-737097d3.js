import { n as noop, d as safe_not_equal, c as create_ssr_component, s as subscribe, f as createEventDispatcher, b as each, e as escape, v as validate_component, a as add_attribute, g as set_store_value } from "./app-0cadbb1d.js";
import { I as Icon, m as menuService } from "./Icon-6ffa804a.js";
import "xstate";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const recipeStore = writable({});
const layout = writable("grid");
const RecipeGridLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $recipeStore, $$unsubscribe_recipeStore;
  $$unsubscribe_recipeStore = subscribe(recipeStore, (value) => $recipeStore = value);
  createEventDispatcher();
  $$unsubscribe_recipeStore();
  return `<div class="${"card-grid"}">${each(Object.values($recipeStore), (recipe) => `<div class="${"card"}"><h3>${escape(recipe.name)}</h3>
      <div class="${"recipe-body"}"><p>Servings: ${escape(recipe.servings)}</p>
        <p>Prep Time: ${escape(recipe.preptime)} minutes</p>
        <p>Cook Time: ${escape(recipe.cooktime)} minutes</p></div>
    </div>`)}</div>`;
});
var RecipeModal_svelte_svelte_type_style_lang = "";
const Recipes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_recipeStore;
  $$unsubscribe_recipeStore = subscribe(recipeStore, (value) => value);
  $$unsubscribe_recipeStore();
  return `<section class="${"page"}"><div class="${"page-content"}">${`${validate_component(RecipeGridLayout, "RecipeGridLayout").$$render($$result, {}, {}, {})}`}</div></section>`;
});
const Shopping = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $layout, $$unsubscribe_layout;
  $$unsubscribe_layout = subscribe(layout, (value) => $layout = value);
  $$unsubscribe_layout();
  return `<section class="${"page"}"><div class="${"page-content"}">${$layout === "grid" ? `<h2>Grid</h2>` : `${$layout === "list" ? `<h2>List</h2>` : ``}`}</div></section>`;
});
var Welcome_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#intro.svelte-152eyvm.svelte-152eyvm{gap:1rem;color:var(--accent)}#intro-icon.svelte-152eyvm.svelte-152eyvm{font-size:10vw}#intro-heading.svelte-152eyvm.svelte-152eyvm{font-size:3rem;font-weight:400}.three-up.svelte-152eyvm.svelte-152eyvm{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:2rem;margin-top:3rem}.card.svelte-152eyvm.svelte-152eyvm{border:none;background:var(--dark);color:var(--light-mid);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;transition:all 0.3s ease-out}.card.svelte-152eyvm.svelte-152eyvm:hover{color:var(--accent-secondary)}.card-welcome.svelte-152eyvm.svelte-152eyvm{font-size:3rem}.card-welcome.svelte-152eyvm h3.svelte-152eyvm{font-size:1.5rem}button.svelte-152eyvm.svelte-152eyvm{color:var(--accent-secondary);padding:0.5rem 1rem;font-size:1.5rem;font-weight:600;cursor:pointer;box-shadow:none}",
  map: null
};
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `
<div id="${"intro"}" class="${"center svelte-152eyvm"}"><div id="${"intro-icon"}" class="${"svelte-152eyvm"}">${validate_component(Icon, "Icon").$$render($$result, { name: "knife" }, {}, {})}</div>
  <h1 id="${"intro-heading"}" class="${"svelte-152eyvm"}">Knifework</h1>
  <div class="${"three-up svelte-152eyvm"}"><button class="${"card card-welcome svelte-152eyvm"}">${validate_component(Icon, "Icon").$$render($$result, { name: "book" }, {}, {})}
      <h3 class="${"svelte-152eyvm"}">Recipes</h3></button>
    <button class="${"card card-welcome svelte-152eyvm"}">${validate_component(Icon, "Icon").$$render($$result, { name: "add" }, {}, {})}
      <h3 class="${"svelte-152eyvm"}">New Recipe</h3></button>
    <button class="${"card card-welcome svelte-152eyvm"}">${validate_component(Icon, "Icon").$$render($$result, { name: "cart" }, {}, {})}
      <h3 class="${"svelte-152eyvm"}">Shopping</h3></button></div></div>

`;
});
var PostRecipe_svelte_svelte_type_style_lang = "";
const css = {
  code: ".recipe-form.svelte-1csk0zy{display:grid;grid-template-columns:repeat(2, 1fr);gap:3rem;position:absolute;top:1rem;left:15vw;right:15vw;background-color:var(--gray-8);border-radius:1rem;box-shadow:var(--shadow-4);padding:2rem 2.25rem}.form-group.svelte-1csk0zy{display:flex;flex-direction:column;gap:2rem}.form-image.svelte-1csk0zy{aspect-ratio:16/9;display:flex;justify-content:center;align-items:center;border:1px solid var(--gray-6);border-radius:var(--radius-2);cursor:pointer;transition:all 0.3s ease-out}.form-image.svelte-1csk0zy:hover{border-color:var(--gray-8);color:var(--gray-5);background-color:var(--gray-9)}.form-footer.svelte-1csk0zy{grid-column:1/3;display:flex;justify-content:flex-end;font-size:1.5rem}.input-group.svelte-1csk0zy{display:flex;justify-content:space-between;align-items:center;gap:0.25rem;font-size:1.25rem}.button-group.svelte-1csk0zy{display:flex;justify-self:end}.servings.svelte-1csk0zy{justify-self:end}.no-bg.svelte-1csk0zy{background-color:transparent}.huge.svelte-1csk0zy{font-size:4rem;justify-self:end;padding:0;margin:0;color:var(--gray-6)}input[type='text'].svelte-1csk0zy{width:80%}",
  map: null
};
const PostRecipe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let servings;
  let cooktime;
  let preptime;
  let name;
  $$result.css.add(css);
  servings = 0;
  cooktime = 0;
  preptime = 0;
  return `<section class="${"page"}"><div class="${"page-content"}"><div class="${"recipe-form svelte-1csk0zy"}"><div class="${"form-group svelte-1csk0zy"}"><div class="${"input-group svelte-1csk0zy"}"><label for="${"name"}">Name</label>
          <input type="${"text"}" name="${"name"}" id="${"name"}" class="${"svelte-1csk0zy"}"${add_attribute("value", name, 0)}></div>

        <div class="${"input-group third svelte-1csk0zy"}"><span>Servings</span>
          <div class="${"button-group svelte-1csk0zy"}"><button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "subtract" }, {}, {})}</button>
            <button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "add2" }, {}, {})}</button></div>
          <span class="${"servings svelte-1csk0zy"}">${escape(servings)}</span></div>

        <div class="${"input-group third svelte-1csk0zy"}"><span>Prep Time</span>
          <div class="${"button-group svelte-1csk0zy"}"><button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "subtract" }, {}, {})}</button>
            <button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "add2" }, {}, {})}</button></div>
          <span class="${"servings svelte-1csk0zy"}">${escape(preptime)} min</span></div>

        <div class="${"input-group third svelte-1csk0zy"}"><span>Cook Time</span>
          <div class="${"button-group svelte-1csk0zy"}"><button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "subtract" }, {}, {})}</button>
            <button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "add2" }, {}, {})}</button></div>
          <span class="${"servings svelte-1csk0zy"}">${escape(cooktime)} min</span></div></div>

      <div class="${"form-image svelte-1csk0zy"}"><button class="${"icon-button no-bg huge svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "image" }, {}, {})}</button></div>

      <div class="${"form-group instruction svelte-1csk0zy"}"><label for="${"instructions"}">Instructions</label>
        <textarea name="${"instructions"}" id="${"instructions"}" cols="${"30"}" rows="${"10"}"></textarea></div>

      <div class="${"form-group notes svelte-1csk0zy"}"><label for="${"instructions"}">Notes</label>
        <textarea name="${"instructions"}" id="${"instructions"}" rows="${"10"}"></textarea></div>

      <div class="${"form-footer svelte-1csk0zy"}"><button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "close" }, {}, {})}</button>
        <button class="${"icon-button no-bg svelte-1csk0zy"}">${validate_component(Icon, "Icon").$$render($$result, { name: "save" }, {}, {})}</button></div></div>
    </div>
</section>`;
});
async function load({ fetch }) {
  const res = await fetch("/recipes.json");
  if (res.ok) {
    return { props: { recipes: await res.json() } };
  }
  return {
    status: res.status,
    error: new Error(res.error.message)
  };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $recipeStore, $$unsubscribe_recipeStore;
  let $menuService, $$unsubscribe_menuService;
  $$unsubscribe_recipeStore = subscribe(recipeStore, (value) => $recipeStore = value);
  $$unsubscribe_menuService = subscribe(menuService, (value) => $menuService = value);
  let { recipes } = $$props;
  console.log("recipes: ", recipes);
  for (const recipe of recipes) {
    set_store_value(recipeStore, $recipeStore[recipe.id] = recipe, $recipeStore);
  }
  console.log($recipeStore);
  if ($$props.recipes === void 0 && $$bindings.recipes && recipes !== void 0)
    $$bindings.recipes(recipes);
  $menuService.context.currentMenu;
  $$unsubscribe_recipeStore();
  $$unsubscribe_menuService();
  return `${$menuService.context.currentMenu !== "welcome" ? `<div id="${"content-header"}" class="${"content-sub-header"}">${$menuService.context.currentMenu === "recipes" ? `<div class="${"page-heading"}">${validate_component(Icon, "Icon").$$render($$result, { name: "book" }, {}, {})}
        <h2>Recipes</h2></div>
      ` : `${$menuService.context.currentMenu === "shopping" ? `<div class="${"page-heading"}">${validate_component(Icon, "Icon").$$render($$result, { name: "cart" }, {}, {})}
        <h2>Shopping Lists</h2></div>
      ` : `${$menuService.context.currentMenu === "postrecipe" ? `<div class="${"page-heading"}">${validate_component(Icon, "Icon").$$render($$result, { name: "add" }, {}, {})}
        <h2>New Recipe</h2></div>` : ``}`}`}</div>` : ``}

${$menuService.context.currentMenu === "recipes" ? `${validate_component(Recipes, "Recipes").$$render($$result, {}, {}, {})}` : `${$menuService.context.currentMenu === "shopping" ? `${validate_component(Shopping, "Shopping").$$render($$result, {}, {}, {})}` : `${$menuService.context.currentMenu === "postrecipe" ? `${validate_component(PostRecipe, "PostRecipe").$$render($$result, {}, {}, {})}` : `${$menuService.context.currentMenu === "welcome" ? `${validate_component(Welcome, "Welcome").$$render($$result, {}, {}, {})}` : `${validate_component(Welcome, "Welcome").$$render($$result, {}, {}, {})}`}`}`}`}`;
});
export { Routes as default, load };
