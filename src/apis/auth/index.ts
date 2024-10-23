import axios from "axios";
import APIS, { headers, TApiResponse } from "..";
import { LoginPayload, SignupPaylaod, VerifyPayload } from "./types";

export const login = async (payload: LoginPayload): Promise<TApiResponse> => {
  const { data, status } = await axios({
    ...APIS.login,
    data: payload,
  });
  return { data, status };
};

export const signup = async (payload: SignupPaylaod): Promise<TApiResponse> => {
  const { data, status } = await axios({
    ...APIS.signup,
    data: payload,
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

export const verify = async (payload: VerifyPayload): Promise<TApiResponse> => {
  const { data, status } = await axios({
    ...APIS.verify,
    headers: {
      ...headers,
      Authorization: payload.token,
    },
  });
  return { data, status };
};
