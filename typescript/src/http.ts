import { AuthenticationError, TopTrackerError } from "./errors.js";

const BASE_URL = "https://tracker-api.toptal.com";

export interface RequestOptions {
  readonly method?: "GET" | "POST" | "PUT" | "DELETE";
  readonly path: string;
  readonly params?: Record<string, string | string[]>;
  readonly body?: unknown;
  readonly accessToken?: string;
}

function buildUrl(
  path: string,
  params?: Record<string, string | string[]>,
  accessToken?: string,
): string {
  const url = new URL(path, BASE_URL);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (Array.isArray(value)) {
        for (const v of value) {
          url.searchParams.append(key, v);
        }
      } else {
        url.searchParams.set(key, value);
      }
    }
  }

  if (accessToken) {
    url.searchParams.set("access_token", accessToken);
  }

  return url.toString();
}

export async function request<T>(options: RequestOptions): Promise<T> {
  const { method = "GET", path, params, body, accessToken } = options;

  const url = buildUrl(path, params, accessToken);

  const headers: Record<string, string> = {
    Accept: "application/json",
  };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });

  const responseBody: unknown = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      throw new AuthenticationError(responseBody);
    }
    throw new TopTrackerError(
      `Request failed: ${method} ${path} (${String(response.status)})`,
      response.status,
      responseBody,
    );
  }

  return responseBody as T;
}
