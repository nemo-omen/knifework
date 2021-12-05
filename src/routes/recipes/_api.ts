import type { Request } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import PrismaClient from '$lib/prisma';

export const prisma = new PrismaClient();

export type Recipe = {
  id: number;
  name: string;
  servings: number;
  preptime: number;
  cooktime: number;
  instructions: string;
  photourl: string;
};

export async function api(request: Request<Locals>, resource: string, data?: Recipe) {
  // export async function api(resource: string, data?: Recipe) {
  // if (!request.locals.userId) {
  //     return { status: 401 };
  //   }

  let body = {};
  let status = 500;

  switch (request.method.toUpperCase()) {
    case 'DELETE':
      await prisma.recipes.delete({
        where: {
          id: resource.split('/').pop()
        }
      });
      status = 200;
      break;
    case 'GET':
      body = await prisma.recipes.findMany();
      status = 200;
      break;
    case 'PATCH':
      body = await prisma.recipes.update({
        data,
        where: { id: resource.split('/').pop() }
      });
      status = 200;
      break;
    case 'POST':
      body = await prisma.recipes.create(data);
      status = 201;
      break;
  }

  if (request.method !== 'GET' && request.headers.accept !== 'application/json') {
    return {
      status: 303,
      headers: {
        location: '/recipes'
      }
    };
  }

  return { status, body };
}
