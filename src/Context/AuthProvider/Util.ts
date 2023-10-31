import { Api } from "../../service/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");
  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user ?? null;
}

export async function LoginResquest(email: string | null | undefined, password: string | null | undefined) {
  try {
    const request = await Api.post("authenticate", { email, password });
    return request.data;
  } catch (error) {
    return error;
  }
}
