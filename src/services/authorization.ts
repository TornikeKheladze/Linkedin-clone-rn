import { UserRegisterData } from "../types/common";
import { instance } from "./axios";

export const registerUser = (data: UserRegisterData) => {
  return instance.post("auth/register", data);
};

export const getAllUsers = () => {
  return instance.get("/user/users").then((res) => res.data);
};
