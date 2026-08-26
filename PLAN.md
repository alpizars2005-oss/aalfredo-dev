# Portfolio Refresh Plan

## Scope

Refresh the public portfolio to better represent current software, automation, IT, and cybersecurity work while keeping unpublished infrastructure content out of the public-facing site for now.

## Atomic commit plan

1. **Document portfolio refresh plan**
   - Record scope, constraints, intended changes, validation, and rollback notes.

2. **Refresh portfolio content and credentials**
   - Update featured projects to current public-facing work.
   - Add a bilingual certifications/credentials section.
   - Separate completed credentials from programs still in progress.
   - Remove the existing unpublished-infrastructure navigation item and section.
   - Refresh the visible technology stack without changing the site's interaction model.
   - Preserve bilingual behavior, responsive structure, existing CV downloads, contact links, and project-link behavior.

3. **Update repository documentation**
   - Update README features and featured projects to match the live portfolio.
   - Keep unpublished infrastructure work out of public-facing documentation.

## Validation

- Re-fetched `index.html` from `main` after the implementation commit.
- Confirmed navigation now targets `#certifications` and the matching section exists.
- Confirmed the credentials section contains both Spanish and English variants where translation is required.
- Confirmed the existing IDs used by `script.js` remain present: `#languageScreen`, `#portfolio`, `#navLinks`, `#downloadCvBtn`, and `#currentYear`.
- Confirmed the site continues to reuse existing `project-*` and `capability-*` components; no dependency or stylesheet changes were required.
- Confirmed CV paths and contact links remain intact.
- Re-fetched README after documentation updates.
- Repository has no commit-status checks configured for the final documentation commit, so validation is static/source-based.

## Executed commits

### `fc555d2` — Document portfolio refresh plan

- Added this implementation plan before changing the portfolio.
- Risk: documentation-only.
- Rollback: revert the commit.

### `f7bc47c` — Refresh portfolio projects and credentials

- Replaced the older project selection with current public-facing work, including Alpizers and Ultimate Macro Strategy Lab.
- Added completed credentials and clearly labeled in-progress professional certificate paths.
- Replaced the unpublished infrastructure section with credentials.
- Refreshed the visible stack with AutoHotkey v2, PowerShell, SQLite, SHA-256, Defender, and secure-update work.
- Tests: source re-fetch, navigation/section target inspection, bilingual attribute inspection, selector-preservation inspection.
- Risk: low; static HTML content/structure only.
- Rollback: revert `f7bc47c`.

### `3bc6376` — Update portfolio documentation

- Updated README to match current projects and credentials.
- Tests: README re-fetch and content inspection.
- Risk: documentation-only.
- Rollback: revert the commit.

### `2eea530` — Keep unpublished infrastructure out of README

- Removed premature public README references to infrastructure work that is not ready to showcase.
- Tests: README source inspection.
- Risk: documentation-only.
- Rollback: revert the commit.

## Risk / rollback

Overall risk is low because this remains a static HTML/CSS/JavaScript site. No dependencies were added and no existing JavaScript behavior was replaced. Each change can be rolled back with a normal Git revert of the corresponding commit.
