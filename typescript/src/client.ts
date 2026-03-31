import { AuthEndpoint } from "./endpoints/auth.js";
import { ProjectsEndpoint } from "./endpoints/projects.js";
import { ReportsEndpoint } from "./endpoints/reports.js";
import type { LoginParams, LoginResponse } from "./types/index.js";

export interface TopTrackerClientOptions {
  readonly accessToken: string;
}

export class TopTrackerClient {
  readonly auth: AuthEndpoint;
  readonly projects: ProjectsEndpoint;
  readonly reports: ReportsEndpoint;

  constructor(options: TopTrackerClientOptions) {
    this.auth = new AuthEndpoint(options.accessToken);
    this.projects = new ProjectsEndpoint(options.accessToken);
    this.reports = new ReportsEndpoint(options.accessToken);
  }

  static async login(params: LoginParams): Promise<{ client: TopTrackerClient; response: LoginResponse }> {
    const response = await AuthEndpoint.login(params);
    const client = new TopTrackerClient({ accessToken: response.access_token });
    return { client, response };
  }
}
