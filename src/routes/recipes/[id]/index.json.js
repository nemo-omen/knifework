import { prisma } from '$lib/services/prisma.service.js';

export const get = async ({ params }) => {
  const id = parseInt(params.id);
  console.log(id);
  const response = await prisma.recipe.findUnique({
    where: { id: id },
    include: {
      tags: { include: { Tag: true } },
      ingredients: { include: { Ingredient: true } },
      notes: true
    }
  });
  console.log(response);
};
