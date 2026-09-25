# Portfolio audit — 2026-09-25

## What I am fixing

The current page can hide its content when JavaScript is disabled or browser storage is unavailable. CSS starts `.reveal` elements at zero opacity, while the script reads and writes `localStorage` without handling storage errors. On a small screen, the navigation also depends on JavaScript to become usable.

The public display name should be **Angel Alfredo**. GitHub identity, LinkedIn links, project attribution and the contents of the existing CV PDFs stay unchanged. This is a display-name choice, not a promise of anonymity.

Baseline: `2d46f901a3f73990e6651cd117e63b35a70087f9`.
The HTML, CSS and JavaScript snapshots used locally were verified against their Git blob hashes.

## Atomic commit plan

1. Record this scope and the reproduced failures.
2. Keep content readable by default, tolerate storage failures, and make mobile navigation a progressive enhancement. Add browser regression coverage without introducing a runtime framework.
3. Apply the requested public display name and protect it with a focused test.
4. Update the README/changelog and record the actual CI result.

The earlier implementation plans remain in the root `PLAN.md`; this audit does not rewrite that history.

## Validation

- Preserve the existing static checker and JavaScript syntax check.
- Browser tests cover disabled JavaScript, blocked reads/writes, language selection, CV link switching, mobile navigation, focus return, reduced motion, unavailable observers and responsive widths.
- No external project links are followed by the tests.
- Test the same files over a temporary loopback HTTP server in CI.
- Where local navigation is blocked by the execution environment, use the explicitly labeled inline test mode. It renders the full HTML/CSS/JS in Chromium with controlled storage; it does not validate HTTP delivery or real cross-navigation browser storage.

Playwright is a development/test dependency only. The deployed site remains static HTML, CSS and JavaScript.

## Safety and rollback

Keep all six projects, their evidence links, credits, existing credential content and CV PDF files. Remove the concealment effect rather than making page readability depend on another recovery timer.

All work stays on this review branch. No merge, GitHub Pages deployment, release, account setting or homelab change is part of this audit. Revert an individual implementation commit to roll it back; there are no user-data migrations.
