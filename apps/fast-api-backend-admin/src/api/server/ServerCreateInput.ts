import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BotCreateNestedManyWithoutServersInput } from "./BotCreateNestedManyWithoutServersInput";

export type ServerCreateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  bots?: BotCreateNestedManyWithoutServersInput;
};
