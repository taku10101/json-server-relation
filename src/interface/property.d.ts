// JSONのキーと値を表す型
export interface StringType {
  [key: string]: string | null;
}

export interface NumberType {
  [key: string]: number | null;
}

export interface BooleanType {
  [key: string]: boolean | null;
}

export interface DateType {
  [key: string]: Date | null;
}
