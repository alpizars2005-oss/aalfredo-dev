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
                        <strong><span>05</span> / BUILD LOG</strong>
                    </article>
                    <article class="story-metric">
                        <span class="story-metric-label" data-es="DOMINIOS DE CAPACIDAD" data-en="CAPABILITY DOMAINS">DOMINIOS DE CAPACIDAD</span>
                        <strong><span>04</span> / DEV·SYS·AUT·SEC</strong>
                    </article>
                    <article class="story-metric">
                        <span class="story-metric-label" data-es="INTERFAZ" data-en="INTERFACE">INTERFAZ</span>
                        <strong><span>ES</span> / EN</strong>
                    </article>
                </div>

                <section class="featured-build section-frame">
                    <div class="featured-heading reveal">
                        <div>
                            <p class="featured-kicker">00.A / FEATURED BUILD</p>
                            <h2 data-es="Ingeniería que se entiende de un vistazo." data-en="Engineering you can scan at a glance.">Ingeniería que se entiende de un vistazo.</h2>
                        </div>
                        <p data-es="Una visualización original del sistema muestra cómo conecto editor, calibración, telemetría y actualizaciones verificadas dentro de Strategy Lab. No es una captura del producto: es un mapa conceptual de las piezas que construí y pruebo."
                           data-en="An original system visualization shows how the editor, calibration, telemetry, and verified updates connect inside Strategy Lab. It is not a product screenshot; it is a conceptual map of the pieces I build and test.">
                            Una visualización original del sistema muestra cómo conecto editor, calibración, telemetría y actualizaciones verificadas dentro de Strategy Lab. No es una captura del producto: es un mapa conceptual de las piezas que construí y pruebo.
                        </p>
                    </div>

                    <div class="featured-layout">
                        <div class="featured-window reveal" aria-label="Conceptual Strategy Lab system visualization">
                            <div class="featured-window-bar">
                                <span>STRATEGY_LAB // VISUAL_EDITOR.MAP</span>
                                <span class="featured-window-status">LAB 0.4.13</span>
                            </div>
                            <div class="strategy-visual">
                                <div class="strategy-route" aria-hidden="true"></div>
                                <div class="strategy-crosshair" aria-hidden="true"></div>
                                <div class="strategy-node node-1" data-label="placement 01">T1</div>
                                <div class="strategy-node node-2" data-label="placement 02">T2</div>
                                <div class="strategy-node node-3" data-label="placement 03">T3</div>
                                <div class="strategy-node node-4" data-label="placement 04">T4</div>
                                <div class="strategy-node node-5" data-label="evidence">EV</div>
                                <div class="strategy-console" aria-hidden="true">
                                    <div><span>EDITOR</span><strong>READY</strong></div>
                                    <div><span>CALIBRATION</span><strong>EVIDENCE</strong></div>
                                    <div><span>UPDATER</span><strong>SHA-256</strong></div>
                                    <div><span>RUNTIME</span><strong>ISOLATED</strong></div>
                                </div>
                                <span class="visual-disclaimer" data-es="VISUALIZACIÓN DEL SISTEMA · NO SCREENSHOT" data-en="SYSTEM VISUALIZATION · NOT A SCREENSHOT">VISUALIZACIÓN DEL SISTEMA · NO SCREENSHOT</span>
                            </div>
                        </div>

                        <article class="featured-copy reveal">
                            <p class="featured-kicker">CURRENT FEATURE / EXPERIMENTAL LAB</p>
                            <h3>Ultimate Macro Strategy Lab</h3>
                            <p data-es="Un laboratorio experimental sobre la base oficial de Ultimate Macro para desarrollar funciones nuevas sin mezclar prototipos con el comportamiento upstream. El trabajo actual cubre editor visual, calibración basada en evidencia, telemetría y un canal de actualización verificado."
                               data-en="An experimental lab built on the official Ultimate Macro baseline so new functionality can evolve without mixing prototypes into upstream behavior. Current work spans a visual editor, evidence-driven calibration, telemetry, and a verified update channel.">
                                Un laboratorio experimental sobre la base oficial de Ultimate Macro para desarrollar funciones nuevas sin mezclar prototipos con el comportamiento upstream. El trabajo actual cubre editor visual, calibración basada en evidencia, telemetría y un canal de actualización verificado.
                            </p>
                            <dl class="featured-facts">
                                <div class="featured-fact">
                                    <dt class="featured-fact-label">BASE</dt>
                                    <dd class="featured-fact-value">Ultimate Macro 1.3.3</dd>
                                </div>
                                <div class="featured-fact">
                                    <dt class="featured-fact-label">LAB</dt>
                                    <dd class="featured-fact-value">0.4.13</dd>
                                </div>
                                <div class="featured-fact">
                                    <dt class="featured-fact-label">FOCUS</dt>
                                    <dd class="featured-fact-value">Editor / Calibration / Telemetry</dd>
                                </div>
                                <div class="featured-fact">
                                    <dt class="featured-fact-label">SAFETY</dt>
                                    <dd class="featured-fact-value">Contract CI / SHA-256</dd>
                                </div>
                            </dl>
                            <div class="featured-actions">
                                <a class="action-link primary-action" href="https://github.com/alpizars2005-oss/ultimate-macro-strategy-lab" target="_blank" rel="noreferrer">
                                    <span data-es="Abrir Strategy Lab" data-en="Open Strategy Lab">Abrir Strategy Lab</span><span>↗</span>
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
                            <div class="story-panel-header">
                                <span>aalfredo@portfolio:~$ cat developer.py</span>
                                <span>VALID</span>
                            </div>
                            <pre class="developer-code"><span class="code-key">developer</span> = {
  <span class="code-string">"name"</span>: <span class="code-string">"Angel Alfredo"</span>,
  <span class="code-string">"discipline"</span>: <span class="code-string">"Systems Engineering"</span>,
  <span class="code-string">"focus"</span>: [
    <span class="code-string">"Software"</span>,
    <span class="code-string">"Automation"</span>,
    <span class="code-string">"Cybersecurity"</span>
  ],
  <span class="code-string">"languages"</span>: [<span class="code-string">"ES"</span>, <span class="code-string">"EN"</span>],
  <span class="code-string">"status"</span>: <span class="code-string">"building"</span>,
  <span class="code-string">"always_learning"</span>: <span class="code-bool">True</span>
}</pre>
                        </article>

                        <article class="timeline-panel reveal">
                            <div class="story-panel-header">
                                <span>01.B / EXPERIENCE LOG</span>
                                <span>SYNCED</span>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-intro">
                                    <p class="story-panel-kicker" data-es="TRAYECTORIA ACTUAL" data-en="CURRENT TRAJECTORY">TRAYECTORIA ACTUAL</p>
                                    <h3 data-es="Aprender construyendo." data-en="Learning by building.">Aprender construyendo.</h3>
                                </div>
                                <div class="timeline-entry">
                                    <p class="timeline-period">2026 — PRESENT</p>
                                    <div>
                                        <h4 data-es="Ingeniería en Sistemas" data-en="Systems Engineering">Ingeniería en Sistemas</h4>
                                        <p data-es="Formación formal en sistemas mientras convierto conceptos de software, datos y operación en proyectos verificables."
                                           data-en="Formal systems training while turning software, data, and operations concepts into verifiable projects.">
                                            Formación formal en sistemas mientras convierto conceptos de software, datos y operación en proyectos verificables.
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline-entry">
                                    <p class="timeline-period">2026 — CURRENT</p>
                                    <div>
                                        <h4 data-es="Software y automatización" data-en="Software & automation">Software y automatización</h4>
                                        <p data-es="Construcción de herramientas para Windows, flujos automatizados y laboratorios experimentales con pruebas y documentación como parte del producto."
                                           data-en="Building Windows tools, automated workflows, and experimental labs with testing and documentation treated as part of the product.">
                                            Construcción de herramientas para Windows, flujos automatizados y laboratorios experimentales con pruebas y documentación como parte del producto.
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline-entry">
                                    <p class="timeline-period">CURRENT FOCUS</p>
                                    <div>
                                        <h4 data-es="Ciberseguridad e IT" data-en="Cybersecurity & IT">Ciberseguridad e IT</h4>
                                        <p data-es="Aplicando fundamentos de seguridad a validación de entradas, integridad, actualizaciones, automatización y endurecimiento de repositorios."
                                           data-en="Applying security fundamentals to input validation, integrity, updates, automation, and repository hardening.">
                                            Aplicando fundamentos de seguridad a validación de entradas, integridad, actualizaciones, automatización y endurecimiento de repositorios.
                                        </p>
                                    </div>
                                </div>
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
            "Alpizers": [
                ["TIPO", "TYPE", "Producto", "Product"],
                ["AÑO", "YEAR", "2026", "2026"],
                ["VISIBILIDAD", "VISIBILITY", "Releases públicas / código privado", "Public releases / private source"],
                ["SEÑAL", "SIGNAL", "CI + SHA-256", "CI + SHA-256"]
            ],
            "Ultimate Macro Strategy Lab": [
                ["TIPO", "TYPE", "Laboratorio experimental", "Experimental lab"],
                ["AÑO", "YEAR", "2026", "2026"],
                ["VISIBILIDAD", "VISIBILITY", "Público", "Public"],
                ["SEÑAL", "SIGNAL", "Contract CI", "Contract CI"]
            ],
            "Job Search Assistant": [
                ["TIPO", "TYPE", "Herramienta", "Tool"],
                ["AÑO", "YEAR", "2026", "2026"],
                ["VISIBILIDAD", "VISIBILITY", "Público", "Public"],
                ["SEÑAL", "SIGNAL", "Unit + smoke tests", "Unit + smoke tests"]
            ],
            "Mochi Mochi": [
                ["TIPO", "TYPE", "Web de negocio", "Business web"],
                ["AÑO", "YEAR", "2026", "2026"],
                ["VISIBILIDAD", "VISIBILITY", "Público", "Public"],
                ["SEÑAL", "SIGNAL", "Static contract CI", "Static contract CI"]
            ],
            "UCAMP Projects": [
                ["TIPO", "TYPE", "Repositorio de aprendizaje", "Learning repository"],
                ["AÑO", "YEAR", "2026", "2026"],
                ["VISIBILIDAD", "VISIBILITY", "Público", "Public"],
                ["SEÑAL", "SIGNAL", "Python CI", "Python CI"]
            ]
        };

        document.querySelectorAll(".project-row").forEach((row) => {
            const title = row.querySelector("h3")?.textContent?.trim();
            const copy = row.querySelector(".project-copy");
            const facts = title ? projectFacts[title] : null;
            if (!copy || !facts || copy.querySelector(".project-facts")) return;

            const markup = facts.map(([labelEs, labelEn, valueEs, valueEn]) => `
                <div class="project-fact">
                    <dt data-es="${labelEs}" data-en="${labelEn}">${labelEs}</dt>
                    <dd data-es="${valueEs}" data-en="${valueEn}">${valueEs}</dd>
                </div>
            `).join("");

            const factsList = document.createElement("dl");
            factsList.className = "project-facts";
            factsList.innerHTML = markup;
            copy.appendChild(factsList);
        });
    }

    function addCapabilityStories() {
        const stories = {
            DEV: {
                es: "Construyo aplicaciones, herramientas internas y experiencias web con énfasis en claridad y mantenibilidad.",
                en: "I build applications, internal tools, and web experiences with an emphasis on clarity and maintainability."
            },
            SYS: {
                es: "Trabajo debajo de la interfaz: sistemas operativos, CLI, datos locales y comportamiento del runtime.",
                en: "I work below the interface: operating systems, CLI workflows, local data, and runtime behavior."
            },
            AUT: {
                es: "Convierto tareas repetitivas en flujos controlables, observables y fáciles de volver a ejecutar.",
                en: "I turn repetitive work into controllable, observable workflows that are easy to run again."
            },
            SEC: {
                es: "Aplico seguridad práctica a validación, integridad, actualización de software y límites de confianza.",
                en: "I apply practical security to validation, integrity, software updates, and trust boundaries."
            }
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

    function addDiscordContact() {
        const contactActions = document.querySelector(".contact-actions");
        if (!contactActions || document.getElementById("copyDiscordBtn")) return;

        contactActions.insertAdjacentHTML(
            "beforeend",
            `
            <button class="contact-discord" id="copyDiscordBtn" type="button" aria-label="Copy Discord username pizzaroles24">
                <span>Discord</span>
                <span class="contact-discord-user">pizzaroles24</span>
            </button>
            `
        );

        contactActions.insertAdjacentHTML(
            "afterend",
            `<p class="copy-feedback" id="discordCopyStatus" aria-live="polite"></p>`
        );
    }

    injectStorytellingSections();
    addProjectMetadata();
    addCapabilityStories();
    addDiscordContact();

    const languageScreen = document.getElementById("languageScreen");
    const portfolio = document.getElementById("portfolio");
    const languageButtons = document.querySelectorAll(".language-btn");
    const changeLanguageBtn = document.getElementById("changeLanguageBtn");
    const translatableElements = document.querySelectorAll("[data-es][data-en]");
    const downloadCvBtn = document.getElementById("downloadCvBtn");
    const currentYear = document.getElementById("currentYear");
    const cursorGlow = document.getElementById("cursorGlow");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
    const revealElements = document.querySelectorAll(".reveal");
    const observedSections = document.querySelectorAll("section[id]");
    const copyDiscordBtn = document.getElementById("copyDiscordBtn");
    const discordCopyStatus = document.getElementById("discordCopyStatus");

    let currentLanguage = "es";

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

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
            if (description) {
                description.content = "Angel Alfredo Alpizar portfolio: Python, Data/AI, QA, automation, systems, Linux, and cybersecurity.";
            }
        } else {
            document.title = "Angel Alfredo | Portfolio de Sistemas";
            if (description) {
                description.content = "Portfolio de Angel Alfredo Alpizar: Python, Data/AI, QA, automatización, sistemas, Linux y ciberseguridad.";
            }
        }
    }

    function translatePage(language) {
        currentLanguage = language;

        translatableElements.forEach((element) => {
            const text = element.getAttribute(`data-${language}`);
            if (text !== null) element.textContent = text;
        });

        if (discordCopyStatus) {
            discordCopyStatus.textContent = "";
        }

        updateCvDownload(language);
        updateMetadata(language);
        document.documentElement.lang = language;
        localStorage.setItem("aalfredo-language", language);
    }

    function openPortfolio(language) {
        translatePage(language);
        languageScreen.classList.add("hidden");
        portfolio.classList.remove("hidden");
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });

        requestAnimationFrame(() => {
            revealElements.forEach((element) => revealObserver.observe(element));
        });
    }

    async function copyDiscordUsername() {
        const username = "pizzaroles24";
        let copied = false;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(username);
                copied = true;
            } else {
                const fallback = document.createElement("textarea");
                fallback.value = username;
                fallback.setAttribute("readonly", "");
                fallback.style.position = "fixed";
                fallback.style.opacity = "0";
                document.body.appendChild(fallback);
                fallback.select();
                copied = document.execCommand("copy");
                fallback.remove();
            }
        } catch {
            copied = false;
        }

        if (discordCopyStatus) {
            discordCopyStatus.textContent = copied
                ? (currentLanguage === "en" ? "Discord username copied: pizzaroles24" : "Usuario de Discord copiado: pizzaroles24")
                : (currentLanguage === "en" ? "Could not copy automatically. Username: pizzaroles24" : "No se pudo copiar automáticamente. Usuario: pizzaroles24");
        }

        if (copyDiscordBtn) {
            copyDiscordBtn.classList.toggle("copied", copied);
            window.setTimeout(() => copyDiscordBtn.classList.remove("copied"), 1800);
        }
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedLanguage = button.dataset.language;
            if (selectedLanguage) openPortfolio(selectedLanguage);
        });
    });

    if (changeLanguageBtn) {
        changeLanguageBtn.addEventListener("click", () => {
            translatePage(currentLanguage === "es" ? "en" : "es");
        });
    }

    if (copyDiscordBtn) {
        copyDiscordBtn.addEventListener("click", copyDiscordUsername);
    }

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

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -7% 0px"
        }
    );

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                navAnchors.forEach((anchor) => {
                    anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0
        }
    );

    observedSections.forEach((section) => sectionObserver.observe(section));

    if (cursorGlow && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        window.addEventListener("pointermove", (event) => {
            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;
            cursorGlow.style.opacity = "1";
        });

        document.documentElement.addEventListener("mouseleave", () => {
            cursorGlow.style.opacity = "0";
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks && menuToggle) {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    const storedLanguage = localStorage.getItem("aalfredo-language");
    if (storedLanguage === "es" || storedLanguage === "en") {
        currentLanguage = storedLanguage;
    }
});