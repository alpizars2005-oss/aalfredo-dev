const storytellingStylesheet = document.createElement("link");
storytellingStylesheet.rel = "stylesheet";
storytellingStylesheet.href = "storytelling.css";
document.head.appendChild(storytellingStylesheet);

document.addEventListener("DOMContentLoaded", () => {
    function injectStorytellingSections() {
        if (document.getElementById("storyMetrics")) return;

        const hero = document.querySelector(".hero");
        const profile = document.getElementById("profile");

        if (hero) {
            hero.insertAdjacentHTML(
                "afterend",
                `
                <div class="story-metrics section-frame reveal" id="storyMetrics" aria-label="Portfolio snapshot">
                    <article class="story-metric">
                        <span class="story-metric-label" data-es="PROYECTOS SELECCIONADOS" data-en="FEATURED PROJECTS">PROYECTOS SELECCIONADOS</span>
                        <strong><span>06</span> / BUILD LOG</strong>
                    </article>
                    <article class="story-metric">
                        <span class="story-metric-label" data-es="DOMINIOS" data-en="DOMAINS">DOMINIOS</span>
                        <strong><span>04</span> / DEV·SYS·AUT·SEC</strong>
                    </article>
                    <article class="story-metric">
                        <span class="story-metric-label" data-es="GITHUB" data-en="GITHUB">GITHUB</span>
                        <strong><span>alpizars2005-oss</span></strong>
                    </article>
                </div>

                <section class="featured-build section-frame">
                    <div class="featured-heading reveal">
                        <div>
                            <p class="featured-kicker">00.A / FEATURED CONTRIBUTION</p>
                            <h2 data-es="Código que llegó upstream." data-en="Code that shipped upstream.">Código que llegó upstream.</h2>
                        </div>
                        <p data-es="Mi trabajo en Ultimate Macro: The New Era no es sólo un experimento local: varias correcciones de runtime, QA, updater, packaging y release engineering fueron integradas al repositorio oficial."
                           data-en="My work on Ultimate Macro: The New Era is not just a local experiment: multiple runtime, QA, updater, packaging, and release-engineering changes were merged into the official repository.">
                            Mi trabajo en Ultimate Macro: The New Era no es sólo un experimento local: varias correcciones de runtime, QA, updater, packaging y release engineering fueron integradas al repositorio oficial.
                        </p>
                    </div>

                    <div class="featured-layout">
                        <div class="featured-window reveal" aria-label="Conceptual Ultimate Macro engineering pipeline visualization">
                            <div class="featured-window-bar">
                                <span>ULTIMATE_MACRO // ENGINEERING.PIPELINE</span>
                                <span class="featured-window-status">UPSTREAM</span>
                            </div>
                            <div class="strategy-visual">
                                <div class="strategy-route" aria-hidden="true"></div>
                                <div class="strategy-crosshair" aria-hidden="true"></div>
                                <div class="strategy-node node-1" data-label="debug">DBG</div>
                                <div class="strategy-node node-2" data-label="test">QA</div>
                                <div class="strategy-node node-3" data-label="package">PKG</div>
                                <div class="strategy-node node-4" data-label="release">REL</div>
                                <div class="strategy-node node-5" data-label="evidence">CI</div>
                                <div class="strategy-console" aria-hidden="true">
                                    <div><span>RUNTIME</span><strong>HARDENED</strong></div>
                                    <div><span>TESTS</span><strong>GATED</strong></div>
                                    <div><span>PACKAGE</span><strong>VERIFIED</strong></div>
                                    <div><span>ROLLBACK</span><strong>PLANNED</strong></div>
                                </div>
                                <span class="visual-disclaimer" data-es="VISUALIZACIÓN DEL SISTEMA · NO SCREENSHOT" data-en="SYSTEM VISUALIZATION · NOT A SCREENSHOT">SYSTEM VISUALIZATION · NOT A SCREENSHOT</span>
                            </div>
                        </div>

                        <article class="featured-copy reveal">
                            <p class="featured-kicker">OPEN SOURCE / MAINTENANCE & RELEASE ENGINEERING</p>
                            <h3>Ultimate Macro: The New Era</h3>
                            <p data-es="Contribuyo al proyecto oficial con debugging de problemas reproducibles, cambios acotados, contratos de regresión, validación en Windows y mejoras de release. Entre los cambios integrados están hardening de placement, watchdog, updater, packaging y CI."
                               data-en="I contribute to the official project through reproducible debugging, scoped fixes, regression contracts, Windows validation, and release improvements. Merged work includes placement, watchdog, updater, packaging, and CI hardening.">
                                Contribuyo al proyecto oficial con debugging de problemas reproducibles, cambios acotados, contratos de regresión, validación en Windows y mejoras de release. Entre los cambios integrados están hardening de placement, watchdog, updater, packaging y CI.
                            </p>
                            <dl class="featured-facts">
                                <div class="featured-fact"><dt class="featured-fact-label">ROLE</dt><dd class="featured-fact-value">Open-source contributor</dd></div>
                                <div class="featured-fact"><dt class="featured-fact-label">FOCUS</dt><dd class="featured-fact-value">Runtime / QA / Release</dd></div>
                                <div class="featured-fact"><dt class="featured-fact-label">SIGNAL</dt><dd class="featured-fact-value">Merged upstream PRs</dd></div>
                                <div class="featured-fact"><dt class="featured-fact-label">SAFETY</dt><dd class="featured-fact-value">CI / SHA-256 / rollback</dd></div>
                            </dl>
                            <div class="featured-actions">
                                <a class="action-link primary-action" href="https://github.com/UltimateMacro/Ultimate-Macro-New-Era" target="_blank" rel="noreferrer">
                                    <span data-es="Abrir repositorio oficial" data-en="Open official repository">Abrir repositorio oficial</span><span>↗</span>
                                </a>
                            </div>
                        </article>
                    </div>
                </section>
                `
            );
        }

        if (profile) {
            profile.insertAdjacentHTML(
                "afterend",
                `
                <section class="story-profile section-frame">
                    <div class="story-profile-grid">
                        <article class="developer-panel reveal">
                            <div class="story-panel-header"><span>alpizars2005-oss@portfolio:~$ cat developer.py</span><span>VALID</span></div>
                            <pre class="developer-code"><span class="code-key">developer</span> = {
  <span class="code-string">"name"</span>: <span class="code-string">"Angel Alfredo"</span>,
  <span class="code-string">"github"</span>: <span class="code-string">"alpizars2005-oss"</span>,
  <span class="code-string">"discipline"</span>: <span class="code-string">"Systems Engineering"</span>,
  <span class="code-string">"focus"</span>: [
    <span class="code-string">"Software"</span>,
    <span class="code-string">"Infrastructure"</span>,
    <span class="code-string">"Automation"</span>,
    <span class="code-string">"Cybersecurity"</span>
  ],
  <span class="code-string">"status"</span>: <span class="code-string">"building"</span>
}</pre>
                        </article>

                        <article class="timeline-panel reveal">
                            <div class="story-panel-header"><span>01.B / EXPERIENCE LOG</span><span>SYNCED</span></div>
                            <div class="timeline-content">
                                <div class="timeline-intro"><p class="story-panel-kicker" data-es="TRAYECTORIA ACTUAL" data-en="CURRENT TRAJECTORY">TRAYECTORIA ACTUAL</p><h3 data-es="Aprender construyendo y operando." data-en="Learning by building and operating.">Aprender construyendo y operando.</h3></div>
                                <div class="timeline-entry"><p class="timeline-period">2026 — PRESENT</p><div><h4 data-es="Ingeniería en Sistemas" data-en="Systems Engineering">Ingeniería en Sistemas</h4><p data-es="Formación formal mientras convierto software, redes, seguridad y operación en proyectos verificables." data-en="Formal training while turning software, networking, security, and operations concepts into verifiable projects.">Formación formal mientras convierto software, redes, seguridad y operación en proyectos verificables.</p></div></div>
                                <div class="timeline-entry"><p class="timeline-period">OPEN SOURCE</p><div><h4>Ultimate Macro: The New Era</h4><p data-es="Debugging, QA, runtime hardening, release engineering y contribuciones integradas upstream." data-en="Debugging, QA, runtime hardening, release engineering, and contributions merged upstream.">Debugging, QA, runtime hardening, release engineering y contribuciones integradas upstream.</p></div></div>
                                <div class="timeline-entry"><p class="timeline-period">HOMELAB</p><div><h4>AfeLab</h4><p data-es="Proxmox, Linux, almacenamiento SMB, servicios aislados, Tailscale y documentación de backup/DR y automatización." data-en="Proxmox, Linux, SMB storage, isolated services, Tailscale, plus backup/DR and automation documentation.">Proxmox, Linux, almacenamiento SMB, servicios aislados, Tailscale y documentación de backup/DR y automatización.</p></div></div>
                            </div>
                        </article>
                    </div>
                </section>
                `
            );
        }
    }

    function addProjectMetadata() {
        const projectFacts = {
            "Alpizers": [["TIPO", "TYPE", "Producto", "Product"], ["AÑO", "YEAR", "2026", "2026"], ["VISIBILIDAD", "VISIBILITY", "Releases públicas / código privado", "Public releases / private source"], ["SEÑAL", "SIGNAL", "CI + SHA-256", "CI + SHA-256"]],
            "Ultimate Macro: The New Era": [["TIPO", "TYPE", "Contribución open source", "Open-source contribution"], ["AÑO", "YEAR", "2026", "2026"], ["VISIBILIDAD", "VISIBILITY", "Upstream público", "Public upstream"], ["SEÑAL", "SIGNAL", "Merged PRs / CI", "Merged PRs / CI"]],
            "AfeLab Homelab": [["TIPO", "TYPE", "Infraestructura", "Infrastructure"], ["AÑO", "YEAR", "2026", "2026"], ["VISIBILIDAD", "VISIBILITY", "Operación privada", "Private operations"], ["SEÑAL", "SIGNAL", "Proxmox / Ansible / runbooks", "Proxmox / Ansible / runbooks"]],
            "Job Search Assistant": [["TIPO", "TYPE", "Herramienta", "Tool"], ["AÑO", "YEAR", "2026", "2026"], ["VISIBILIDAD", "VISIBILITY", "Público", "Public"], ["SEÑAL", "SIGNAL", "Unit + smoke tests", "Unit + smoke tests"]],
            "Mochi Mochi": [["TIPO", "TYPE", "Web de negocio", "Business web"], ["AÑO", "YEAR", "2026", "2026"], ["VISIBILIDAD", "VISIBILITY", "Público", "Public"], ["SEÑAL", "SIGNAL", "Static contract CI", "Static contract CI"]],
            "UCAMP Projects": [["TIPO", "TYPE", "Repositorio de aprendizaje", "Learning repository"], ["AÑO", "YEAR", "2026", "2026"], ["VISIBILIDAD", "VISIBILITY", "Público", "Public"], ["SEÑAL", "SIGNAL", "Python CI", "Python CI"]]
        };

        document.querySelectorAll(".project-row").forEach((row) => {
            const title = row.querySelector("h3")?.textContent?.trim();
            const copy = row.querySelector(".project-copy");
            const facts = title ? projectFacts[title] : null;
            if (!copy || !facts || copy.querySelector(".project-facts")) return;

            const markup = facts.map(([labelEs, labelEn, valueEs, valueEn]) => `
                <div class="project-fact"><dt data-es="${labelEs}" data-en="${labelEn}">${labelEs}</dt><dd data-es="${valueEs}" data-en="${valueEn}">${valueEs}</dd></div>
            `).join("");
            const factsList = document.createElement("dl");
            factsList.className = "project-facts";
            factsList.innerHTML = markup;
            copy.appendChild(factsList);
        });
    }

    function addCapabilityStories() {
        const stories = {
            DEV: { es: "Construyo aplicaciones, herramientas internas y experiencias web con énfasis en claridad y mantenibilidad.", en: "I build applications, internal tools, and web experiences with an emphasis on clarity and maintainability." },
            SYS: { es: "Administro y documento servicios Linux, virtualización, almacenamiento y acceso remoto dentro de mi homelab.", en: "I operate and document Linux services, virtualization, storage, and remote access in my homelab." },
            AUT: { es: "Convierto tareas repetitivas en flujos controlables, verificables e idempotentes cuando aplica.", en: "I turn repetitive work into controllable, verifiable, and when appropriate idempotent workflows." },
            SEC: { es: "Aplico validación, integridad, CI, backups, rollback y límites de confianza a software e infraestructura.", en: "I apply validation, integrity, CI, backups, rollback, and trust boundaries to software and infrastructure." }
        };
        document.querySelectorAll("#stack .capability-card").forEach((card) => {
            const code = card.querySelector(".capability-code")?.textContent?.trim();
            const story = code ? stories[code] : null;
            if (!story || card.querySelector(".capability-story")) return;
            const paragraph = document.createElement("p");
            paragraph.className = "capability-story";
            paragraph.dataset.es = story.es;
            paragraph.dataset.en = story.en;
            paragraph.textContent = story.es;
            card.appendChild(paragraph);
        });
    }

    injectStorytellingSections();
    addProjectMetadata();
    addCapabilityStories();

    const languageScreen = document.getElementById("languageScreen");
    const portfolio = document.getElementById("portfolio");
    const languageButtons = document.querySelectorAll(".language-btn");
    const changeLanguageBtn = document.getElementById("changeLanguageBtn");
    const downloadCvBtn = document.getElementById("downloadCvBtn");
    const currentYear = document.getElementById("currentYear");
    const cursorGlow = document.getElementById("cursorGlow");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
    const revealElements = document.querySelectorAll(".reveal");
    const observedSections = document.querySelectorAll("section[id]");
    let currentLanguage = "es";

    if (currentYear) currentYear.textContent = new Date().getFullYear();

    function updateCvDownload(language) {
        if (!downloadCvBtn) return;
        if (language === "en") {
            downloadCvBtn.href = "assets/PDFs/cv-english.pdf";
            downloadCvBtn.download = "Angel-Alpizar-CV-English.pdf";
        } else {
            downloadCvBtn.href = "assets/PDFs/cv-espanol.pdf";
            downloadCvBtn.download = "Angel-Alpizar-CV-Espanol.pdf";
        }
    }

    function updateMetadata(language) {
        const description = document.querySelector('meta[name="description"]');
        if (language === "en") {
            document.title = "Angel Alfredo | Systems Portfolio";
            if (description) description.content = "Angel Alfredo Alpizar portfolio: Python, automation, infrastructure, Linux, QA, and cybersecurity.";
        } else {
            document.title = "Angel Alfredo | Portfolio de Sistemas";
            if (description) description.content = "Portfolio de Angel Alfredo Alpizar: Python, automatización, infraestructura, Linux, QA y ciberseguridad.";
        }
    }

    function translatePage(language) {
        currentLanguage = language;
        document.querySelectorAll("[data-es][data-en]").forEach((element) => {
            const text = element.getAttribute(`data-${language}`);
            if (text !== null) element.textContent = text;
        });
        updateCvDownload(language);
        updateMetadata(language);
        document.documentElement.lang = language;
        localStorage.setItem("aalfredo-language", language);
    }

    function openPortfolio(language) {
        translatePage(language);
        languageScreen?.classList.add("hidden");
        portfolio?.classList.remove("hidden");
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        requestAnimationFrame(() => revealElements.forEach((element) => revealObserver.observe(element)));
    }

    languageButtons.forEach((button) => button.addEventListener("click", () => {
        if (button.dataset.language) openPortfolio(button.dataset.language);
    }));

    changeLanguageBtn?.addEventListener("click", () => translatePage(currentLanguage === "es" ? "en" : "es"));

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });
        navLinks.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach((anchor) => anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

    observedSections.forEach((section) => sectionObserver.observe(section));

    if (cursorGlow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        window.addEventListener("pointermove", (event) => {
            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;
            cursorGlow.style.opacity = "1";
        });
        document.documentElement.addEventListener("mouseleave", () => { cursorGlow.style.opacity = "0"; });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks && menuToggle) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    const storedLanguage = localStorage.getItem("aalfredo-language");
    if (storedLanguage === "es" || storedLanguage === "en") currentLanguage = storedLanguage;
});
