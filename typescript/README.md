# toptracker-sdk (TypeScript)

TypeScript SDK for the TopTracker API. Zero dependencies — uses native `fetch` (Node 18+, Deno, Bun, browsers).

## Installation

```bash
pnpm add toptracker-sdk
```

## Usage

### Authentication

```typescript
import { TopTrackerClient } from "toptracker-sdk";

// Login with credentials
const { client, response } = await TopTrackerClient.login({
  email: "you@example.com",
  password: "your-password",
});

console.log(response.user.name); // "Your Name"

// Or use an existing access token
const client = new TopTrackerClient({
  accessToken: "your-access-token",
});
```

### Current User

```typescript
const { user, profiles } = await client.auth.me();
```

### Projects

```typescript
// List active projects
const { projects } = await client.projects.list();

// List archived projects
const { projects } = await client.projects.list({ archived: true });

// Get workers and stats for a project
const { workers, statistics } = await client.projects.engagements(1276246);
```

### Reports

```typescript
// Timesheet — time totals per day
const { timesheet } = await client.reports.timesheet({
  project_ids: [1276246],
  worker_ids: [415051],
  start_date: "2026-03-24",
  end_date: "2026-03-31",
  type: "projects", // or "workers"
});

for (const project of timesheet.projects) {
  for (const day of project.dates) {
    console.log(`${day.urlDate}: ${day.seconds}s`);
  }
}

// Activities — detailed entries with descriptions
const { activities, total_seconds } = await client.reports.activities({
  project_ids: [1276246],
  start_date: "2026-03-24",
  end_date: "2026-03-31",
});

for (const activity of activities) {
  console.log(`[${activity.worker.name}] ${activity.description} (${activity.seconds}s)`);
}
```

### Error Handling

```typescript
import { TopTrackerClient, AuthenticationError, TopTrackerError } from "toptracker-sdk";

try {
  const { client } = await TopTrackerClient.login({
    email: "wrong@email.com",
    password: "wrong",
  });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error("Invalid credentials");
  } else if (error instanceof TopTrackerError) {
    console.error(`API error ${error.status}:`, error.body);
  }
}
```

## API Reference

### `TopTrackerClient`

| Method | Description |
|--------|-------------|
| `TopTrackerClient.login(params)` | Authenticate and create a client |
| `new TopTrackerClient({ accessToken })` | Create a client with an existing token |

### `client.auth`

| Method | Returns |
|--------|---------|
| `me()` | `MeResponse` — current user and profiles |

### `client.projects`

| Method | Returns |
|--------|---------|
| `list(params?)` | `ProjectsResponse` — all projects |
| `engagements(projectId)` | `EngagementsResponse` — workers and statistics |

### `client.reports`

| Method | Returns |
|--------|---------|
| `timesheet(params)` | `TimesheetResponse` — daily time totals |
| `activities(params)` | `ActivitiesResponse` — detailed activity entries |

## License

MIT
