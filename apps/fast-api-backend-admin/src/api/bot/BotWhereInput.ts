import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServerWhereUniqueInput } from "../server/ServerWhereUniqueInput";

export type BotWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  server?: ServerWhereUniqueInput;
};
