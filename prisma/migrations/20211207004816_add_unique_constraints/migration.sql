/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `ingredient_tags` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `ingredients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tag]` on the table `recipe_tags` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `recipes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ingredient_tags_tag_key" ON "ingredient_tags"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_name_key" ON "ingredients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "recipe_tags_tag_key" ON "recipe_tags"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "recipes_name_key" ON "recipes"("name");
