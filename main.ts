import { api } from './api';
import { rpc } from './rpc';

// ============= Play with `api` object on following section ==============

const apiSection = async () => {
  //                               ↓ Method and Route are inferred!
  const user = await api.request('GET /users/:id', {
    path: {
      id: '123', // ← path var is inferred!
    },
  });

  //    ↓ Response type is inferred!
  user.id;
  user.name;

  //                               ↓ Route is inferred!
  const users = await api.get('/users', {
    // ↓ Query Params are inferred!
    query: {
      page: 1,
      size: 10,
    },
  });

  //       ↓ Response type is inferred!
  users[0].id;
  users[0].name;
};

// ============= Play with `rpc` object on following section ===========

const rpcSection = async () => {
  //                                    ↓ Body type is inferred!
  const user = await rpc.user.create({ body: { name: 'john.doe' } });

  //     ↓ Response type is inferred!
  user.id;
  user.name;

  //                                    ↓ Query Param type is inferred!
  const users = await rpc.user.list({ query: { page: 1, size: 10 } });

  //       ↓ Response type is inferred!
  users[0].id;
  users[0].name;

  rpc.post; // ← every operation is available here
};
