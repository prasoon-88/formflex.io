import axios from "axios";
import APIS, { headers } from ".";

export const login = async (payload: any) => {
  const { data, status } = await axios({
    ...APIS.login,
    data: payload,
    headers,
  });
  return { data, status };
};
