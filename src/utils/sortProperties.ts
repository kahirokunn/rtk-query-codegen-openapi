export function sortProperties<T extends Record<string, unknown>>(obj: T): T {
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {} as T);
}
