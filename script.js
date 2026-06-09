document.addEventListener("DOMContentLoaded", () => {
    const languageScreen = document.getElementById("languageScreen");
    const portfolio = document.getElementById("portfolio");
    const languageButtons = document.querySelectorAll(".language-btn");
    const changeLanguageBtn = document.getElementById("changeLanguageBtn");
    const translatableElements = document.querySelectorAll("[data-es][data-en]");
    const downloadCvBtn = document.getElementById("downloadCvBtn");

    function updateCvDownload(language) {
        if (!downloadCvBtn) return;

        if (language === "en") {
            downloadCvBtn.href = "assets/PDFs/cv-english.pdf";
            downloadCvBtn.download = "Angel-Alpizar-CV-English.pdf";
            downloadCvBtn.textContent = "Download CV";
        } else {
            downloadCvBtn.href = "assets/PDFs/cv-espanol.pdf";
            downloadCvBtn.download = "Angel-Alpizar-CV-Espanol.pdf";
            downloadCvBtn.textContent = "Descargar CV";
        }
    }

    function translatePage(language) {
        translatableElements.forEach((element) => {
            const text = element.getAttribute(`data-${language}`);

            if (text) {
                element.textContent = text;
            }
        });

        updateCvDownload(language);
        document.documentElement.lang = language;
    }

    function openPortfolio(language) {
        translatePage(language);

        languageScreen.classList.add("hidden");
        portfolio.classList.remove("hidden");

        window.scrollTo(0, 0);
    }

    function openLanguageScreen() {
        portfolio.classList.add("hidden");
        languageScreen.classList.remove("hidden");

        window.scrollTo(0, 0);
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedLanguage = button.getAttribute("data-language");

            if (selectedLanguage) {
                openPortfolio(selectedLanguage);
            }
        });
    });

    if (changeLanguageBtn) {
        changeLanguageBtn.addEventListener("click", openLanguageScreen);
    }
});