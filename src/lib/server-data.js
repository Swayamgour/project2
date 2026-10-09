import { endpoints } from "./endpoints";
import { API_URL } from "./site";

/**
 * Server-side GET against the JJC backend (Server Components / generateMetadata /
 * generateStaticParams). Responses are cached by Next (ISR) and identical calls in
 * the same render pass (generateMetadata + page) are de-duplicated automatically.
 *
 * Never throws:
 *   { status: 200, data }  -> ok
 *   { status: 404, data: null } -> caller should notFound()
 *   { status: 0 | 5xx, data: null } -> API unreachable; page falls back to client-side RTK Query
 */
export async function fetchApi(name, arg, { revalidate = 600 } = {}) {
  const buildPath = endpoints[name];
  if (!buildPath) throw new Error(`Unknown endpoint: ${name}`);

  try {
    const res = await fetch(`${API_URL}${buildPath(arg)}`, {
      headers: { Accept: "application/json" },
      next: { revalidate },
    });
    if (!res.ok) return { status: res.status, data: null };
    return { status: res.status, data: await res.json() };
  } catch {
    return { status: 0, data: null };
  }
}

/**
 * Call after fetchApi() in pages/layouts that pre-seed data.
 *
 * If the backend is down or errors (not a clean 404), throw instead of rendering a degraded
 * "loader" page. With ISR this means:
 *   - a failed background revalidation keeps serving the last good page (stale-while-revalidate)
 *   - an error is never cached for the revalidate window, and crawlers get a 5xx (retry later)
 * During `next build` we do NOT throw, so a temporarily unreachable API cannot break your deploy;
 * those pages are simply built without pre-seeded data and refresh on the next revalidation.
 */
export function assertUpstream(res, { allow404 = false } = {}) {
  if (res.data != null) return;
  if (res.status === 404 && allow404) return;
  if (process.env.NEXT_PHASE === "phase-production-build") return;
  throw new Error(`Upstream API unavailable (status ${res.status})`);
}
