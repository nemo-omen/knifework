-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" CHAR(255),

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "text" TEXT,
    "recipe_id" INTEGER NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeIngredients" (
    "recipe_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER NOT NULL,

    CONSTRAINT "RecipeIngredients_pkey" PRIMARY KEY ("recipe_id","ingredient_id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" CHAR(255),
    "servings" INTEGER,
    "preptime" INTEGER,
    "cooktime" INTEGER,
    "instructions" TEXT,
    "photourl" CHAR(255),

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingList" (
    "id" SERIAL NOT NULL,
    "listName" CHAR(255) NOT NULL,

    CONSTRAINT "ShoppingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingIngredients" (
    "qty" INTEGER DEFAULT 0,
    "size" CHAR(255),
    "shopping_id" INTEGER NOT NULL,
    "ingredient_id" INTEGER NOT NULL,

    CONSTRAINT "ShoppingIngredients_pkey" PRIMARY KEY ("shopping_id","ingredient_id")
);

-- CreateTable
CREATE TABLE "RecipeTags" (
    "id" SERIAL NOT NULL,
    "recipe_id" INTEGER,
    "tag_id" INTEGER,

    CONSTRAINT "RecipeTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" CHAR(255) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_name_key" ON "Recipe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredients" ADD CONSTRAINT "RecipeIngredients_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredients" ADD CONSTRAINT "RecipeIngredients_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingIngredients" ADD CONSTRAINT "ShoppingIngredients_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingIngredients" ADD CONSTRAINT "ShoppingIngredients_shopping_id_fkey" FOREIGN KEY ("shopping_id") REFERENCES "ShoppingList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeTags" ADD CONSTRAINT "RecipeTags_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeTags" ADD CONSTRAINT "RecipeTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
