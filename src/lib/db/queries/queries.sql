-- CreateDatabase
CREATE DATABASE IF NOT EXISTS kw_dev;

USE kw_dev;

-- CreateTable
CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name CHAR(255),
    servings INT,
    prepTime INT,
    cookTime INT,
    instructions TEXT,
    photoUrl CHAR(255)
);

-- CreateTable
CREATE TABLE IF NOT EXISTS ingredients (
    id SERIAL PRIMARY KEY,
    name CHAR(255)
);

-- CreateTable
CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    text TEXT,
    recipe_id INT NOT NULL,
    CONSTRAINT "notes_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);


-- CreateTable
CREATE TABLE IF NOT EXISTS "shopping" (
    "id" SERIAL PRIMARY KEY,
    "listName" CHAR(255) NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "tags" (
    "id" SERIAL PRIMARY KEY,
    "tag" CHAR(255) NOT NULL
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "ingredient_tags" (
    "ingredient_id" INT NOT NULL,
    "tag_id" INT NOT NULL,

    PRIMARY KEY ("ingredient_id", "tag_id"),
    CONSTRAINT "ingredient_tags_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ingredient_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);


-- CreateTable
CREATE TABLE IF NOT EXISTS "recipe_ingredients" (
    "recipe_id" INT NOT NULL,
    "ingredient_id" INT NOT NULL,

    PRIMARY KEY ("recipe_id", "ingredient_id"),
    CONSTRAINT "recipe_ingredients_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "recipe_ingredients_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "recipe_tags" (
    "recipe_id" INT NOT NULL,
    "tag_id" INT NOT NULL,

    PRIMARY KEY ("recipe_id", "tag_id"),
    CONSTRAINT "recipe_tags_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "recipe_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "shopping_ingredients" (
    "shopping_id" INT NOT NULL,
    "ingredient_id" INT NOT NULL,
    "qty" INT DEFAULT 0,
    "size" CHAR(255),

    PRIMARY KEY ("shopping_id", "ingredient_id"),
    CONSTRAINT "shopping_ingredients_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "shopping_ingredients_shopping_id_fkey" FOREIGN KEY ("shopping_id") REFERENCES "shopping" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);


SELECT * FROM "recipes";