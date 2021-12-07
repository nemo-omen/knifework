import { prisma } from '$lib/services/prisma.service.js';

export const get = async (params) => {
  let response = await prisma.recipe.findMany({
    include: { notes: true, tags: true, ingredients: true }
  });

  console.log('response: ', response);

  if (response.length < 1) {
    addSeeds();
    response = await prisma.recipes.findMany({
      include: { notes: true, tags: true, ingredients: true }
    });
  }

  if (response) {
    return {
      body: response
    };
  }
};
