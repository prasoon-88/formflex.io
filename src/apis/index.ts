import { getCookie } from "@/utils";
import { TOKEN_KEY } from "@/utils/constants";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const headers = {
  "Content-Type": "application/json",
  Authorization: getCookie(TOKEN_KEY),
};

type TMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type TApiResponse = {
  data: unknown;
  status: number;
};

const createPaylaod = (method: TMethod, url: string) => ({
  method,
  url: `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, // Template Literals
});

const APIS = {
  login: createPaylaod("POST", "/onboarding/login/"),
  signup: createPaylaod("POST", "/onboarding/signup/"),
  logout: createPaylaod("POST", "/onboarding/logout/"),
  verify: createPaylaod("GET", "/onboarding/verify/"),
};

export default APIS;
