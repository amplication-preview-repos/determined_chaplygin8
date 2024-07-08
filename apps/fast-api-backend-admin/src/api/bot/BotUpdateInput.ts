import { ServerWhereUniqueInput } from "../server/ServerWhereUniqueInput";

export type BotUpdateInput = {
  name?: string | null;
  description?: string | null;
  server?: ServerWhereUniqueInput | null;
};
