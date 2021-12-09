import { c as create_ssr_component, s as subscribe, a as add_attribute, e as escape, v as validate_component } from "./app-0cadbb1d.js";
import { m as menuService, I as Icon } from "./Icon-6ffa804a.js";
import "xstate";
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current;
  let $menuService, $$unsubscribe_menuService;
  $$unsubscribe_menuService = subscribe(menuService, (value) => $menuService = value);
  current = $menuService.context.currentMenu;
  $$unsubscribe_menuService();
  return `<aside id="${"sidebar"}"${add_attribute("class", $menuService.matches("expanded") ? "expanded" : "collapsed", 0)}><button class="${"icon-button " + escape(current === "recipes" ? "current" : "")}">${validate_component(Icon, "Icon").$$render($$result, { name: "book" }, {}, {})} <span class="${"button-label"}">Recipes</span></button>

  <button class="${"icon-button " + escape(current === "shopping" ? "current" : "")}">${validate_component(Icon, "Icon").$$render($$result, { name: "cart" }, {}, {})} <span class="${"button-label"}">Shopping Lists</span></button>

  <button class="${"icon-button " + escape(current === "postrecipe" ? "current" : "")}">${validate_component(Icon, "Icon").$$render($$result, { name: "add" }, {}, {})} <span class="${"button-label"}">New Recipe</span></button></aside>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $menuService, $$unsubscribe_menuService;
  $$unsubscribe_menuService = subscribe(menuService, (value) => $menuService = value);
  $menuService.context.currentMenu;
  $$unsubscribe_menuService();
  return `<header><div id="${"brand"}">${validate_component(Icon, "Icon").$$render($$result, { name: "knife" }, {}, {})}Knifework</div>

  </header>

${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>`;
});
export { _layout as default };
