import { p as prisma } from "./prisma.service-bc3a6dff.js";
import "@prisma/client";
const get = async ({ params }) => {
  const id = parseInt(params.id);
  console.log(id);
  const response = await prisma.recipe.findUnique({
    where: { id },
    include: {
      tags: { include: { Tag: true } },
      ingredients: { include: { Ingredient: true } },
      notes: true
    }
  });
  console.log(response);
};
export { get };
