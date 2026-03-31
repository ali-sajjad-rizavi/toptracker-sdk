export interface LoginParams {
  readonly email: string;
  readonly password: string;
  readonly remember_me?: boolean;
}

export interface User {
  readonly id: number;
  readonly email: string;
  readonly name: string;
  readonly time_zone: string;
  readonly avatar_url: string | null;
  readonly company_name: string;
  readonly invoice_due_period: number;
  readonly address: string | null;
  readonly phone: string | null;
  readonly currency: string | null;
  readonly used_desktop: boolean;
  readonly has_invoices: boolean;
  readonly payment_request_summary: string;
  readonly first_name: string;
  readonly middle_name: string | null;
  readonly last_name: string;
  readonly city: string;
  readonly country_id: number;
  readonly email_verified_at: string;
  readonly email_verification_sent_at: string;
}

export type ProfileType = "client" | "freelancer";
export type EngagementSummary = "legacy_only" | "active" | "none";
export type WorkerViewGroup =
  | "existing_without_hire_global"
  | "existing_with_hire_global";

export interface Profile {
  readonly id: number;
  readonly type: ProfileType;
  readonly name: string;
  readonly avatar_url: string | null;
  readonly company_name: string | null;
  readonly address: string | null;
  readonly phone: string | null;
  readonly engagement_summary: EngagementSummary;
  readonly worker_view_group: WorkerViewGroup;
  readonly active: boolean;
}

export interface LoginResponse {
  readonly access_token: string;
  readonly user: User;
  readonly profiles: readonly Profile[];
}

export interface MeResponse {
  readonly user: User;
  readonly profiles: readonly Profile[];
}
