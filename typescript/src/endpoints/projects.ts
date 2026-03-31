import { request } from "../http.js";
import type { ProjectsParams, ProjectsResponse } from "../types/index.js";
import type { EngagementsResponse } from "../types/index.js";

export class ProjectsEndpoint {
  readonly #token: string;

  constructor(token: string) {
    this.#token = token;
  }

  async list(params?: ProjectsParams): Promise<ProjectsResponse> {
    const queryParams: Record<string, string> = {};

    if (params?.archived !== undefined) {
      queryParams["archived"] = String(params.archived);
    }

    return request<ProjectsResponse>({
      path: "/web/projects",
      params: queryParams,
      accessToken: this.#token,
    });
  }

  async engagements(projectId: number): Promise<EngagementsResponse> {
    return request<EngagementsResponse>({
      path: `/projects/${String(projectId)}/engagements`,
      accessToken: this.#token,
    });
  }
}
