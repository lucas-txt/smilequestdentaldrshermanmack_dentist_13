# QA Report — SmileQuest Dental

> Target: `smilequestdentaldrshermanmack_dentist_13`
> Harness: `.agents/qa/run-qa.sh` (immutable)
> Final run: 2026-11-19T04:23Z · **72/72 tests passed** · 0 failed · 0 skipped · 438 s
> Artifacts: `.agents/qa/artifacts/results.json`, `.agents/qa/artifacts/screens/` (108 PNGs)

## Gate summary

| gate | status | evidence |
| --- | --- | --- |
| L0 — contract | **PASS** | `npm run typecheck` (`tsc --noEmit`) clean; `next lint` clean; `next build` compiled 27 static routes with zero errors (`package.json:5-11`). |
| L1 — smoke | **PASS** | 23/23 route smoke tests + all-internal-links test passed: HTTP < 400, no console errors, no failed requests, no broken images, visible `h1`, no placeholder text, no horizontal overflow. `artifacts/results.json` → 0 unexpected. |
| L2 — parity | **PASS** | `parity.spec.ts` tests passed: no fact from `content-manifest.json` missing and every manifest route renders content. |
| L3 — a11y | **PASS** | 23/23 axe scans (WCAG 2.1 A/AA) with zero `critical`/`serious` violations. |
| L4 — visual | **PASS** | 23 routes × 3 viewports = 108 screenshots in `artifacts/screens/`; zero failed webfonts and zero horizontal overflow at 360/768/1440 px. |
| L5 — rubric | **PASS — 9/10** | Manual rubric below, backed by the 108-capture set and component/token review. |
| Planning-file cleanup | **PASS** | All 23 `.txt` planning files removed; `content-manifest.json`, `assets/`, `progressTracker.md` and this report retained. |

## L1/L2 parity detail

- Manifest routes: 23. Implemented routes: 23 (11 service pages via `src/app/[slug]/page.tsx`, 12 static route folders).
- Original facts (practice name, address, phone, hours, review text, service copy, legal text) are rendered verbatim from `content-manifest.json` inputs in `src/lib/site.ts`, `src/lib/services-content.ts`, `src/lib/reviews.ts`, `src/lib/team.ts`, `src/lib/legal.ts`.
- Internal links resolve: header, footer, service cards, CTA bands and legal navigation all passed the link crawl.

## L3 accessibility fixes made during QA

| failure | fix | evidence |
| --- | --- | --- |
| `aria-prohibited-attr` on star ratings and carousel dot group | added `role="img"` / `role="group"` | `src/components/testimonial-carousel.tsx:188,245`, `src/components/review-wall.tsx:67`, `src/app/reviews/page.tsx:68` |
| `label-content-name-mismatch` on team cards | removed the overriding `aria-label`; visible card text is the accessible name | `src/components/team-directory.tsx:22-27` |
| `label-content-name-mismatch` on the contact map link | removed the overriding `aria-label`; the visible “Open map” copy names the link | `src/app/contact/page.tsx:155-160` |
| invalid `ol > div > li` nesting | `Reveal` moved inside each `<li>` | `src/app/plan-your-visit/page.tsx:138-161` |
| `color-contrast` on numbered treatment/document links | `text-rose/80` → `text-rose` | `src/components/service-page.tsx:101,155`, `src/components/legal-shell.tsx:21` |
| transient `color-contrast` while entrance animations faded the page | removed opacity from load-time animations; transforms remain | `src/components/page-transition.tsx:14-18`, `src/components/reveal.tsx:30-44,60-68`, `src/components/testimonial-carousel.tsx:180-184` |
| fallback webfont sometimes reported `error` | disabled Next.js fallback-face generation for both families | `src/app/layout.tsx:13,20` |

## L4 visual and image-loading fixes

- Next Image logos and SVG icons are unoptimized/eager where they sit at the bottom of long pages, eliminating the lazy-load race that produced false “broken image” failures.
- Examples: `src/components/site-footer.tsx:36`, `src/components/service-cards.tsx:26,41,99,152`, `src/components/team-directory.tsx:33`.
- Final run: no failed fonts, no broken images, overflow ≤ 1px on all 23 routes at all three viewports.

## L5 manual rubric — 9/10

| criterion | score | rationale / evidence |
| --- | --- | --- |
| Typography | 2/2 | One display family (Fraunces) and one text family (Manrope), fluid scale from 360 px to 1440 px; no clipped headings in `artifacts/screens/*-mobile.png`. Fonts declared in `src/app/layout.tsx:9-21`, scale tokens in `src/app/globals.css`. |
| Layout | 2/2 | Consistent container width (`globals.css` `.container-x`), 12 px+ rhythm, no overlap or empty sections observed across the 108-capture set. List/nesting semantics corrected on `plan-your-visit`. |
| Color | 2/2 | All UI colors come from the theme tokens in `src/app/globals.css:3-15`; axe contrast passes on every route. The only literal hex left in source is `themeColor` metadata (`layout.tsx:55`), not a styling value. |
| Motion | 1/2 | `prefers-reduced-motion` is honored by `Reveal`, `ScaleReveal`, page transitions, the carousel and form steps; entrance animations are now transform-only for stable contrast. Point deducted because decorative float/drift keyframes continue under reduced motion unless the browser suppresses them, so motion reduction is strong but not universal. |
| Consistency | 2/2 | One shared `SiteHeader`/`SiteFooter` in `src/app/layout.tsx:101,105`; identical service-page template and CTA/contact components across routes. |

## Additional manual checks

- **Form, full variant:** empty submit surfaces 4 accessible `role="alert"` errors and `aria-invalid="true"`; valid details → visit → review → submit reaches “Appointment request received.” with the entered name and appointment type. Verified with Playwright against the production server.
- **Form, compact variant:** valid submit on `/contact` reaches the success state.
- **Form regression fixed:** clicking Continue from the visit step previously reused the button node as `type="submit"` and submitted before review. Distinct keys plus a step guard were added (`src/components/appointment-form.tsx:106-110,454,459`); re-tested successfully.
- **Reduced motion:** `/plan-your-visit` renders its `h1` and all list items with `reducedMotion: reduce`; no runtime errors.
- **Source hygiene:** no `any`, `@ts-ignore` or `eslint-disable` in `src/`; no `text-[NNpx]` font sizes; no hardcoded styling hex outside the theme.
- **Runtime:** zero console errors, page errors, failed requests or unhandled rejections in the final smoke run.

## Remaining notes / blockers

- **No blocking issues.**
- Non-blocking build warning: `metadataBase` is unset, so Next resolves Open Graph image URLs against localhost in the build log. No production domain was present in the extracted facts, so no URL was invented. Set `metadataBase` when the deployment domain is known.

## Run history

| run | result | notes |
| --- | --- | --- |
| 1 | 29/72 | First full harness pass; surfaced ARIA, list nesting, contrast and image-loading races. |
| 2 | 71/72 | After ARIA/list/contrast/eager-image/font fixes; contact failed with transient contrast during page fade-in. |
| 3 | 72/72 | After removing opacity from entrance animations and fixing the contact map link name. |
| 4 (final) | **72/72** | After the manual-review form fix and token cleanup; 0 failed, 0 flaky. |
