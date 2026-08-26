# Portfolio Refresh Plan

## Scope

Refresh the public portfolio to better represent current software, automation, IT, and cybersecurity work while keeping the homelab unpublished for now.

## Atomic commit plan

1. **Document portfolio refresh plan**
   - Record scope, constraints, intended changes, validation, and rollback notes.

2. **Refresh portfolio content and credentials**
   - Update featured projects to current public-facing work.
   - Add a bilingual certifications/credentials section.
   - Separate completed credentials from programs still in progress.
   - Remove the current homelab navigation item and visible homelab section until it is ready to publish.
   - Refresh the visible technology stack without changing the site's interaction model.
   - Preserve bilingual behavior, responsive structure, existing CV downloads, contact links, and project-link behavior.

3. **Update repository documentation**
   - Update README features and featured projects to match the live portfolio.

## Validation

- Verify HTML remains structurally balanced and all section IDs referenced by navigation exist.
- Verify every bilingual text node added has both `data-es` and `data-en` where translation is required.
- Verify existing JavaScript selectors still resolve (`#languageScreen`, `#portfolio`, `#navLinks`, `#downloadCvBtn`, `#currentYear`).
- Verify CV paths and external links remain unchanged unless intentionally updated.
- Re-fetch changed files from `main` after each write and inspect the resulting commit/status.

## Risk / rollback

Risk is low because this is a static HTML/CSS/JavaScript site and the change is content/structure only. No dependencies are added and no existing JavaScript behavior is replaced. Rollback is a normal Git revert of the implementation commit(s).
