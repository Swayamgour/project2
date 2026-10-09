"use client";

import { useRef } from "react";
import { useStore } from "react-redux";
import { api } from "../redux/api";

/**
 * Seeds the RTK Query cache with data the Server Component already fetched, so the
 * existing views (which call useGetXxxQuery) render real content in the server HTML
 * and on first client render, with no loader flash and no duplicate request.
 *
 *   <PreloadApi entries={[{ endpointName: "getBlogBySlug", arg: slug, value: data }]} />
 *
 * `arg` must match what the view passes to its hook (same cache key).
 * Entries with a null/undefined value (API down) are skipped -> view falls back to a normal client fetch.
 */
export default function PreloadApi({ entries }) {
    const store = useStore();
    const seeded = useRef(false);

    if (!seeded.current) {
        seeded.current = true;
        const valid = (entries || []).filter((e) => e && e.value != null);
        if (valid.length) {
            store.dispatch(api.util.upsertQueryEntries(valid));
        }
    }

    return null;
}
