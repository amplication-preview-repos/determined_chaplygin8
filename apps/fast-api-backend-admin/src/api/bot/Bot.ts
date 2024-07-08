import { Server } from "../server/Server";

export type Bot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  server?: Server | null;
};
