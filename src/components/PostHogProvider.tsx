"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

/**
 * Initializes PostHog on the client and provides it to the app.
 *
 * Uses `capture_pageview: 'history_change'` so SPA navigations in the App
 * Router are tracked automatically (PostHog listens to History API changes).
 *
 * Requires the following env vars (see .env.example):
 *   NEXT_PUBLIC_POSTHOG_KEY
 *   NEXT_PUBLIC_POSTHOG_HOST
 */
export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return; // no-op if not configured (e.g. local dev without keys)

    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      capture_pageview: "history_change",
      capture_pageleave: true,
      defaults: "2025-05-24",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
