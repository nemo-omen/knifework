// import { PrismaClient } from '@prisma/client';

// if you want to migrate, Prisma doesn't let you do it with esm
// so you'll have to remove the "type": "module" declaration
// in package.json
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const pbj = await prisma.recipe.upsert({
    where: { name: 'Peanut Butter and Jelly Sandwich' },
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
        create: { text: 'Tasty, quick, and cheap. Not much nutritional value!' }
      },
      tags: {
        create: [
          {
            Tag: {
              connectOrCreate: {
                where: { name: 'quick' },
                create: { name: 'quick' }
              }
            }
          },
          {
            Tag: {
              connectOrCreate: {
                where: { name: 'cheap' },
                create: { name: 'cheap' }
              }
            }
          }
        ]
      },
      ingredients: {
        create: [
          {
            Ingredient: {
              connectOrCreate: {
                where: { name: 'Peanut Butter' },
                create: { name: 'Peanut Butter' }
              }
            }
          },
          {
            Ingredient: {
              connectOrCreate: {
                where: { name: 'White Bread' },
                create: { name: 'White Bread' }
              }
            }
          },
          {
            Ingredient: {
              connectOrCreate: {
                where: { name: 'Grape Jelly' },
                create: { name: 'Grape Jelly' }
              }
            }
          }
        ]
      }
    }
  });

  const gChz = await prisma.recipe.upsert({
    where: { name: 'Grilled Cheese Sandwich' },
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
        create: { text: 'Tasty and comforting. Great with tomato soup!' }
      },
      tags: {
        create: [
          {
            Tag: {
              connectOrCreate: {
                where: { name: 'quick' },
                create: { name: 'quick' }
              }
            }
          },
          {
            Tag: {
              connectOrCreate: {
                where: { name: 'cheap' },
                create: { name: 'cheap' }
              }
            }
          },
          {
            Tag: {
              connectOrCreate: {
                where: { name: 'comfort food' },
                create: { name: 'comfort food' }
              }
            }
          }
        ]
      },
      ingredients: {
        create: [
          {
            Ingredient: {
              connectOrCreate: {
                where: { name: 'American Cheese' },
                create: { name: 'American Cheese' }
              }
            }
          },
          {
            Ingredient: {
              connectOrCreate: {
                where: { name: 'White Bread' },
                create: { name: 'White Bread' }
              }
            }
          },
          {
            Ingredient: {
              connectOrCreate: {
                where: { name: 'Butter' },
                create: { name: 'Butter' }
              }
            }
          }
        ]
      }
    }
  });

  console.log(pbj, gChz);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
