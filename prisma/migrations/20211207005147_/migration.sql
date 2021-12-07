/*
  Warnings:

  - You are about to drop the `ingredient_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipe_tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ingredient_tags" DROP CONSTRAINT "ingredient_tags_ingredient_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_tags" DROP CONSTRAINT "recipe_tags_recipe_id_fkey";

-- DropTable
DROP TABLE "ingredient_tags";

-- DropTable
DROP TABLE "recipe_tags";

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "tag" CHAR(255) NOT NULL,
    "recipe_id" INTEGER NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tags_tag_key" ON "tags"("tag");

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
