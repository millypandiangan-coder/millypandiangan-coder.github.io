
/* =========================================
   MILLY PORTFOLIO
   PROJECT DETAIL — DASHBOARD CAROUSEL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".dashboard-carousel");

    if (!carousel) return;

    const track = carousel.querySelector(".dashboard-track");
    const slides = Array.from(
        carousel.querySelectorAll(".dashboard-slide")
    );
    const previousButton = carousel.querySelector(
        '[data-carousel="previous"]'
    );
    const nextButton = carousel.querySelector(
        '[data-carousel="next"]'
    );
    const counter = carousel.querySelector(".carousel-counter");

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        if (counter) {
            counter.textContent =
                `${currentIndex + 1} / ${slides.length}`;
        }

        slides.forEach((slide, index) => {
            slide.setAttribute(
                "aria-hidden",
                String(index !== currentIndex)
            );
        });
    }

    if (previousButton) {
        previousButton.addEventListener("click", () => {
            currentIndex =
                (currentIndex - 1 + slides.length) % slides.length;

            updateCarousel();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;

            updateCarousel();
        });
    }

    updateCarousel();
});
