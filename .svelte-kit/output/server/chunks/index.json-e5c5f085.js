import { p as prisma } from "./prisma.service-bc3a6dff.js";
import "@prisma/client";
const get = async (params) => {
  let response = await prisma.recipe.findMany({
    include: {
      tags: { include: { Tag: true } },
      ingredients: { include: { Ingredient: true } },
      notes: true
    }
  });
  if (response) {
    return {
      body: response
    };
  }
};
export { get };
