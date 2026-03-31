import { request } from "../http.js";
import type { LoginParams, LoginResponse, MeResponse } from "../types/index.js";

export class AuthEndpoint {
  readonly #token: string;

  constructor(token: string) {
    this.#token = token;
  }

  static async login(params: LoginParams): Promise<LoginResponse> {
    return request<LoginResponse>({
      method: "POST",
      path: "/sessions",
      body: {
        email: params.email,
        password: params.password,
        remember_me: params.remember_me ?? true,
      },
    });
  }

  async me(): Promise<MeResponse> {
    return request<MeResponse>({
      path: "/users/me",
      accessToken: this.#token,
    });
  }
}
