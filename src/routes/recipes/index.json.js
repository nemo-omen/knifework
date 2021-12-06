import { prisma } from '$lib/services/prisma.service.js';

export const get = async (params) => {
  const response = await prisma.recipes.findMany();

  console.log('response: ', response);

  if (response.length < 1) {
    addSeeds();
  }

  if (response) {
    return {
      body: response
    };
  }
};

// keep this around to repopulate with a couple of default entries
// when the db is empty
const addSeeds = async () => {
  const pbj = await prisma.recipes.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Peanut Butter and Jelly Sandwich',
      instructions:
        'Spread peanut button on one piece of bread. Spread jelly on the other. Place both slices of bread together so the peanut butter and jelly are inside.',
      photourl: null,
      servings: 1,
      preptime: 5,
      cooktime: 0,
      notes: {
        connectOrCreate: [
          {
            create: { text: 'Tasty, quick, and cheap. Not much nutritional value!' },
            where: { id: 1 }
          }
        ]
      }
    }
  });

  const gChz = await prisma.recipes.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Grilled Cheese Sandwich',
      instructions:
        'Place American cheese slices between two slices of bread. Heat skillet on medium-high heat. Melt butter and grill sandwich for two or three minutes on each side - until golden brown.',
      photourl: null,
      servings: 1,
      preptime: 3,
      cooktime: 6,
      notes: {
        connectOrCreate: [
          {
            create: { text: 'Tasty and comforting. Great with tomato soup!' },
            where: { id: 2 }
          }
        ]
      }
    }
  });

  console.log(pbj, gChz);
};
