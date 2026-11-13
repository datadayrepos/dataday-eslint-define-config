// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Preserve interface-compatible public value constraints.
export type Unprefix<T extends Record<string, any>, Pre extends string> = {
  [K in keyof T as K extends `${Pre}${infer U}` ? U : never]: T[K];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Preserve interface-compatible public value constraints.
export type Prefix<T extends Record<string, any>, Pre extends string> = {
  // @ts-expect-error Generic keyof T may include symbols that cannot form template-literal keys.
  [K in keyof T as `${Pre}${K}`]: T[K];
};

export type RenamePrefix<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Preserve interface-compatible public value constraints.
  T extends Record<string, any>,
  Old extends string,
  New extends string,
> = Prefix<Unprefix<T, Old>, New>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Retain the public open-key/value constraint.
export type MergeIntersection<T extends Record<any, any>> = {
  [K in keyof T]: T[K];
};
