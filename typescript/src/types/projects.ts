export type ProjectAbility =
  | "invite"
  | "destroy"
  | "update"
  | "view_analytics"
  | "view_workers"
  | "view_worker_rates"
  | "view_worker_roles"
  | "grant_rights"
  | "add_mte"
  | "use_webtracker";

export type ProjectRole = "admin" | "worker";
export type RateType = "individual" | "fixed";
export type ScheduleType = "manual" | "weekly" | "monthly";
export type SchedulePeriod = "week" | "month";

export interface ProjectCurrentUser {
  readonly role: ProjectRole;
  readonly joined: string;
  readonly creator: boolean;
}

export interface ProjectBudget {
  readonly amount: string;
  readonly limited: boolean;
  readonly rate_type: RateType;
  readonly used: number;
}

export interface ProjectAdminProfile {
  readonly name: string;
  readonly avatar_url: string | null;
  readonly phone: string | null;
  readonly email: string;
  readonly address: string | null;
  readonly id: number;
}

export interface InvoicingSchedule {
  readonly schedule_type: ScheduleType;
  readonly period: SchedulePeriod;
  readonly day: number;
}

export interface ProjectStats {
  readonly number_of_workers: number;
}

export interface Project {
  readonly id: number;
  readonly name: string;
  readonly archived_at: string | null;
  readonly abilities: readonly ProjectAbility[];
  readonly currency: string;
  readonly admin_id: number;
  readonly last_activity_time: string;
  readonly current_user: ProjectCurrentUser;
  readonly profiles_ids: readonly number[];
  readonly pending_invitation_ids: readonly number[];
  readonly is_admin_client: boolean;
  readonly created_at: string;
  readonly engagement_ids: readonly number[];
  readonly budget: ProjectBudget;
  readonly billable: boolean;
  readonly admin_profile: ProjectAdminProfile;
  readonly tracking_requirements: Record<string, unknown>;
  readonly invoicing_schedule: InvoicingSchedule;
  readonly stats: ProjectStats;
  readonly payment_vendor: string | null;
}

export interface ProjectsParams {
  readonly archived?: boolean;
}

export interface ProjectsResponse {
  readonly projects: readonly Project[];
}
