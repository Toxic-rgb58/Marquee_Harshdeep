/* ==========================================================
   NOVA STUDIO
   SCROLL CONTROLLER
========================================================== */

/* ==========================================
   LENIS SMOOTH SCROLL
========================================== */

function initLenis() {

    if (typeof Lenis === "undefined") {
        console.warn("Lenis not loaded.");
        return;
    }

    const lenis = new Lenis({

        duration: 1.2,

        smoothWheel: true,

        wheelMultiplier: 1,

        touchMultiplier: 2,

        infinite: false

    });

    function raf(time) {

        lenis.raf(time);

        requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger

    if (typeof ScrollTrigger !== "undefined") {

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {

            lenis.raf(time * 1000);

        });

        gsap.ticker.lagSmoothing(0);

    }

}

/* ==========================================
   SCROLL PROGRESS VALUE
========================================== */

function initScrollPercentage() {

    const progress = document.createElement("div");

    progress.className = "scroll-percentage";

    progress.style.position = "fixed";

    progress.style.bottom = "30px";

    progress.style.left = "30px";

    progress.style.fontSize = "14px";

    progress.style.fontWeight = "600";

    progress.style.color = "#fff";

    progress.style.zIndex = "9999";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const max =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const value =
            Math.round((window.scrollY / max) * 100);

        progress.textContent = value + "%";

    });

}

/* ==========================================
   SECTION DETECTION
========================================== */

function initSectionWatcher() {

    const sections =
        document.querySelectorAll("section");

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    document.body.dataset.section =
                        entry.target.className;

                }

            });

        },

        {

            threshold: 0.5

        }

    );

    sections.forEach((section) => {

        observer.observe(section);

    });

}

/* ==========================================
   HEADER SHADOW
========================================== */

function initHeaderShadow() {

    const header =
        document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}

/* ==========================================
   REVEAL IMAGES
========================================== */

function initImageReveal() {

    const images =
        document.querySelectorAll(".image-reveal");

    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        });

    images.forEach((image) => {

        observer.observe(image);

    });

}

/* ==========================================
   SCROLL TO TOP AFTER REFRESH
========================================== */

function resetScroll() {

    window.onbeforeunload = () => {

        window.scrollTo(0, 0);

    };

}

/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLenis();

    initScrollPercentage();

    initSectionWatcher();

    initHeaderShadow();

    initImageReveal();

    resetScroll();

});

/* ==========================================
   END
========================================== */

console.log("Scroll controller initialized.");