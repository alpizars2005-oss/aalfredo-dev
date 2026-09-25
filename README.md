# Angel Alfredo | Personal Portfolio

Bilingual systems portfolio built with HTML, CSS, and vanilla JavaScript. It presents software projects, open-source contribution work, infrastructure/homelab operations, automation, QA, cybersecurity learning, technical credentials, and contact options.

The public site follows an **evidence-first** rule: deployed/current work is separated from roadmap work, and project cards point to public code, releases, merged upstream work, or clearly labeled private operational documentation.

## Live Website

https://alpizars2005-oss.github.io/aalfredo-dev/

## Public identity

GitHub: **`alpizars2005-oss`**

The portfolio uses the GitHub identity consistently in public project storytelling and contact surfaces.

## Design approach

The portfolio intentionally stays lightweight and direct:

- no framework or build step;
- no runtime dependencies;
- no fake OS boot sequence or simulated terminal session;
- no synthetic portfolio metrics;
- no conceptual dashboard presented as product evidence;
- restrained dark technical styling using typography, spacing, borders, and monospace metadata;
- project evidence surfaced next to the claim it supports.

The goal is to make the portfolio easy to scan and easy to defend in an interview.

## Features

- Automatic Spanish/English selection from the saved preference or browser language
- One-click ES/EN language switch
- Responsive layout for desktop and mobile
- Evidence-first project showcase with repository, release, or upstream contribution links
- AfeLab homelab section separating live services from roadmap services
- Technical stack covering development, infrastructure, automation, security, and QA
- Completed credentials across Python, Git/GitHub, debugging, cloud configuration, cybersecurity, and data
- CV download button that changes depending on the selected language
- Reduced-motion support
- Published with GitHub Pages

## Projects Featured

### Alpizers

Windows media hub and download manager with persistent queueing, local-library management, HTTPS downloads, integrity verification, local Microsoft Defender scanning, and public release builds.

Evidence surfaced in the portfolio: the public release repository.

### Ultimate Macro: The New Era

Open-source contribution to the official Ultimate Macro project. Public upstream work by `alpizars2005-oss` includes merged changes covering runtime hardening, placement-failure classification, watchdog lifecycle handling, updater and package verification, automated regression contracts, QA, and release/repository organization.

The portfolio links to the official upstream repository and a GitHub query for merged pull requests by this account rather than presenting the project as solely owned. Darksen remains credited as the original creator.

### AfeLab Homelab

Private infrastructure project centered on Proxmox and Linux services.

**Currently presented as running:**

- Jellyfin — production, unprivileged, media read-only
- Alpizers service — production, unprivileged, media read/write
- AfeNAS — production, unprivileged, SMB, media read/write
- Private administration via Tailscale

The private source-of-truth repository documents security boundaries, networking, backup/disaster-recovery planning, storage/capacity, runbooks, validation tooling, and an Ansible automation path.

**Roadmap / not presented as deployed:**

- Syncthing after backup/permission gates
- AdGuard client trial, with wider DNS changes deferred
- Uptime Kuma / Homepage
- Prometheus / Grafana when capacity permits
- Home Assistant / Immich / additional admitted workloads

### Job Search Assistant

Privacy-first bilingual workspace for evaluating job postings, tracking applications, detecting risk signals, and exporting application data.

### Mochi Mochi

Mobile-focused web product experiment for a small food business.

### UCAMP Projects

Python/software-development learning repository documenting incremental projects and practice.

## Credentials Featured

Completed:

- Crash Course on Python — Google / Coursera
- Using Python to Interact with the Operating System — Google / Coursera
- Introduction to Git and GitHub — Google / Coursera
- Foundations of Cybersecurity — Google / Coursera
- Troubleshooting and Debugging Techniques — Google / Coursera
- Configuration Management and the Cloud — Google / Coursera
- Play It Safe: Manage Security Risks — Google / Coursera
- Introduction to Cybersecurity — Cisco Networking Academy
- I Validated and Operated Data – Outstanding — UTEL Universidad
- CPFIA Preparatory Course — TecNM / CPFIA

In progress:

- Google IT Automation with Python Professional Certificate
- Google Cybersecurity Professional Certificate
- CPFIA / Cisco Networking & Cybersecurity training path

## Automated Verification

The repository has a dependency-free portfolio contract checker plus JavaScript syntax validation in GitHub Actions.

The checks protect:

- required section and JavaScript IDs;
- navigation anchors and local assets;
- bilingual `data-es` / `data-en` pairs;
- the `alpizars2005-oss` public identity;
- evidence markers in project cards;
- removal of stale Strategy Lab / old public alias branding;
- removal of presentation motifs that this design intentionally retired;
- JavaScript syntax.

Run the same checks locally:

```bash
python scripts/check_site.py
node --check script.js
```

## Portfolio content policy

Claims should be supportable by a public repository/release, merged upstream work, a documented private project, or a confirmed credential. Planned homelab services stay explicitly labeled as roadmap work until they are deployed and validated.

This keeps the portfolio useful for recruiters without creating claims that would be difficult to defend in an interview.
