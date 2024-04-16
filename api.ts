import { createAPI } from './create-api';
import { User, Post } from './entity';
import { ToAPIRoutes } from './helpers';

export type API = {
  '/users': {
    get: {
      query: {
        page: number;
        size: number;
      };
      response: User[];
    };
    post: {
      body: Pick<User, 'name'>;
      response: User;
    };
  };

  '/users/:id': {
    get: {
      path: {
        id: string;
      };
      response: User;
    };
  };

  '/posts': {
    get: {
      query: {
        page: number;
        size: number;
      };
      response: Post[];
    };
    post: {
      body: Pick<Post, 'title' | 'body'>;
      response: Post;
    };
  };

  '/posts/:id': {
    get: {
      path: {
        id: string;
      };
      response: Post;
    };
    put: {
      path: {
        id: string;
      };
      body: Pick<Post, 'title' | 'body'>;
      response: Post;
    };
    delete: {
      path: {
        id: string;
      };
      response: Post;
    };
  };
};

export const api = createAPI<ToAPIRoutes<API>>();
