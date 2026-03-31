export interface TimesheetParams {
  readonly project_ids: readonly number[];
  readonly worker_ids?: readonly number[];
  readonly start_date: string;
  readonly end_date: string;
  readonly type?: "projects" | "workers";
}

export interface TimesheetDateEntry {
  readonly date: string;
  readonly seconds: number;
  readonly urlDate: string;
}

export interface TimesheetProject {
  readonly id: number;
  readonly name: string;
  readonly dates: readonly TimesheetDateEntry[];
}

export interface TimesheetResponse {
  readonly timesheet: {
    readonly projects: readonly TimesheetProject[];
  };
}

export interface ActivitiesParams {
  readonly project_ids: readonly number[];
  readonly worker_ids?: readonly number[];
  readonly start_date: string;
  readonly end_date: string;
}

export interface ActivityProject {
  readonly id: number;
  readonly name: string;
  readonly currency: string;
}

export interface ActivityWorker {
  readonly id: number;
  readonly name: string;
}

export interface ActivityShot {
  readonly id: number;
  readonly url: string;
  readonly thumb_url: string;
}

export interface Activity {
  readonly id: number;
  readonly description: string;
  readonly end_time: string;
  readonly start_time: string;
  readonly seconds: number;
  readonly project: ActivityProject;
  readonly worker: ActivityWorker;
  readonly amount: number | null;
  readonly last_shot: ActivityShot | null;
  readonly shots_count: number;
}

export interface ActivitiesResponse {
  readonly activities: readonly Activity[];
  readonly total_shots: number;
  readonly total_seconds: number;
}
