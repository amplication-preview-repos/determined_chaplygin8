import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BotListRelationFilter } from "../bot/BotListRelationFilter";

export type ServerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  bots?: BotListRelationFilter;
};
