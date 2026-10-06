document.addEventListener("DOMContentLoaded", () => {
    // ==============================
    // SCROLL REVEAL
    // ==============================

    const revealElements = document.querySelectorAll(
        "section, .project-card, .experience-item, .skill-card, .hero-card"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

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
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // ==============================
    // ACTIVE NAVIGATION
    // ==============================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const updateActiveNav = () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    // ==============================
    // NAVBAR SCROLL EFFECT
    // ==============================

    const navbar = document.querySelector(".navbar");

    const handleNavbarScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();
});
