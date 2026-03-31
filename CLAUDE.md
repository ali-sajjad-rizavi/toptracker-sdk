# TopTracker SDK

Unofficial SDK for the TopTracker (by Toptal) internal API. This is a monorepo with language-specific implementations.

## Project Structure

```
openapi.yaml   — OpenAPI 3.1 spec for all implemented endpoints (canonical API reference)
typescript/    — TypeScript SDK (zero deps, native fetch)
python/        — Python SDK (planned)
```

## TypeScript SDK

### Commands

```bash
cd typescript
pnpm install        # Install dependencies (pnpm only — npm/yarn blocked)
pnpm run build      # Compile TypeScript → dist/
pnpm run lint       # Type-check without emitting
pnpm run dev        # Watch mode
```

### Architecture

- `src/client.ts` — `TopTrackerClient` main entry point, exposes namespaced endpoints
- `src/http.ts` — Internal fetch wrapper, handles auth token injection and error mapping
- `src/errors.ts` — `TopTrackerError` and `AuthenticationError`
- `src/endpoints/` — One file per API resource (auth, projects, reports)
- `src/types/` — All request/response interfaces, strictly typed with `readonly` properties

### API Base URL

`https://tracker-api.toptal.com`

### Authentication

The API uses `access_token` as a query parameter (not Bearer headers). Obtain a token via `POST /sessions` with email/password. The token is a base64-encoded string with a HMAC signature.

### Key Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/sessions` | Login → access_token |
| GET | `/users/me` | Current user profile |
| GET | `/web/projects` | List projects |
| GET | `/projects/:id/engagements` | Workers + stats for a project |
| GET | `/reports/timesheet` | Time totals by date |
| GET | `/reports/activities` | Detailed activity entries with descriptions |

### Conventions

- All types use `readonly` properties — never mutate API response objects
- Zero runtime dependencies — only native `fetch`
- Strictest TypeScript config: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- Use `pnpm` exclusively (enforced via `only-allow`)
- Array query params use `key[]` format (e.g. `project_ids[]`)

### Common Tasks

- **Adding a new endpoint**: Create a file in `src/endpoints/`, add types in `src/types/`, wire it into `src/client.ts`, and re-export from `src/index.ts`
- **Adding a new type**: Add to the appropriate file in `src/types/`, re-export from `src/types/index.ts`
