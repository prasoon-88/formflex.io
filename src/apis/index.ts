import { getCookie } from "@/utils";
import { TOKEN_KEY } from "@/utils/constants";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

export const headers = {
  Authorization: `Token ${getCookie(TOKEN_KEY)}`,
};

type TMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

const CURR_VERSION = "";

const createPaylaod = (method: TMethod, url: string) => ({
  method,
  url: `${process.env.BACKEND_URL}/${CURR_VERSION}${url}`,
});

const APIS = {
  login: createPaylaod("POST", "/login"),
};

export default APIS;
