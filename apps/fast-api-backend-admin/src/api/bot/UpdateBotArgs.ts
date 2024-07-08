import { BotWhereUniqueInput } from "./BotWhereUniqueInput";
import { BotUpdateInput } from "./BotUpdateInput";

export type UpdateBotArgs = {
  where: BotWhereUniqueInput;
  data: BotUpdateInput;
};
