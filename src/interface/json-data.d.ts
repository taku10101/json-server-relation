export type ConvertToPropertyTypes<T> = {
  [K in keyof T]: undefined extends T[K]
    ? NullablePropertyType<T[K]>
    : PropertyType<T[K]>;
};

// 任意の型に対して PropertyType と NullablePropertyType を適用する関数
export function convertToPropertyTypes<T>(obj: T): ConvertToPropertyTypes<T> {
  //eslint-disable-next-line
  const result: any = {};
  for (const key in obj) {
    if (obj[key] === undefined) {
      result[key] = { value: null };
    } else {
      result[key] = { value: obj[key] };
    }
  }
  return result;
}
