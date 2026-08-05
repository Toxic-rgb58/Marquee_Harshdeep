/* ==========================================
   NOVA STUDIO
   MAIN SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initCursor();

    initStickyHeader();

    initRevealAnimations();

    initBackToTop();

    initCounters();

    initFAQ();

});

/* ==========================================
   LOADER
========================================== */

function initLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 1500);

    });

}

/* ==========================================
   CUSTOM CURSOR
========================================== */

function initCursor() {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });

    const hoverElements = document.querySelectorAll(
        "a,button,.service-card,.project-grid article"
    );

    hoverElements.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-grow");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-grow");

        });

    });

}

/* ==========================================
   STICKY HEADER
========================================== */

function initStickyHeader() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(0,0,0,.9)";

            header.style.padding = "18px 50px";

            header.style.backdropFilter = "blur(18px)";

        } else {

            header.style.background = "rgba(0,0,0,.25)";

            header.style.padding = "25px 60px";

        }

    });

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initRevealAnimations() {

    const elements = document.querySelectorAll(

        ".fade-up,.fade-down,.fade-left,.fade-right,.zoom-in,.zoom-out,.rotate-in,.blur-in,.stagger,.mask"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: .15

        }

    );

    elements.forEach((el) => {

        observer.observe(el);

    });

}

/* ==========================================
   BACK TO TOP
========================================== */

function initBackToTop() {

    const button = document.querySelector(".back-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   COUNTER
========================================== */

function initCounters() {

    const counters = document.querySelectorAll(".stat h2");

    if (!counters.length) return;

    const animate = (counter) => {

        const target = parseInt(counter.textContent);

        let current = 0;

        const step = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current + "+";

        }, 20);

    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                animate(entry.target);

                observer.unobserve(entry.target);

            }

        });

    });

    counters.forEach((counter) => observer.observe(counter));

}

/* ==========================================
   FAQ
========================================== */

function initFAQ() {

    const items = document.querySelectorAll(".faq-item");

    items.forEach((item) => {

        const question = item.querySelector(".faq-question");

        question?.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

}
/* ==========================================
   MOBILE MENU
========================================== */

function initMobileMenu() {

    const menuButton = document.querySelector(".menu-btn");

    const mobileNav = document.querySelector(".mobile-nav");

    const overlay = document.querySelector(".mobile-overlay");

    if (!menuButton || !mobileNav || !overlay) return;

    menuButton.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        overlay.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    overlay.addEventListener("click", closeMenu);

    mobileNav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", closeMenu);

    });

    function closeMenu() {

        mobileNav.classList.remove("active");

        overlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function initActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll("nav a");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const top = section.offsetTop - 140;

            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {

        link.addEventListener("click", (e) => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

function initScrollProgress() {

    const progress = document.createElement("div");

    progress.id = "scroll-progress";

    progress.style.position = "fixed";

    progress.style.left = "0";

    progress.style.top = "0";

    progress.style.height = "3px";

    progress.style.width = "0";

    progress.style.background = "#ffffff";

    progress.style.zIndex = "99999";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const total = document.documentElement.scrollHeight - window.innerHeight;

        const percent = (window.scrollY / total) * 100;

        progress.style.width = percent + "%";

    });

}

/* ==========================================
   PROJECT FILTER
========================================== */

function initProjectFilter() {

    const buttons = document.querySelectorAll(".filter-menu button");

    const cards = document.querySelectorAll(".project-grid article");

    if (!buttons.length || !cards.length) return;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            buttons.forEach((b) => b.classList.remove("active"));

            button.classList.add("active");

            const category = button.dataset.filter;

            cards.forEach((card) => {

                if (

                    category === "all" ||

                    card.dataset.category === category

                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

}

/* ==========================================
   SIMPLE TESTIMONIAL ROTATOR
========================================== */

function initTestimonials() {

    const testimonials = document.querySelectorAll(".testimonial-card");

    if (testimonials.length <= 1) return;

    let index = 0;

    testimonials.forEach((item, i) => {

        if (i !== 0) item.style.display = "none";

    });

    setInterval(() => {

        testimonials[index].style.display = "none";

        index = (index + 1) % testimonials.length;

        testimonials[index].style.display = "block";

    }, 5000);

}

/* ==========================================
   CONTACT FORM
========================================== */

function initContactForm() {

    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const required = form.querySelectorAll("[required]");

        let valid = true;

        required.forEach((field) => {

            if (!field.value.trim()) {

                field.style.borderColor = "red";

                valid = false;

            } else {

                field.style.borderColor = "";

            }

        });

        if (!valid) {

            alert("Please complete all required fields.");

            return;

        }

        alert("Thanks! Your message has been received.");

        form.reset();

    });

}

/* ==========================================
   INITIALIZE PART 2
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();

    initActiveNavigation();

    initSmoothScroll();

    initScrollProgress();

    initProjectFilter();

    initTestimonials();

    initContactForm();

});
/* ==========================================
   PARALLAX EFFECT
========================================== */

function initParallax() {

    const items = document.querySelectorAll("[data-parallax]");

    if (!items.length) return;

    window.addEventListener("scroll", () => {

        const scrollY = window.pageYOffset;

        items.forEach((item) => {

            const speed = parseFloat(item.dataset.parallax) || 0.2;

            item.style.transform = `translateY(${scrollY * speed}px)`;

        });

    });

}

/* ==========================================
   3D CARD TILT
========================================== */

function initTiltCards() {

    const cards = document.querySelectorAll(

        ".project-grid article,.service-card"

    );

    cards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 14;

            const rotateX = ((y / rect.height) - 0.5) * -14;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

}

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

function initTypewriter() {

    const element = document.querySelector("[data-typewriter]");

    if (!element) return;

    const text = element.dataset.typewriter;

    let index = 0;

    element.textContent = "";

    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, 70);

        }

    }

    type();

}

/* ==========================================
   LAZY IMAGE LOADING
========================================== */

function initLazyImages() {

    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            observer.unobserve(img);

        });

    });

    images.forEach((img) => observer.observe(img));

}

/* ==========================================
   SCROLL DIRECTION
========================================== */

function initScrollDirection() {

    let lastScroll = 0;

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        const current = window.pageYOffset;

        if (current > lastScroll && current > 150) {

            header.style.transform = "translateY(-100%)";

        } else {

            header.style.transform = "translateY(0)";

        }

        lastScroll = current;

    });

}

/* ==========================================
   SCROLL TO SECTION BUTTONS
========================================== */

function initScrollButtons() {

    const buttons = document.querySelectorAll("[data-scroll]");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const target = document.querySelector(

                button.dataset.scroll

            );

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================
   COPY EMAIL
========================================== */

function initCopyEmail() {

    const copyButton = document.querySelector("[data-copy-email]");

    if (!copyButton) return;

    copyButton.addEventListener("click", async () => {

        const email = copyButton.dataset.copyEmail;

        try {

            await navigator.clipboard.writeText(email);

            copyButton.textContent = "Copied!";

            setTimeout(() => {

                copyButton.textContent = "Copy Email";

            }, 2000);

        } catch (err) {

            console.error(err);

        }

    });

}

/* ==========================================
   RESIZE HANDLER
========================================== */

function initResizeHandler() {

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            console.log("Layout updated");

        }, 250);

    });

}

/* ==========================================
   PERFORMANCE
========================================== */

function initPerformance() {

    document.querySelectorAll("video").forEach((video) => {

        video.setAttribute("playsinline", "");

        video.setAttribute("preload", "metadata");

    });

}

/* ==========================================
   INITIALIZE PART 3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initParallax();

    initTiltCards();

    initTypewriter();

    initLazyImages();

    initScrollDirection();

    initScrollButtons();

    initCopyEmail();

    initResizeHandler();

    initPerformance();

});
/* ==========================================
   PART 4
   FINAL UTILITIES
========================================== */

/* ==========================================
   MOUSE SPOTLIGHT
========================================== */

function initSpotlight() {

    const spotlight = document.createElement("div");

    spotlight.className = "spotlight";

    spotlight.style.position = "fixed";
    spotlight.style.width = "400px";
    spotlight.style.height = "400px";
    spotlight.style.borderRadius = "50%";
    spotlight.style.pointerEvents = "none";
    spotlight.style.background =
        "radial-gradient(circle, rgba(255,255,255,.08), transparent 70%)";
    spotlight.style.transform = "translate(-50%,-50%)";
    spotlight.style.zIndex = "0";
    spotlight.style.mixBlendMode = "screen";

    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", (e) => {

        spotlight.style.left = e.clientX + "px";
        spotlight.style.top = e.clientY + "px";

    });

}

/* ==========================================
   KEYBOARD SHORTCUTS
========================================== */

function initKeyboardShortcuts() {

    document.addEventListener("keydown", (e) => {

        // Home Key
        if (e.key === "Home") {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

        // Escape closes menu

        if (e.key === "Escape") {

            document.body.classList.remove("menu-open");

            document
                .querySelector(".mobile-nav")
                ?.classList.remove("active");

            document
                .querySelector(".mobile-overlay")
                ?.classList.remove("active");

        }

    });

}

/* ==========================================
   MARQUEE SPEED
========================================== */

function initMarqueeSpeed() {

    const marquee = document.querySelector(".track");

    if (!marquee) return;

    let previous = 0;

    window.addEventListener("scroll", () => {

        const current = window.scrollY;

        const speed = Math.min(

            40,

            Math.abs(current - previous)

        );

        marquee.style.animationDuration =

            `${25 - speed / 5}s`;

        previous = current;

    });

}

/* ==========================================
   SAVE SCROLL POSITION
========================================== */

function saveScrollPosition() {

    window.addEventListener("beforeunload", () => {

        localStorage.setItem(

            "scrollY",

            window.scrollY

        );

    });

}

/* ==========================================
   RESTORE SCROLL
========================================== */

function restoreScrollPosition() {

    const value = localStorage.getItem("scrollY");

    if (!value) return;

    setTimeout(() => {

        window.scrollTo({

            top: Number(value),

            behavior: "instant"

        });

    }, 100);

}

/* ==========================================
   RANDOM BACKGROUND SHAPES
========================================== */

function createBackgroundShapes() {

    const total = 8;

    for (let i = 0; i < total; i++) {

        const blob = document.createElement("div");

        blob.className = "blob";

        blob.style.width =

            120 + Math.random() * 180 + "px";

        blob.style.height = blob.style.width;

        blob.style.left =

            Math.random() * 100 + "%";

        blob.style.top =

            Math.random() * 100 + "%";

        blob.style.background =

            "rgba(255,255,255,.08)";

        blob.style.animationDelay =

            Math.random() * 6 + "s";

        document.body.appendChild(blob);

    }

}

/* ==========================================
   CURRENT YEAR
========================================== */

function updateCopyright() {

    const year = new Date().getFullYear();

    document

        .querySelectorAll(".current-year")

        .forEach((el) => {

            el.textContent = year;

        });

}

/* ==========================================
   BUTTON RIPPLE
========================================== */

function initRipple() {

    const buttons = document.querySelectorAll(

        ".hero-btn,.menu-btn,.cta a"

    );

    buttons.forEach((button) => {

        button.addEventListener("click", (e) => {

            const ripple = document.createElement("span");

            ripple.className = "ripple-circle";

            const rect = button.getBoundingClientRect();

            ripple.style.left =

                e.clientX - rect.left + "px";

            ripple.style.top =

                e.clientY - rect.top + "px";

            button.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 700);

        });

    });

}

/* ==========================================
   IMAGE PRELOAD
========================================== */

function preloadImages() {

    document.querySelectorAll("img").forEach((img) => {

        const image = new Image();

        image.src = img.src;

    });

}

/* ==========================================
   INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initSpotlight();

    initKeyboardShortcuts();

    initMarqueeSpeed();

    saveScrollPosition();

    restoreScrollPosition();

    createBackgroundShapes();

    updateCopyright();

    initRipple();

    preloadImages();

});

/* ==========================================
   END OF SCRIPT
========================================== */

console.log("%cNova Studio Loaded",
"font-size:18px;color:white;background:black;padding:10px;");