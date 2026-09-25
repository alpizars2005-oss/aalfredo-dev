document.addEventListener("DOMContentLoaded", () => {
    const changeLanguageBtn = document.getElementById("changeLanguageBtn");
    const downloadCvBtn = document.getElementById("downloadCvBtn");
    const currentYear = document.getElementById("currentYear");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
    const revealElements = document.querySelectorAll(".reveal");
    const observedSections = document.querySelectorAll("section[id]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const storedLanguage = localStorage.getItem("aalfredo-language");
    const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    let currentLanguage = storedLanguage === "es" || storedLanguage === "en" ? storedLanguage : browserLanguage;

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
                description.content = "Angel Alfredo Alpizar portfolio: Python, automation, infrastructure, Linux, QA, and cybersecurity.";
            }
        } else {
            document.title = "Angel Alfredo | Portfolio de Sistemas";
            if (description) {
                description.content = "Portfolio de Angel Alfredo Alpizar: Python, automatización, infraestructura, Linux, QA y ciberseguridad.";
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
        localStorage.setItem("aalfredo-language", language);
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
    }

    if (reducedMotion || !("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("visible"));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

        revealElements.forEach((element) => revealObserver.observe(element));
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
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});
