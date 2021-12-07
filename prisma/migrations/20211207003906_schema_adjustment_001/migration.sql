/*
  Warnings:

  - The primary key for the `ingredient_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `ingredient_tags` table. All the data in the column will be lost.
  - The primary key for the `recipe_tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `recipe_tags` table. All the data in the column will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tag` to the `ingredient_tags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `recipe_tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ingredient_tags" DROP CONSTRAINT "ingredient_tags_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe_tags" DROP CONSTRAINT "recipe_tags_tag_id_fkey";

-- AlterTable
ALTER TABLE "ingredient_tags" DROP CONSTRAINT "ingredient_tags_pkey",
DROP COLUMN "tag_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "tag" CHAR(255) NOT NULL,
ADD CONSTRAINT "ingredient_tags_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "recipe_tags" DROP CONSTRAINT "recipe_tags_pkey",
DROP COLUMN "tag_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "tag" CHAR(255) NOT NULL,
ADD CONSTRAINT "recipe_tags_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "tags";
