import { ServerWhereUniqueInput } from "../server/ServerWhereUniqueInput";

export type BotCreateInput = {
  name?: string | null;
  description?: string | null;
  server?: ServerWhereUniqueInput | null;
};
