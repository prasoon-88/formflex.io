import { cookies } from "next/headers";

const cookie = cookies();

export const getCookie = (key: string) => {
  return cookie.get(key);
};
