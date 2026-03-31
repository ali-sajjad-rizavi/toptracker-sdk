# TODO

Tracked from reverse-engineering by [dalirnet/top-tracker](https://github.com/dalirnet/top-tracker) and our own HAR captures.

## Implemented

- [x] POST `/sessions` — Login
- [x] GET `/users/me` — Current user profile
- [x] GET `/web/projects` — List projects
- [x] GET `/projects/:id/engagements` — Workers + stats for a project
- [x] GET `/reports/timesheet` — Time totals by date
- [x] GET `/reports/activities` — Detailed activity entries

## Reports (high priority)

- [ ] GET `/reports/chart` — Chart data (by projects/workers/date range/type)
- [ ] GET `/reports/work_summary` — Work summary (by projects/workers/date range/type)
- [ ] GET `/reports/filters` — Available report filters (by selected project IDs)

## Activities CRUD

- [ ] GET `/activities/my` — Get my activities (filtered by project, date range)
- [ ] GET `/activities/:id` — Get a single activity
- [ ] POST `/activities/update` — Update activities (description, times, etc.)
- [ ] POST `/activities/delete` — Delete activities (by activity_ids array)
- [ ] POST `/activities/:id/approve` — Approve an activity
- [ ] POST `/activities/:id/split` — Split an activity at a given time
- [ ] POST `/projects/:project_id/activities` — Create an activity

## Projects

- [ ] GET `/projects/:id` — Get a single project
- [ ] GET `/projects` — Search projects (by query)
- [ ] GET `/projects/list` — List projects (by IDs, archived flag)
- [ ] GET `/projects/:project_id/statistics` — Project statistics
- [ ] POST `/projects` — Create a new project
- [ ] PUT `/projects/:id` — Update a project
- [ ] PUT `/projects/:id/archive` — Archive a project
- [ ] PUT `/projects/:id/dearchive` — Unarchive a project
- [ ] PUT `/projects/:project_id/workers` — Update project workers

## Users

- [ ] GET `/users/:id` — Get a user by ID
- [ ] PUT `/users/:id` — Update a user
- [ ] POST `/users` — Register (sign up)
- [ ] DELETE `/sessions/me` — Logout
- [ ] DELETE `/users/:id` — Terminate account
- [ ] POST `/sessions/switch` — Switch session/profile
- [ ] POST `/users/me/profiles` — Create a user profile

## Invitations

- [ ] GET `/invitations` — List invitations
- [ ] GET `/invitations/:token` — Get an invitation
- [ ] PUT `/invitations/:token` — Accept an invitation
- [ ] POST `/invitations/:token/decline` — Decline an invitation
- [ ] POST `/invitations/:invitation_id/resend` — Resend an invitation
- [ ] POST `/projects/:project_id/invitations` — Invite to a project
- [ ] DELETE `/invitations/:id` — Remove an invitation

## Notifications

- [ ] GET `/notifications` — List notifications
- [ ] PUT `/notifications/:id/mark_as_read` — Mark as read
- [ ] DELETE `/notifications/:id` — Remove a notification

## Payments & Invoices

- [ ] GET `/payments/filters` — Payment filters
- [ ] GET `/payments/invoices` — List invoices
- [ ] GET `/payments/invoices/:invoice_id` — Get a single invoice
- [ ] GET `/payments/invoice_engagements` — Invoice engagements
- [ ] POST `/payments/invoices` — Create an invoice
- [ ] PUT `/payments/invoices/:id` — Update an invoice
- [ ] PUT `/payments/invoices/:invoice_id/send` — Send an invoice
- [ ] PUT `/payments/invoices/:invoice_id/cancel` — Cancel an invoice
- [ ] PUT `/payments/invoices/:invoice_id/decline` — Decline an invoice
- [ ] PUT `/payments/invoices/:invoice_id/mark_as_paid` — Mark as paid
- [ ] PUT `/payments/invoices/:invoice_id/unmark_as_paid` — Unmark as paid
- [ ] POST `/payments/providers/link` — Link payment provider
- [ ] POST `/payments/providers/unlink` — Unlink payment provider

## Misc

- [ ] GET `/users/me/storages/tracker_web` — User web storage/preferences
- [ ] PUT `/users/me/storages/tracker_web` — Update web storage
- [ ] GET `/web/projects_lite` — Projects (lite)
- [ ] GET `/web/projects/:id` — Single project (web variant)
- [ ] GET `/web/web_tracker` — Web tracker state
- [ ] GET `/payments/providers` — List payment providers
- [ ] GET `/payments/currencies` — List currencies
- [ ] GET `/time_zones` — List timezones
- [ ] GET `/countries` — List countries
