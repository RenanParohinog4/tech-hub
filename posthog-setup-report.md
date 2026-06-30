# PostHog post-wizard report

The wizard has completed the PostHog integration for TechHub. PostHog is now initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route events through `/ingest` — reducing the chance of ad-blocker interference. Two client-side events are captured: one when users click the Explore Events button, and one when they click an event card (including rich metadata like title, slug, location, and date).

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the Explore Events button on the homepage. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view event details. | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/491964/dashboard/1779460)
- [User Engagement Trend](https://us.posthog.com/project/491964/insights/7qoYEQPD) — Daily explore button and event card clicks over 30 days
- [Total Event Card Clicks](https://us.posthog.com/project/491964/insights/DTL3CXYK) — Total event card clicks (bold number)
- [Top Events by Clicks](https://us.posthog.com/project/491964/insights/IgsnOvmK) — Which events users click on most, by title
- [Browse to Click Funnel](https://us.posthog.com/project/491964/insights/bUk2U2Bu) — Conversion from Explore button → Event card click

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any onboarding scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
