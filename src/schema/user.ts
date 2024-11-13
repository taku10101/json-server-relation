import { NullablePropertyType, PropertyType } from "../interface/property";

// 任意の型に対して PropertyType と NullablePropertyType を適用する汎用的な型
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
      result[key];
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

// 使用例の型定義
export type ExampleType1 = {
  name: string;
  age: number;
  email?: string;
};

export type ExampleType2 = {
  title: string;
  body: string;
  userId?: number;
};

// 使用例のデータ
const example1: ExampleType1 = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com",
};

const example2: ExampleType2 = {
  title: "Hello World",
  body: "This is a post",
  userId: 1,
};

// 使用例の型変換
export const exampleType1 = convertToPropertyTypes(example1);
export const exampleType2 = convertToPropertyTypes(example2);

// JsonDataInterface 型の定義
export type JsonDataInterface<T1, T2> = {
  data1: ConvertToPropertyTypes<T1>[];
  data2: ConvertToPropertyTypes<T2>[];
};

// 統合したデータを生成する関数
export function createJsonData<T1, T2>(
  data: JsonDataInterface<T1, T2>
): JsonDataInterface<T1, T2> {
  return data;
}

// 使用例の統合データ
const jsonData = createJsonData({
  data1: [exampleType1],
  data2: [exampleType2],
});

//それぞれを別のJsonファイルとして出力 しダウンロード
export function downloadJsonData<T1, T2>(
  data: JsonDataInterface<T1, T2>,
  filename: string
): void {
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// 使用例
export function main() {
  return downloadJsonData(jsonData, "data.json");
}
// これで、jsonData が data.json としてダウンロードされる
