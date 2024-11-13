import { NullablePropertyType, PropertyType } from "../interface/property";
import { JsonServerData } from "../interface/json-data";

type UserType = {
  name: PropertyType<string>;
  age: PropertyType<number>;
  email: NullablePropertyType<string>;
};

type PostType = {
  title: PropertyType<string>;
  body: PropertyType<string>;
  userId: NullablePropertyType<number>;
};
export type UserJsonData = JsonServerData<UserType>;
export type PostJsonData = JsonServerData<PostType>;

type Data = {
  post: PostJsonData;
};

const jsonData: Data = {
  post: [
    {
      title: "Hello World",
      body: "This is a post",
      userId: null,
    },
    {
      title: "Hello World",
      body: "This is a post",
      userId: 1,
    },
  ],
};

export { jsonData };
