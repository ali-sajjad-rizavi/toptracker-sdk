Add a new API endpoint to the TypeScript SDK.

Endpoint details: $ARGUMENTS

Steps:
1. Create the request/response types in `typescript/src/types/` (use `readonly` on all properties)
2. Re-export the new types from `typescript/src/types/index.ts`
3. Create the endpoint class in `typescript/src/endpoints/` following the existing pattern (private `#token`, methods that call `request()`)
4. Wire the endpoint into `TopTrackerClient` in `typescript/src/client.ts`
5. Re-export any new public types from `typescript/src/index.ts`
6. Run `cd typescript && pnpm run build` to verify it compiles
7. Update the API Coverage table in the root `README.md`
