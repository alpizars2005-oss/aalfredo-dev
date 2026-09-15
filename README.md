# Angel Alfredo | Personal Portfolio

Bilingual systems portfolio built with HTML, CSS, and vanilla JavaScript. It presents software projects, open-source contribution work, infrastructure/homelab operations, automation, QA, cybersecurity learning, technical credentials, and contact options.

The public site intentionally distinguishes **deployed/current work** from **roadmap work**. It does not present planned infrastructure as already running.

## Live Website

https://alpizars2005-oss.github.io/aalfredo-dev/

## Public identity

GitHub: **`alpizars2005-oss`**

The portfolio uses the GitHub identity consistently in public project storytelling and contact surfaces.

## Features

- English and Spanish language selection
- Responsive layout for desktop and mobile
- Current project showcase with repository or release links
- Featured open-source contribution story for Ultimate Macro: The New Era
- AfeLab homelab section separating live services from roadmap services
- Terminal-style `developer.py` profile and current-focus timeline
- Technical stack covering development, infrastructure, automation, security, and QA
- Completed credentials across Python, Git/GitHub, debugging, cloud configuration, cybersecurity, and data
- CV download button that changes depending on the selected language
- Published with GitHub Pages

## Projects Featured

### Alpizers

Windows media hub and download manager with persistent queueing, local-library management, HTTPS downloads, integrity verification, local Microsoft Defender scanning, and public release builds.

### Ultimate Macro: The New Era

Open-source contribution to the official Ultimate Macro project. Public upstream work by `alpizars2005-oss` includes merged changes covering runtime hardening, placement-failure classification, watchdog lifecycle handling, updater and package verification, automated regression contracts, QA, and release/repository organization.

The portfolio links to the official upstream repository rather than presenting the project as solely owned by this account. Darksen remains credited as the original creator.

### AfeLab Homelab

Private infrastructure project centered on Proxmox and Linux services.

**Currently running:**

- Jellyfin — production, unprivileged, media read-only
- Alpizers service — production, unprivileged, media read/write
- AfeNAS — production, unprivileged, SMB, media read/write
- Private administration via Tailscale

The private AfeLab source-of-truth repository documents security boundaries, networking, backup/disaster-recovery planning, storage/capacity, runbooks, validation tooling, and an Ansible automation path.

**Roadmap / not presented as deployed:**

- Syncthing after backup/permission gates
- AdGuard client trial, with wider DNS changes deferred
- Uptime Kuma / Homepage
- Prometheus / Grafana when capacity permits
- AfeWeb
- Home Assistant OS
- Immich, additional game servers, and other admitted workloads

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
- the storytelling stylesheet and required runtime hooks;
- the `alpizars2005-oss` public identity;
- removal of stale Strategy Lab / old public alias branding from the portfolio surface;
- the conceptual-visual `not a screenshot` disclosure;
- JavaScript syntax.

Run the same checks locally:

```bash
python scripts/check_site.py
node --check script.js
```

## Portfolio content policy

Claims should be supportable by a public repository/release, merged upstream work, a documented private project, or a confirmed credential. Planned homelab services stay explicitly labeled as roadmap work until they are deployed and validated.

This keeps the portfolio useful for recruiters without creating claims that would be difficult to defend in an interview.
