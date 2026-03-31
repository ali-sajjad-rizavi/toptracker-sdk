Generate a billing/time report using the TopTracker TypeScript SDK.

Instructions: $ARGUMENTS

Steps:
1. Authenticate by running the login script (prompts user for email/password in the terminal — credentials never appear in chat):
   ```bash
   cd typescript && TOKEN=$(pnpm tsx scripts/login.ts)
   ```
   Then use the token in your report script:
   ```ts
   const client = new TopTrackerClient({ accessToken: "<token from login>" });
   ```

2. Fetch project list:
   ```ts
   const { projects } = await client.projects.list({ archived: false });
   ```

3. For each relevant project, fetch engagements to get worker IDs:
   ```ts
   const { workers, statistics } = await client.projects.engagements(projectId);
   ```

4. Fetch detailed activities for the date range:
   ```ts
   const { activities } = await client.reports.activities({
     project_ids: [projectId],
     worker_ids: workerIds,
     start_date: "YYYY-MM-DD",
     end_date: "YYYY-MM-DD",
   });
   ```

5. Fetch timesheet summaries for totals:
   ```ts
   const { timesheet } = await client.reports.timesheet({
     project_ids: [projectId],
     worker_ids: workerIds,
     start_date: "YYYY-MM-DD",
     end_date: "YYYY-MM-DD",
   });
   ```

6. Generate a formatted report with:
   - Per-worker breakdown: total hours, daily hours, activity descriptions
   - Per-project breakdown: total hours, cost (if rates available)
   - Grand totals

7. Output the report in the format the user requested (markdown table, CSV, etc.)

Implementation notes:
- Write a temporary TypeScript script (e.g. /tmp/tt-report.ts) that imports from the SDK source at the repo's typescript/src directory
- Run it with: pnpm tsx /tmp/tt-report.ts (from the typescript/ directory)
- Print results as JSON to stdout, then format them in your response
- Clean up the temp script when done
