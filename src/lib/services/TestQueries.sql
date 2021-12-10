-- SELECT all Recipes, their ingredients, and notes
SELECT
  -- "RecipeIngredients".recipe_id,
  -- "RecipeIngredients".ingredient_id,
  "Recipe".*,
  "Ingredient".id as ingId,
  "Ingredient".name as ingredient,
  "Note".id as noteId,
  "Note".text as note
FROM "RecipeIngredients"
JOIN "Recipe" ON "RecipeIngredients".recipe_id = "Recipe".id
JOIN "Ingredient" ON "RecipeIngredients".ingredient_id = "Ingredient".id
JOIN "Note" ON "RecipeIngredients".recipe_id = "Note".id;


-- SELECT a Recipe, its ingredients, and notes
SELECT 
  -- "RecipeIngredients".recipe_id,
  -- "RecipeIngredients".ingredient_id,
  "Recipe".*,
  "Ingredient".id as ingId,
  "Ingredient".name as ingredient,
  "Note".id as noteId,
  "Note".text as note
FROM "RecipeIngredients"
JOIN "Recipe" ON "RecipeIngredients".recipe_id = "Recipe".id
JOIN "Ingredient" ON "RecipeIngredients".ingredient_id = "Ingredient".id
JOIN "Note" ON "RecipeIngredients".recipe_id = "Note".id
WHERE "RecipeIngredients".recipe_id = 1;

