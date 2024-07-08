import { InputJsonValue } from "../../types";
import { ServerCreateNestedManyWithoutUsersInput } from "./ServerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  discordId?: string | null;
  servers?: ServerCreateNestedManyWithoutUsersInput;
};
