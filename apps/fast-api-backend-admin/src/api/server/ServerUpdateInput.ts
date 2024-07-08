import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BotUpdateManyWithoutServersInput } from "./BotUpdateManyWithoutServersInput";

export type ServerUpdateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  bots?: BotUpdateManyWithoutServersInput;
};
