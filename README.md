# @vicstack/http

Named HTTP status codes, as a plain object — no runtime dependencies.

```ts
import HTTP from "@vicstack/http";
// or: import { HTTP } from "@vicstack/http";

c.json({ message: "Too many requests" }, HTTP.TooManyRequests); // 429
```

- `HTTP` maps standard status names (`OK`, `NotFound`, `TooManyRequests`, …)
  to their numeric code, grouped by class (1xx-5xx) and `as const` so each
  value is its literal number, not `number`.
- `HttpStatusCode` is the union of all codes; `HttpStatusName` is the union of
  all names. Useful for typing a parameter that must be one of these codes:
  `function respond(status: HttpStatusCode) { ... }`.

Used by [`@vicstack/rate-limit`](https://github.com/FranciscoAVD/rate-limit)
to return `429` with the right status name.
