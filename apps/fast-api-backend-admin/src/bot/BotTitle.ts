import { Bot as TBot } from "../api/bot/Bot";

export const BOT_TITLE_FIELD = "name";

export const BotTitle = (record: TBot): string => {
  return record.name?.toString() || String(record.id);
};
