import { prisma } from '$lib/services/prisma.service.js';

export const get = async (params) => {
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
