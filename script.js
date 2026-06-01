document.addEventListener("DOMContentLoaded", () => {
    const languageScreen = document.getElementById("languageScreen");
    const portfolio = document.getElementById("portfolio");
    const languageButtons = document.querySelectorAll(".language-btn");
    const changeLanguageBtn = document.getElementById("changeLanguageBtn");
    const translatableElements = document.querySelectorAll("[data-es][data-en]");

    const changeText = (language) => {
        translatableElements.forEach((element) => {
            const translatedText = element.dataset[language];

            if (translatedText) {
                element.textContent = translatedText;
            }
        });

        document.documentElement.lang = language;
    };

    const showPortfolio = (language) => {
        changeText(language);

        languageScreen.classList.add("fade-out");

        setTimeout(() => {
            languageScreen.classList.add("hidden");
            languageScreen.classList.remove("fade-out");

            portfolio.classList.remove("hidden");
            window.scrollTo(0, 0);
        }, 250);
    };

    const showLanguageScreen = () => {
        portfolio.classList.add("hidden");
        languageScreen.classList.remove("hidden");

        window.scrollTo(0, 0);
    };

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedLanguage = button.dataset.language;

            if (!selectedLanguage) {
                return;
            }

            showPortfolio(selectedLanguage);
        });
    });

    if (changeLanguageBtn) {
        changeLanguageBtn.addEventListener("click", showLanguageScreen);
    }
});