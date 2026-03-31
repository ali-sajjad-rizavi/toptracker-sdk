Generate a billing/time report using the TopTracker API.

Instructions: $ARGUMENTS

Steps:
1. Authenticate with TopTracker API (ask user for credentials if needed)
2. Fetch the project list via GET /web/projects to identify project IDs
3. For each relevant project, fetch engagements via GET /projects/:id/engagements to get worker IDs
4. Fetch detailed activities via GET /reports/activities with the date range
5. Fetch timesheet summaries via GET /reports/timesheet for totals
6. Generate a formatted report with:
   - Per-worker breakdown: total hours, daily hours, activity descriptions
   - Per-project breakdown: total hours, cost (if rates available)
   - Grand totals
7. Output the report in the format the user requested (markdown table, CSV, etc.)
