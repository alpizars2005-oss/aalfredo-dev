document.addEventListener("DOMContentLoaded", () => {
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
                description.content = "Angel Alfredo Alpizar portfolio: systems, development, automation, Linux, and cybersecurity.";
            }
        } else {
            document.title = "Angel Alfredo | Portfolio de Sistemas";
            if (description) {
                description.content = "Portfolio de Angel Alfredo Alpizar: sistemas, desarrollo, automatización, Linux y ciberseguridad.";
            }
        }
    }

    function translatePage(language) {
        currentLanguage = language;

        translatableElements.forEach((element) => {
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
        languageScreen.classList.add("hidden");
        portfolio.classList.remove("hidden");
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });

        requestAnimationFrame(() => {
            revealElements.forEach((element) => revealObserver.observe(element));
        });
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
