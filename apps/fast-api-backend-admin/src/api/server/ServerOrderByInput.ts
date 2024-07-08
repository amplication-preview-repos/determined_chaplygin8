import { SortOrder } from "../../util/SortOrder";

export type ServerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
