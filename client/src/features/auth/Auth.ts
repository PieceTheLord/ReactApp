import { User } from "../../entities/user/types/User";

export const Auth = ({ name, email, password }: User) => {
  console.log({ name, email, password });
};
