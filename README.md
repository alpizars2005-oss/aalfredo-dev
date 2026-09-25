# Angel Alfredo — portfolio

This is where I show the software I build, the open-source work I contribute to, and the infrastructure I use to learn. I keep it in HTML, CSS and plain JavaScript because a static portfolio does not need an application framework or a backend.

**Website:** https://alpizars2005-oss.github.io/aalfredo-dev/

The public display name is **Angel Alfredo**. My GitHub account remains `alpizars2005-oss`. The linked CV files and professional profiles are separate documents; using a shorter display name does not make this site anonymous.

## What is here

- **Alpizers:** my Windows media/download application. Source development is private; the site links to the public release channel.
- **Ultimate Macro: The New Era:** my contributions to a community project, with a link to merged upstream pull requests. Darksen remains credited as its original creator.
- **AfeLab / PizzaLab:** my private Proxmox/Linux homelab. The portfolio separates documented services from future work. It is a project description, not a live health dashboard.
- **Job Search Assistant:** a local Python workspace for reviewing vacancies and tracking applications.
- **Mochi Mochi:** a small business web project.
- **UCAMP Projects:** my coursework and learning history, kept separate from professional experience.

The [credentials section](https://alpizars2005-oss.github.io/aalfredo-dev/#certifications) distinguishes completed courses from certificate paths still in progress. The site does not present my degree as completed.

## Run it locally

From the repository root:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. There is no build step.

## Browser behavior

The page is readable before JavaScript runs. JavaScript adds language selection, CV-link switching and collapsible mobile navigation; it does not unlock the main content.

A saved ES/EN preference takes priority over the browser language. When browser storage is blocked or full, the language can still change for the current visit. Without JavaScript, the Spanish page, navigation and Spanish CV link remain usable. Reduced-motion preferences are respected.

Project descriptions and evidence links are written in the HTML rather than generated from a second content database. Changes should remain paired in Spanish and English.

## Checks

The existing dependency-free structure check and JavaScript syntax check remain available:

```bash
python scripts/check_site.py
node --check script.js
```

Browser regressions use Playwright as a **test-only** dependency:

```bash
python -m pip install -r requirements-test.txt
python -m playwright install chromium
python -m unittest discover -s tests -v
```

On Linux, the browser may need system libraries; Playwright documents installation through `python -m playwright install --with-deps chromium`. Review system changes before running that command locally.

The suite starts a temporary loopback HTTP server and blocks external requests. It checks normal and degraded startup, storage errors, language/CV switching, mobile keyboard behavior, reduced motion, unavailable observers, screen widths, evidence links and the public display name. It does not submit forms, follow contact links, operate the homelab or validate the contents of the CV PDFs.

For restricted test environments, `PORTFOLIO_TEST_INLINE=1` explicitly selects an in-memory rendering mode with controlled storage. That mode is useful for UI regressions, but is **not** a test of HTTP delivery, deployment or native storage persistence across navigations. `PLAYWRIGHT_CHROMIUM_EXECUTABLE` can select an installed Chromium executable. CI uses the normal HTTP mode and the pinned Playwright version.

## Keeping the claims honest

I prefer a specific explanation and a useful link over a badge or a simulated dashboard. A public repository, release or merged contribution can support a claim; private work must be labeled as private. A roadmap item is not a shipped feature, and a passing syntax check is not a live functional test.

The current homelab text still needs reconciliation with the latest operational project before it is expanded. This browser/name fix does not mark additional services as deployed or claim that PizzaLab PE is already built.

See [the audit plan](docs/audit-20260925/PLAN.md) and [CHANGELOG.md](CHANGELOG.md). Earlier implementation history remains in the root [PLAN.md](PLAN.md).
