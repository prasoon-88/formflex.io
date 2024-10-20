import Cookies from "js-cookie";

// Get a cookie
export const getCookie = (key: string) => {
  return Cookies.get(key);
};

// Set a cookie
export const setCookie = (key: string, value: string) => {
  Cookies.set(key, value);
};

// Remove a cookie
export const removeCookie = (key: string) => {
  Cookies.remove(key);
};
