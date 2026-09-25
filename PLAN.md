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

---

# Repository quality audit — 2026-08-26

## Goal

Add a lightweight quality gate around the static portfolio without changing its visual identity, bilingual interaction model, CV behavior, or published content scope.

## Findings

- The site has no automated syntax/structure checks today.
- Navigation, bilingual `data-es`/`data-en` pairs, local asset references, and required JavaScript IDs can be validated with a dependency-free script.
- The design uses animation/reveal effects but does not currently expose an explicit reduced-motion fallback.

## Atomic commit plan

1. **Add static-site CI and repository hygiene**
   - Add `.editorconfig`.
   - Add a standard-library HTML contract checker.
   - Run the checker plus `node --check script.js` in GitHub Actions with immutable action SHAs and read-only permissions.

2. **Respect reduced-motion preferences**
   - Disable non-essential transitions/animations when `prefers-reduced-motion: reduce` is active.
   - Preserve the default appearance for all other visitors.

3. **Document verification**
   - Record local verification commands in README.

## Risk / rollback

Low. The only browser-facing change is an accessibility media query. CI/tooling changes do not alter runtime behavior and can be reverted independently.

---

# Visual storytelling upgrade — 2026-08-26

## Source / legal boundary

The upgrade is inspired by general portfolio UX patterns observed in `dreadfulstep/portfolio`, whose public repository does not expose a license in the inspected tree. No source code, CSS, component markup, copy, or proprietary imagery from that repository will be copied. All implementation below is original and adapted to the existing `ALPIZAR_OS` visual system.

## Goal

Increase product clarity and recruiter scanability while preserving the portfolio's static architecture, bilingual behavior, current public project scope, and distinctive systems/terminal identity.

## Atomic commit plan

1. **Add product storytelling structure**
   - Add a post-hero metrics strip.
   - Add an original featured-build visualization for Ultimate Macro Strategy Lab using HTML/CSS only, clearly presented as a system visualization rather than a product screenshot.
   - Add richer project metadata such as type, year, visibility, and engineering signal without changing project claims.

2. **Add developer and experience narratives**
   - Add an original `developer.py` terminal-style profile panel.
   - Add a compact experience/focus timeline using only currently supportable public-facing claims.
   - Expand capability cards with one-sentence explanations of how each skill group is used.

3. **Improve contact UX**
   - Add Discord username `pizzaroles24` as a copy-to-clipboard contact action.
   - Add accessible live feedback for successful/failed clipboard operations.
   - Do not invent a Discord `/users/<id>` URL because only the username is currently known.

4. **Validate and document**
   - Extend the static contract checker if new required IDs/hooks are introduced.
   - Run the existing HTML contract checker and `node --check script.js` in CI.
   - Update README to document the visual-storytelling layer and its no-framework/no-new-dependency approach.

## Constraints

- Do not add unpublished infrastructure/homelab content.
- Do not fabricate screenshots, years of professional experience, client work, user counts, or performance numbers.
- Do not add Next.js/React/Tailwind solely to imitate the reference portfolio.
- Keep all translated user-facing copy paired with `data-es` / `data-en`.

## Implemented

### `a948944` — Plan portfolio visual storytelling upgrade

- Recorded the legal boundary, UX goals, constraints, validation, and rollback strategy before implementation.

### `7af2a95` — Add original portfolio storytelling styles

- Added `storytelling.css` with original ALPIZAR_OS components for metrics, featured-build visualization, developer profile, focus timeline, project metadata, and Discord feedback.
- Added responsive and reduced-motion behavior without a framework or build step.

### `3383e70` — Add portfolio product storytelling layer

- Added a three-item portfolio snapshot after the hero.
- Added the Strategy Lab featured-build system visualization and explicit `not a screenshot` disclosure.
- Added `developer.py`, a current-trajectory timeline, project metadata, capability explanations, and Discord copy-to-clipboard behavior.
- Preserved the existing language boot flow, CV switching, navigation, reveal observer, and project links.

### `3f50f9f` — Polish storytelling responsive contact layout

- Integrated the fifth Discord contact into desktop, tablet, and mobile grids without disturbing the existing four actions.
- Added keyboard focus and copied-state styling.

### `3cf7278` — Validate storytelling module contract

- Extended the dependency-free checker to require the storytelling stylesheet and critical runtime hooks.
- Protects the Discord username binding and explicit conceptual-visual disclosure from accidental deletion.

### `b69daf0` — Document portfolio storytelling upgrade

- Documented the no-copy legal boundary, zero-framework approach, visual-storytelling features, validation, and future real-screenshot path.

## Validation

- GitHub Actions `Portfolio checks` run `33035293650` passed after the main JavaScript storytelling implementation.
- GitHub Actions `Portfolio checks` run `33035378885` passed after responsive polish, the stricter storytelling contract, and README updates.
- Existing checker still validates static navigation targets, required IDs, local static assets, and translation pairs in `index.html`.
- `node --check script.js` passes in CI with the storytelling injection and clipboard fallback.
- No Next.js, React, Tailwind, npm dependency, third-party runtime script, third-party code, or third-party image was added.

## Risk / rollback

Low to moderate. The visible additions are injected by the existing vanilla JavaScript runtime and styled by one isolated stylesheet. Reverting `3383e70` removes the new runtime layer; reverting `7af2a95` / `3f50f9f` removes its styles. Documentation and checker commits can be reverted independently.

---

# Evidence-first portfolio pass — 2026-09-25

## Goal

Reduce presentation patterns that can make the portfolio feel AI-generated or template-driven while keeping the site's technical identity, bilingual support, accessibility, zero-dependency runtime, and verifiable project claims.

The redesign should make the work easier to defend in an interview: real project scope and evidence first, decoration second.

## Audit findings

- The underlying repository is not "vibe coded": it already has CI, a dependency-free contract checker, reduced-motion support, documented constraints, and explicit claim boundaries.
- The visible presentation is more vulnerable to that impression because it stacks several common generated-portfolio motifs at once: a fake OS boot screen, simulated terminal commands, "SYSTEM / ONLINE" status copy, cursor glow, conceptual dashboard graphics, developer.py, synthetic metrics, and database-style labels.
- The language boot screen also adds friction before a recruiter can see the actual work.
- Project descriptions are supportable, but evidence should be surfaced directly in the project cards instead of being hidden behind decorative storytelling.

## Atomic commit plan

1. **Document evidence-first portfolio pass**
   - Record the audit, scope, constraints, validation plan, and rollback path before implementation.

2. **Simplify portfolio around verifiable work**
   - Remove the boot/interstitial experience and open directly into the portfolio.
   - Keep bilingual behavior through browser/stored-language detection plus the existing language toggle.
   - Remove simulated terminal/OS presentation, cursor-follow effects, synthetic metrics, and the conceptual visualization layer.
   - Preserve a restrained dark technical visual identity using typography, spacing, borders, and small monospace metadata rather than fake system UI.
   - Add concise evidence lines to project cards so public proof, upstream work, private operational documentation, or learning scope is explicit.
   - Remove the redundant generic engineering-loop section.
   - Keep responsive behavior, keyboard navigation, CV switching, and reduced-motion support.

3. **Replace storytelling contracts with authenticity guardrails**
   - Remove the unused storytelling stylesheet and runtime injection code.
   - Update the static checker to protect required structure, bilingual pairs, local assets, public identity, and selected anti-gimmick presentation tokens.
   - Keep JavaScript syntax validation in CI.
   - Update agent guidance to prefer real evidence over simulated terminal/dashboard decoration.

4. **Document the evidence-first design**
   - Update README features and verification notes to match the simplified runtime.
   - Record the rationale and local verification commands.

## Validation

- python scripts/check_site.py
- node --check script.js
- GitHub Actions Portfolio checks on the pull request.
- Manual checks: initial page load, ES/EN toggle, mobile navigation, CV language switching, project links, reduced-motion behavior, and responsive layouts.

## Risk / rollback

Low to moderate. The site remains static HTML/CSS/vanilla JavaScript and adds no dependencies. The change removes runtime-injected decorative sections, so rollback is a normal revert of the implementation commit if the simplified presentation is not preferred.
