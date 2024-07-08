import { User } from "../user/User";
import { Bot } from "../bot/Bot";

export type Server = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  user?: User | null;
  bots?: Array<Bot>;
};
