document.addEventListener("DOMContentLoaded", () => {
    const changeLanguageBtn = document.getElementById("changeLanguageBtn");
    const downloadCvBtn = document.getElementById("downloadCvBtn");
    const currentYear = document.getElementById("currentYear");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
    const observedSections = document.querySelectorAll("section[id]");

    // A browser can deny storage without disabling the rest of the portfolio.
    let storedLanguage = null;
    try {
        storedLanguage = window.localStorage.getItem("aalfredo-language");
    } catch {
        // Use the browser language for this visit; do not require persistence.
    }
    const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    let currentLanguage = storedLanguage === "es" || storedLanguage === "en" ? storedLanguage : browserLanguage;

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    function updateCvDownload(language) {
        if (!downloadCvBtn) return;

        if (language === "en") {
            downloadCvBtn.href = "assets/PDFs/cv-english.pdf";
            downloadCvBtn.download = "Angel-Alfredo-CV-English.pdf";
        } else {
            downloadCvBtn.href = "assets/PDFs/cv-espanol.pdf";
            downloadCvBtn.download = "Angel-Alfredo-CV-Espanol.pdf";
        }
    }

    function updateMetadata(language) {
        const description = document.querySelector('meta[name="description"]');

        if (language === "en") {
            document.title = "Angel Alfredo | Systems Portfolio";
            if (description) {
                description.content = "Angel Alfredo portfolio: Python, automation, infrastructure, Linux, QA, and cybersecurity.";
            }
        } else {
            document.title = "Angel Alfredo | Portfolio de Sistemas";
            if (description) {
                description.content = "Portfolio de Angel Alfredo: Python, automatización, infraestructura, Linux, QA y ciberseguridad.";
            }
        }
    }

    function updateLanguageControl(language) {
        if (!changeLanguageBtn) return;

        const nextLanguage = language === "es" ? "en" : "es";
        changeLanguageBtn.textContent = nextLanguage.toUpperCase();
        changeLanguageBtn.setAttribute(
            "aria-label",
            nextLanguage === "en" ? "Switch to English" : "Cambiar a español"
        );
    }

    function translatePage(language) {
        currentLanguage = language;

        document.querySelectorAll("[data-es][data-en]").forEach((element) => {
            const text = element.getAttribute("data-" + language);
            if (text !== null) {
                element.textContent = text;
            }
        });

        updateCvDownload(language);
        updateMetadata(language);
        updateLanguageControl(language);
        document.documentElement.lang = language;
        try {
            window.localStorage.setItem("aalfredo-language", language);
        } catch {
            // The language still changes when storage is unavailable or full.
        }
    }

    translatePage(currentLanguage);

    changeLanguageBtn?.addEventListener("click", () => {
        translatePage(currentLanguage === "es" ? "en" : "es");
    });

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
        // Hide the small-screen menu only after its controls are connected.
        menuToggle.closest("header")?.classList.add("nav-ready");
    }

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                navAnchors.forEach((anchor) => {
                    anchor.classList.toggle(
                        "active",
                        anchor.getAttribute("href") === "#" + entry.target.id
                    );
                });
            });
        }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

        observedSections.forEach((section) => sectionObserver.observe(section));
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks && menuToggle) {
            const wasOpen = navLinks.classList.contains("open");
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            if (wasOpen) menuToggle.focus();
        }
    });
});
