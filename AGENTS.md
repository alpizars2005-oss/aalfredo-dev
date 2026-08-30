# Agent development guide

This is a static portfolio. Favor accessibility, performance, correctness, and simple deployment over framework churn.

## Workflow

1. Read `PLAN.md`, `README.md`, CI, and `scripts/check_site.py` before changes.
2. Verify browser APIs against current official documentation when changing frontend behavior. Context7 may assist with current docs.
3. Keep dependencies at zero unless there is a concrete maintenance or testing benefit.
4. Preserve semantic HTML, keyboard usability, reduced-motion behavior, responsive layouts, and fast loading.
5. Run the existing site checker after changes.
6. For meaningful browser interactions, add end-to-end coverage with Playwright when it catches behavior that static checks cannot.
7. Never expose private contact data, tokens, analytics secrets, or machine-specific paths.

## Review roles

For substantial changes, review separately for implementation, accessibility/UX, tests, and release/deployment impact.

## Completion gate

A change is complete only when the repository's existing CI checks pass and browser-visible changes have a concise manual verification path. Avoid adding tooling that costs more to maintain than the portfolio feature it protects.
