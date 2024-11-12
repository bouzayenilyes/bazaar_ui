import { cache } from "react";
import axios from "../../utils/axiosInstance";
// CUSTOM DATA MODEL
import User from "models/User.model";
import { IdParams } from "models/Common";

export const getUser = cache(async (): Promise<User> => {
  const response = await axios.get("/api/user-list/1");
  return response.data;
});

export const getUserIds = cache(async (): Promise<IdParams[]> => {
  const response = await axios.get("/api/user-list/id-list");
  return response.data;
});

export default { getUser, getUserIds };
