export type KeyOf<T> = Extract<keyof T, string>;

type AppendKey<K extends PropertyKey, T> = {
  [P in KeyOf<T> as `${Uppercase<P>} ${Exclude<K, symbol>}`]: T[P];
};

type MapValues<T extends object> = {
  [K in keyof T]: AppendKey<K, T[K]>;
};

type ValuesOf<T> = T[keyof T];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type ToAPIRoutes<APIBase extends object> = UnionToIntersection<
  ValuesOf<MapValues<APIBase>>
>;

type KeysWithType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

type RemoveNeverField<T> = Omit<T, KeysWithType<T, never>>;

export type RouteDefinition = {
  headers?: any;
  path?: any;
  query?: any;
  body?: any;
  response?: any;
};

export type RequestOptions<Route extends RouteDefinition> = RemoveNeverField<{
  headers: Extract<Route['headers'], object>;
  path: Extract<Route['path'], object>;
  query: Extract<Route['query'], object>;
  body: Extract<Route['body'], object>;
}>;

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type MethodRoutes<Method extends Methods, T> = {
  [K in keyof T as K extends `${Method} ${string}` ? K : never]: T[K];
};

export type APIPath<Route extends string> =
  Route extends `${Methods} ${infer Param}` ? Param : never;

type EmptyObject = Record<string, never>;
type RequiredOnly<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};
export type OptionalParam<T> = RequiredOnly<T> extends EmptyObject
  ? [T] | []
  : [T];

export type APIRoutesBase = {
  [route: string]: RouteDefinition;
};
