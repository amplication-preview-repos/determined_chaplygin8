import { InputJsonValue } from "../../types";
import { ServerUpdateManyWithoutUsersInput } from "./ServerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  discordId?: string | null;
  servers?: ServerUpdateManyWithoutUsersInput;
};
