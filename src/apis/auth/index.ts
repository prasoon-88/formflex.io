import axios from "axios";
import APIS, { headers, TApiResponse } from "..";
import { LoginPayload, SignupPaylaod } from "./types";

export const login = async (payload: LoginPayload): Promise<TApiResponse> => {
  const { data, status } = await axios({
    ...APIS.login,
    data: payload,
    headers,
  });
  return { data, status };
};

export const signup = async (payload: SignupPaylaod): Promise<TApiResponse> => {
  const { data, status } = await axios({
    ...APIS.signup,
    data: payload,
    headers,
  });
  return { data, status };
};

export const logout = async (): Promise<TApiResponse> => {
  const { data, status } = await axios({
    ...APIS.logout,
    headers,
  });
  return { data, status };
};
