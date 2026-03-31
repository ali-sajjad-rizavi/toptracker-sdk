import { request } from "../http.js";
import type {
  ActivitiesParams,
  ActivitiesResponse,
  TimesheetParams,
  TimesheetResponse,
} from "../types/index.js";

function toArrayParams(
  key: string,
  ids: readonly number[],
): Record<string, string[]> {
  return { [key]: ids.map(String) };
}

export class ReportsEndpoint {
  readonly #token: string;

  constructor(token: string) {
    this.#token = token;
  }

  async timesheet(params: TimesheetParams): Promise<TimesheetResponse> {
    const queryParams: Record<string, string | string[]> = {
      ...toArrayParams("project_ids[]", params.project_ids),
      start_date: params.start_date,
      end_date: params.end_date,
      type: params.type ?? "projects",
    };

    if (params.worker_ids) {
      Object.assign(
        queryParams,
        toArrayParams("worker_ids[]", params.worker_ids),
      );
    }

    return request<TimesheetResponse>({
      path: "/reports/timesheet",
      params: queryParams,
      accessToken: this.#token,
    });
  }

  async activities(params: ActivitiesParams): Promise<ActivitiesResponse> {
    const queryParams: Record<string, string | string[]> = {
      ...toArrayParams("project_ids[]", params.project_ids),
      start_date: params.start_date,
      end_date: params.end_date,
    };

    if (params.worker_ids) {
      Object.assign(
        queryParams,
        toArrayParams("worker_ids[]", params.worker_ids),
      );
    }

    return request<ActivitiesResponse>({
      path: "/reports/activities",
      params: queryParams,
      accessToken: this.#token,
    });
  }
}
