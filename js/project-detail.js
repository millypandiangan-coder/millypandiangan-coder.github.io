/* =========================================
   MILLY PORTFOLIO
   PROJECT DETAIL — DASHBOARD CAROUSEL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("dashboardImage");
    const title = document.getElementById("dashboardTitle");
    const description = document.getElementById("dashboardDescription");
    const counter = document.getElementById("dashboardCounter");
    const previousButton = document.getElementById("previousDashboard");
    const nextButton = document.getElementById("nextDashboard");
    const dotsContainer = document.getElementById("dashboardDots");

    if (!image || !title || !description || !counter) return;

    const dashboards = [
        {
            image: "assets/images/executive-overview.png",
            alt: "Executive Overview dashboard",
            title: "Executive Overview",
            description:
                "A high-level view of customer growth, recurring revenue, churn, and network quality."
        },
        {
            image: "assets/images/customer-revenue.png",
            alt: "Customer and Revenue dashboard",
            title: "Customer & Revenue",
            description:
                "Explores customer distribution, package preferences, contract types, and revenue contribution."
        },
        {
            image: "assets/images/network-quality.png",
            alt: "Network and Quality dashboard",
            title: "Network & Quality",
            description:
                "Highlights network exposure by district, network-related complaints, downtime, and latency."
        },
        {
            image: "assets/images/retention-churn.png",
            alt: "Retention and Churn dashboard",
            title: "Retention & Churn",
            description:
                "Examines churn trends, reported churn reasons, payment behavior, and customer risk patterns."
        }
    ];

    const dots = dotsContainer
        ? Array.from(dotsContainer.querySelectorAll("button"))
        : [];

    let currentIndex = 0;

    function showDashboard(index) {
        currentIndex = (index + dashboards.length) % dashboards.length;

        const dashboard = dashboards[currentIndex];

        image.src = dashboard.image;
        image.alt = dashboard.alt;
        title.textContent = dashboard.title;
        description.textContent = dashboard.description;
        counter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(dashboards.length).padStart(2, "0")}`;

        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === currentIndex;

            dot.classList.toggle("active", isActive);
            dot.setAttribute("aria-current", isActive ? "true" : "false");
        });
    }

    previousButton?.addEventListener("click", () => {
        showDashboard(currentIndex - 1);
    });

    nextButton?.addEventListener("click", () => {
        showDashboard(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showDashboard(index);
        });
    });

    showDashboard(0);
});

/* =========================================
   PROJECT 2 — CHURN PREDICTION SLIDE CAROUSEL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const slideImage = document.getElementById("project-slide");
    const slideCounter = document.getElementById("slide-counter");
    const previousButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");

    // Exit safely when this is not the Project 2 detail page.
    if (!slideImage || !slideCounter || !previousButton || !nextButton) {
        return;
    }

    const totalSlides = 19;
    let currentSlide = 1;

    function showSlide(slideNumber) {
        // Wrap around: slide 1 <- slide 19 -> slide 1
        currentSlide =
            ((slideNumber - 1 + totalSlides) % totalSlides) + 1;

        const slidePath = String(currentSlide).padStart(2, "0");

        slideImage.src =
            `assets/images/churn-slides/churn-slide-${slidePath}.png`;

        slideImage.alt =
            `Residential broadband churn prediction presentation, slide ${currentSlide}`;

        slideCounter.textContent = `${currentSlide} / ${totalSlides}`;
    }

    previousButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    // Show the first slide when the page opens.
    showSlide(1);
});
