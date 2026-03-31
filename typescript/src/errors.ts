export class TopTrackerError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.name = "TopTrackerError";
    this.status = status;
    this.body = body;
  }
}

export class AuthenticationError extends TopTrackerError {
  constructor(body: unknown) {
    super("Authentication failed", 401, body);
    this.name = "AuthenticationError";
  }
}
