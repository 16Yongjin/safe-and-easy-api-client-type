import { api } from './api';

export const rpc = {
  user: {
    create: api.from('POST /users'),
    list: api.from('GET /users'),
    get: api.from('GET /users/:id'),
  },

  post: {
    create: api.from('POST /posts'),
    list: api.from('GET /posts'),
    get: api.from('GET /posts/:id'),
    update: api.from('PUT /posts/:id'),
    delete: api.from('DELETE /posts/:id'),
  },
};
