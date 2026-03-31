export type WorkerType = "freelancer" | "client";
export type WorkerRole = "admin" | "worker";
export type HireGlobalStatus = "active" | "inactive" | null;

export interface Worker {
  readonly id: number;
  readonly type: WorkerType;
  readonly name: string;
  readonly avatar_url: string | null;
  readonly company_name: string | null;
  readonly address: string | null;
  readonly phone: string | null;
  readonly engagement_summary: string;
  readonly worker_view_group: string;
  readonly role: WorkerRole;
  readonly email: string;
  readonly hireglobal_status: HireGlobalStatus;
  readonly rate: string;
}

export interface WorkerStatistics {
  readonly worked_last_24_hours: number;
  readonly worked_this_week: number;
  readonly worked_this_month: number;
  readonly worked_total: number;
  readonly paid: number;
  readonly profile_id: number;
}

export interface Invitation {
  readonly id: number;
  readonly email: string;
  readonly status: string;
}

export interface EngagementsResponse {
  readonly invitations: readonly Invitation[];
  readonly workers: readonly Worker[];
  readonly statistics: readonly WorkerStatistics[];
}
