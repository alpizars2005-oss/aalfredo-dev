# Angel Alfredo | Personal Portfolio

This is my bilingual personal portfolio website. I built it with HTML, CSS, and vanilla JavaScript to present current software projects, automation work, technical credentials, skills, and contact options.

The portfolio is intentionally focused on work I can already show publicly.

## Live Website

https://alpizars2005-oss.github.io/aalfredo-dev/

## Features

- English and Spanish language selection
- Responsive layout for desktop and mobile
- Current project showcase with repository or release links
- Technical stack and applied-security focus
- Completed credentials plus professional certificates in progress
- Contact buttons
- CV download button that changes depending on the selected language
- Published with GitHub Pages

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

## Credentials Featured

Completed:

- Crash Course on Python — Google / Coursera
- Using Python to Interact with the Operating System — Google / Coursera
- Introduction to Git and GitHub — Google / Coursera
- Foundations of Cybersecurity — Google / Coursera
- CPFIA Preparatory Course — TecNM / CPFIA

In progress:

- Google IT Automation with Python Professional Certificate
- Google Cybersecurity Professional Certificate

## Automated Verification

The repository has a dependency-free portfolio contract checker plus JavaScript syntax validation in GitHub Actions.

The checks protect the pieces that are easiest to break during content updates:

- required section and JavaScript IDs remain present;
- navigation anchors point to real sections;
- local CSS/JavaScript/CV references exist in the repository;
- every translatable element keeps `data-es` and `data-en` together;
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
- Language switching using `data-es` / `data-en` attributes
- File downloads based on the selected language
- Repository organization and GitHub Pages publishing
- Presenting private-development/public-release boundaries clearly
- Keeping completed credentials separate from in-progress learning paths
- Static contract testing for a zero-build website

## Current Content Policy

The portfolio should only claim work or credentials that can be supported by completed projects, public repositories/releases, or confirmed course completion. In-progress programs are labeled explicitly and are not presented as completed certifications.

## Future Improvements

- Add credential verification links or certificate files when they are ready for public sharing
- Add project screenshots and release highlights
- Improve accessibility details and keyboard/navigation polish
- Keep project summaries synchronized with major releases
- Add infrastructure work only after it has stable documentation
