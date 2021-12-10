import db from './db.service.js';

class RecipeService {
  static async getAll() {
    const response = await db.query(`
      SELECT
        "Recipe".*,
        "Ingredient".id as ingId,
        "Ingredient".name as ingredient,
        "Note".id as noteId,
        "Note".text as note
      FROM "RecipeIngredients"
      JOIN "Recipe" ON "RecipeIngredients".recipe_id = "Recipe".id
      JOIN "Ingredient" ON "RecipeIngredients".ingredient_id = "Ingredient".id
      JOIN "Note" ON "RecipeIngredients".recipe_id = "Note".id;
    `);
  }
  static async getOne(id) {
    // const testRes = await db.query(`SELECT "Recipe".*,  WHERE id=${id}`);
    const response = await db.query(`
    SELECT 
      "Recipe".*,
      "Ingredient".id as ingId,
      "Ingredient".name as ingredient,
      "Note".id as noteId,
      "Note".text as note
    FROM "RecipeIngredients"
    JOIN "Recipe" ON "RecipeIngredients".recipe_id = "Recipe".id
    JOIN "Ingredient" ON "RecipeIngredients".ingredient_id = "Ingredient".id
    JOIN "Note" ON "RecipeIngredients".recipe_id = "Note".id
    WHERE "RecipeIngredients".recipe_id = ${id}
      `);

    const recipe = {
      id: 0,
      name: '',
      servings: 0,
      prepTime: 0,
      cookTime: 0,
      instructions: '',
      photourl: '',
      ingredients: {},
      notes: {}
    };

    if (response.rows) {
      response.rows.forEach((row) => {
        recipe.id = row.id;
        (recipe.name = row.name),
          (recipe.servings = row.servings),
          (recipe.prepTime = row.prepTime),
          (recipe.cookTime = row.cookTime),
          (recipe.instructions = row.instructions),
          (recipe.photourl = row.photourl),
          (recipe.ingredients[row.ingid] = row.ingredient),
          (recipe.notes[row.noteid] = row.note);
      });
    }

    return recipe;
  }
}

export default RecipeService;
