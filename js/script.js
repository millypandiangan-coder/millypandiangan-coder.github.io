
/* =========================================
   MILLY PORTFOLIO
   INTERACTION & ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. DARK / LIGHT MODE
    ========================================= */

    const themeToggle = document.querySelector(".theme-toggle");
    const themeIcon = document.querySelector(".theme-icon");

    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("theme");
    } catch (error) {
        // Continue using the default light theme.
    }

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateThemeIcon() {
        if (!themeIcon) return;

        themeIcon.textContent =
            document.body.classList.contains("dark-mode")
                ? "☀"
                : "☾";
    }

    updateThemeIcon();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            try {
                localStorage.setItem(
                    "theme",
                    isDark ? "dark" : "light"
                );
            } catch (error) {
                // Theme still works for the current page.
            }

            updateThemeIcon();
        });
    }


    /* =========================================
       2. MOBILE NAVIGATION
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
    }


    /* =========================================
       3. SCROLL REVEAL
       Reveal content when it enters the viewport.
       Repeat the animation when revisiting a section.
    ========================================= */

    const revealSelectors = [
        "main section:not(#home):not(.hero) .section-heading",
        "main section:not(#home):not(.hero) .about-content",
        "main section:not(#home):not(.hero) .education-card",
        "main section:not(#home):not(.hero) .experience-item",
        "main section:not(#home):not(.hero) .project-card",
        "main section:not(#home):not(.hero) .skill-item",
        "main section:not(#home):not(.hero) .technical-skill",
        "main section:not(#home):not(.hero) .certification-card",
        "main section:not(#home):not(.hero) .contact-content"
    ];

    const revealElements = document.querySelectorAll(
        revealSelectors.join(", ")
    );

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        revealElements.length > 0 &&
        "IntersectionObserver" in window &&
        !prefersReducedMotion
    ) {
        revealElements.forEach((element, index) => {
            element.classList.add("reveal");

            // Small stagger between elements.
            element.style.setProperty(
                "--reveal-delay",
                `${(index % 4) * 100}ms`
            );
        });

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    }

});
