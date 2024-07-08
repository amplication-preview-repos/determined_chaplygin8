import { JsonValue } from "type-fest";
import { Server } from "../server/Server";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  discordId: string | null;
  servers?: Array<Server>;
};
