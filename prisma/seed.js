// import { PrismaClient } from '@prisma/client';

// if you want to migrate, Prisma doesn't let you do it with esm
// so you'll have to remove the "type": "module" declaration
// in package.json
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
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
			cooktime: 0
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
			cooktime: 6
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
