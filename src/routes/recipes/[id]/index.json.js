import RecipeService from '$lib/services/recipe.service.js';

export const get = async ({ params }) => {
  const id = parseInt(params.id);
  const response = await RecipeService.getOne(id);

  console.log(response);

  // const response = await prisma.recipe.findUnique({
  //   where: { id: id },
  //   include: {
  //     tags: { include: { Tag: true } },
  //     ingredients: { include: { Ingredient: true } },
  //     notes: true
  //   }
  // });
  if (response) {
    return {
      body: JSON.stringify(response[0])
    };
  }
};
