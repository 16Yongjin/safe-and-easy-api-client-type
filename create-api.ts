import {
  APIPath,
  APIRoutesBase,
  KeyOf,
  MethodRoutes,
  OptionalParam,
  RequestOptions,
} from './helpers';

export const createAPI = <APIRoutes extends APIRoutesBase>() => {
  const request = <
    Route extends KeyOf<APIRoutes>,
    Options extends RequestOptions<APIRoutes[Route]>,
    Response extends APIRoutes[Route]['response']
  >(
    route: Route,
    ...[options]: OptionalParam<Options>
  ): Promise<Response> => {
    throw new Error('Not implemented');
  };

  const get = <
    Route extends KeyOf<MethodRoutes<'GET', APIRoutes>>,
    Path extends APIPath<Route>,
    Options extends RequestOptions<APIRoutes[`GET ${Path}`]>,
    Response extends APIRoutes[`GET ${Path}`]['response']
  >(
    path: Path,
    ...[options]: OptionalParam<Options>
  ): Promise<Response> => {
    throw new Error('Not implemented');
  };

  const post = <
    Route extends KeyOf<MethodRoutes<'POST', APIRoutes>>,
    Path extends APIPath<Route>,
    Options extends RequestOptions<APIRoutes[`POST ${Path}`]>,
    Response extends APIRoutes[`POST ${Path}`]['response']
  >(
    path: Path,
    ...[options]: OptionalParam<Options>
  ): Promise<Response> => {
    throw new Error('Not implemented');
  };

  const put = <
    Route extends KeyOf<MethodRoutes<'PUT', APIRoutes>>,
    Path extends APIPath<Route>,
    Options extends RequestOptions<APIRoutes[`PUT ${Path}`]>,
    Response extends APIRoutes[`PUT ${Path}`]['response']
  >(
    path: Path,
    ...[options]: OptionalParam<Options>
  ): Promise<Response> => {
    throw new Error('Not implemented');
  };

  const deleteFn = <
    Route extends KeyOf<MethodRoutes<'DELETE', APIRoutes>>,
    Path extends APIPath<Route>,
    Options extends RequestOptions<APIRoutes[`DELETE ${Path}`]>,
    Response extends APIRoutes[`DELETE ${Path}`]['response']
  >(
    path: Path,
    ...[options]: OptionalParam<Options>
  ): Promise<Response> => {
    throw new Error('Not implemented');
  };

  const patch = <
    Route extends KeyOf<MethodRoutes<'PATCH', APIRoutes>>,
    Path extends APIPath<Route>,
    Options extends RequestOptions<APIRoutes[`PATCH ${Path}`]>,
    Response extends APIRoutes[`PATCH ${Path}`]['response']
  >(
    path: Path,
    ...[options]: OptionalParam<Options>
  ): Promise<Response> => {
    throw new Error('Not implemented');
  };

  const from = <
    Route extends KeyOf<APIRoutes>,
    Options extends RequestOptions<APIRoutes[Route]>,
    Response extends APIRoutes[Route]['response']
  >(
    route: Route
  ): ((...[options]: OptionalParam<Options>) => Promise<Response>) => {
    throw new Error('Not implemented');
  };

  return { request, get, post, put, delete: deleteFn, patch, from };
};
