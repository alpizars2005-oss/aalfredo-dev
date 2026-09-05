# Angel Alfredo | Personal Portfolio

This is my bilingual personal portfolio website. I built it with HTML, CSS, and vanilla JavaScript to present current Python/software projects, Data/AI and QA work, automation, systems learning, technical credentials, and contact options.

The portfolio is intentionally focused on work I can already show publicly.

## Live Website

https://alpizars2005-oss.github.io/aalfredo-dev/

## Features

- English and Spanish language selection
- Responsive layout for desktop and mobile
- Current project showcase with repository or release links
- Product-storytelling layer with a featured build, project metadata, and engineering signals
- Original Strategy Lab system visualization clearly labeled as a conceptual visualization, not a product screenshot
- Terminal-style `developer.py` profile and current-focus timeline
- Technical stack and applied-security focus
- Completed credentials across Python, Git/GitHub, debugging, cybersecurity, and data, plus professional certificate paths in progress
- Contact buttons plus copy-to-clipboard Discord username (`pizzaroles24`)
- CV download button that changes depending on the selected language
- Published with GitHub Pages

## Visual Storytelling Approach

The site keeps its original `ALPIZAR_OS` / systems-console identity while borrowing only general UX ideas common to strong software portfolios: show a flagship build early, make projects scannable, surface engineering metadata, and explain capabilities through outcomes rather than technology names alone.

The implementation in `storytelling.css` and `script.js` was written specifically for this portfolio. It does not copy third-party portfolio source code, CSS, component markup, written copy, or visual assets.

The added layer remains intentionally lightweight:

- no React or Next.js migration;
- no Tailwind or component framework;
- no package manager or build step;
- no third-party runtime dependencies;
- no fabricated screenshots or experience metrics.

When real project screenshots are ready for public use, the featured visualization and project presentation can accept them without changing the site's architecture.

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Pages

## Projects Featured

- Alpizers — Windows media hub and download manager with public releases
- Ultimate Macro Strategy Lab — isolated experimental extension work with visual strategy editing, calibration, testing, and verified updates
- Job Search Assistant — privacy-first bilingual job-application workspace
- Mochi Mochi — mobile-focused web product experiment for a small food business
- UCAMP Projects — Python and software-development learning portfolio

Each project also exposes compact metadata for type, year, public/private boundary, and a representative engineering signal such as CI or tests.

## Credentials Featured

Completed:

- Crash Course on Python — Google / Coursera
- Using Python to Interact with the Operating System — Google / Coursera
- Introduction to Git and GitHub — Google / Coursera
- Foundations of Cybersecurity — Google / Coursera
- Troubleshooting and Debugging Techniques — Google / Coursera
- Introduction to Cybersecurity — Cisco Networking Academy
- I Validated and Operated Data – Outstanding — UTEL Universidad
- CPFIA Preparatory Course — TecNM / CPFIA

In progress:

- Google IT Automation with Python Professional Certificate
- Google Cybersecurity Professional Certificate
- CPFIA / Cisco Networking & Cybersecurity training path

## Automated Verification

The repository has a dependency-free portfolio contract checker plus JavaScript syntax validation in GitHub Actions.

The checks protect the pieces that are easiest to break during content updates:

- required section and JavaScript IDs remain present;
- navigation anchors point to real sections;
- local CSS/JavaScript/CV references exist in the repository;
- every static translatable element keeps `data-es` and `data-en` together;
- the storytelling stylesheet and its required runtime hooks remain present;
- the Discord copy action remains bound to the published username;
- the conceptual visual keeps its explicit `not a screenshot` disclosure;
- `script.js` remains syntactically valid.

Run the same checks locally:

```bash
python scripts/check_site.py
node --check script.js
```

The CI workflow uses read-only repository permissions and immutable Action commit references.

## What I Practiced

- Semantic HTML structure
- Responsive CSS layout
- DOM manipulation with vanilla JavaScript
- Progressive product storytelling without adding a framework
- Language switching using `data-es` / `data-en` attributes
- Clipboard UX with a fallback path and accessible live feedback
- File downloads based on the selected language
- Repository organization and GitHub Pages publishing
- Presenting private-development/public-release boundaries clearly
- Keeping completed credentials separate from in-progress learning paths
- Static contract testing for a zero-build website

## Current Content Policy

The portfolio should only claim work or credentials that can be supported by completed projects, public repositories/releases, or confirmed course completion. In-progress programs are labeled explicitly and are not presented as completed certifications.

Conceptual visuals must be presented as conceptual visuals. Product screenshots should only be added when they are real, owned/authorized, and ready for public sharing.

## Future Improvements

- Add credential verification links or certificate files when they are ready for public sharing
- Replace or complement conceptual project visuals with real screenshots when suitable assets are available
- Improve accessibility details and keyboard/navigation polish
- Keep project summaries synchronized with major releases
- Add infrastructure work only after it has stable documentation
