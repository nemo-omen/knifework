import { api } from './_api.ts';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

export const get: RequestHandler<Locals> = async (request) => {
  const response = await api(request, `recipes/${request.locals.userid}`);

  console.log('response: ', response);
  if (response.status === 404) {
    return { body: [] };
  }

  return response;
};

// export const post: RequestHandler<Locals, FormData> = async (request) => {
//   const response = await api(request, `recipes/${request.locals.userid}`, {
//     // name: request.body.get('name'),
//     // instructions: request.body.get('instructions'),
//     // photourl: request.body.get('photoUrl'),
//     // preptime: request.body.get('preptime'),
//     // cooktime: request.body.get('cooktime'),
//     // servings: request.body.get('servings')
//   });

//   return response;
// };
