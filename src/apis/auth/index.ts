import axios from "axios";
import APIS, { headers, TApiResponse } from "..";
import { LoginPayload } from "./types";

export const login = async (payload: LoginPayload): Promise<TApiResponse> => {
  const { data, status } = await axios({
    ...APIS.login,
    data: payload,
    headers,
  });
  return { data, status };
};
