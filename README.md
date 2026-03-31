# toptracker-sdk

Unofficial SDK for the [TopTracker](https://www.toptal.com/tracker) API.

TopTracker by Toptal is a free time-tracking tool for freelancers and teams. It does not offer a public API, but its web app communicates with a REST API internally. This SDK wraps that API to enable programmatic access for reporting, billing automation, and integrations.

> **Disclaimer:** This is an unofficial, community-driven project. It is not affiliated with or endorsed by Toptal. The underlying API is undocumented and may change without notice.

## Available SDKs

| Language | Path | Package |
|----------|------|---------|
| TypeScript | [`typescript/`](./typescript) | `toptracker-sdk` (npm) |
| Python | `python/` | Coming soon |

## API Coverage

| Endpoint | Description |
|----------|-------------|
| `POST /sessions` | Authenticate and obtain an access token |
| `GET /users/me` | Get current user profile |
| `GET /web/projects` | List projects (active or archived) |
| `GET /projects/:id/engagements` | List workers and statistics for a project |
| `GET /reports/timesheet` | Get time totals by project/worker/date range |
| `GET /reports/activities` | Get detailed activity entries with descriptions |

## Quick Start (TypeScript)

```bash
cd typescript
pnpm install
pnpm build
```

```typescript
import { TopTrackerClient } from "toptracker-sdk";

// Authenticate
const { client } = await TopTrackerClient.login({
  email: "you@example.com",
  password: "your-password",
});

// List your projects
const { projects } = await client.projects.list();

// Get detailed activities for a date range
const { activities, total_seconds } = await client.reports.activities({
  project_ids: [123456],
  start_date: "2026-03-01",
  end_date: "2026-03-31",
});

// Get workers on a project
const { workers, statistics } = await client.projects.engagements(123456);
```

## Use Cases

- **Billing reports**: Pull activity descriptions and hours per worker to generate invoices
- **Team dashboards**: Aggregate time data across projects and team members
- **Automation**: Integrate time tracking data into your existing tools and workflows

## Contributing

Contributions are welcome. If you discover additional API endpoints or response fields, please open an issue or PR.

## License

MIT
