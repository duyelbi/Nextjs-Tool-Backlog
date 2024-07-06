import { buildUrl, fetchData } from "./utils";
import { IUser } from "../types";

const USERS = "users";

export const getUsers = async (): Promise<IUser[]> => {
  const url = buildUrl(USERS);
  return fetchData(url);
};

export const addUser = async (user: Partial<IUser>): Promise<IUser> => {
  const url = buildUrl(USERS);
  const options: RequestInit = {
    method: "POST",
    body: JSON.stringify(user),
  };
  return fetchData(url, options);
};

export const updateUser = async (
  userId: string,
  user: Partial<IUser>
): Promise<IUser> => {
  const url = buildUrl(`${USERS}/${userId}`);
  const options: RequestInit = {
    method: "PATCH",
    body: JSON.stringify(user),
  };
  return fetchData(url, options);
};

export const deleteUser = async (userId: string): Promise<void> => {
  const url = buildUrl(`${USERS}/${userId}`);
  const options: RequestInit = {
    method: "DELETE",
  };
  return fetchData(url, options);
};
