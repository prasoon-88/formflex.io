export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPaylaod {
  username: string;
  email: string;
  password: string;
}

export interface VerifyPayload {
  token: string;
}
