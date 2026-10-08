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

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateThemeIcon() {
        if (!themeIcon) return;

        if (document.body.classList.contains("dark-mode")) {
            themeIcon.textContent = "☀";
        } else {
            themeIcon.textContent = "☾";
        }
    }

    updateThemeIcon();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );

            updateThemeIcon();
        });
    }


    /* =========================================
       2. MOBILE NAVIGATION
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );
        });


        /* Close menu after clicking a navigation link */

        const navigationItems =
            navLinks.querySelectorAll("a");

        navigationItems.forEach((link) => {

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
       3. SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (revealElements.length > 0) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    }

});
