/* ==========================================================
   NOVA STUDIO
   GSAP ANIMATIONS
========================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   HERO INTRO
========================================== */

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

heroTimeline

.from("header", {
    y: -80,
    opacity: 0,
    duration: .8
})

.from(".hero-content p", {
    y: 40,
    opacity: 0,
    duration: .8
}, "-=.3")

.from(".hero-content h1", {
    y: 100,
    opacity: 0,
    duration: 1
}, "-=.5")

.from(".hero-btn", {
    y: 40,
    opacity: 0,
    duration: .8
}, "-=.6")

.from(".hero-social a", {
    x: -30,
    opacity: 0,
    stagger: .15
}, "-=.6")

.from(".hero-stats div", {
    y: 30,
    opacity: 0,
    stagger: .15
}, "-=.5");

/* ==========================================
   HERO GLOW
========================================== */

gsap.to(".hero-glow", {

    x: 80,

    y: 50,

    repeat: -1,

    yoyo: true,

    duration: 8,

    ease: "sine.inOut"

});

gsap.to(".hero-glow2", {

    x: -60,

    y: -40,

    repeat: -1,

    yoyo: true,

    duration: 10,

    ease: "sine.inOut"

});

/* ==========================================
   HERO PARALLAX
========================================== */

gsap.to(".hero video", {

    scale: 1.15,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

gsap.to(".hero-content", {

    y: 120,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

/* ==========================================
   SECTION HEADINGS
========================================== */

gsap.utils.toArray(".section-heading").forEach((heading) => {

    gsap.from(heading, {

        y: 80,

        opacity: 0,

        duration: 1,

        scrollTrigger: {

            trigger: heading,

            start: "top 80%"

        }

    });

});

/* ==========================================
   ABOUT
========================================== */

gsap.from(".about-preview .left", {

    x: -100,

    opacity: 0,

    duration: 1,

    scrollTrigger: {

        trigger: ".about-preview",

        start: "top 70%"

    }

});

gsap.from(".about-preview .right", {

    x: 100,

    opacity: 0,

    duration: 1,

    scrollTrigger: {

        trigger: ".about-preview",

        start: "top 70%"

    }

});

/* ==========================================
   FEATURE CARDS
========================================== */

gsap.from(".feature-card", {

    y: 80,

    opacity: 0,

    duration: .8,

    stagger: .15,

    scrollTrigger: {

        trigger: ".feature-grid",

        start: "top 75%"

    }

});

/* ==========================================
   PROJECTS
========================================== */

gsap.utils.toArray(".project-grid article").forEach((card) => {

    gsap.from(card, {

        y: 100,

        opacity: 0,

        duration: .9,

        scrollTrigger: {

            trigger: card,

            start: "top 85%"

        }

    });

});

/* ==========================================
   SERVICES
========================================== */

gsap.from(".service-card", {

    scale: .9,

    opacity: 0,

    duration: .8,

    stagger: .15,

    scrollTrigger: {

        trigger: ".services",

        start: "top 75%"

    }

});

/* ==========================================
   PROCESS
========================================== */

gsap.from(".process-grid div", {

    y: 60,

    opacity: 0,

    stagger: .2,

    duration: .8,

    scrollTrigger: {

        trigger: ".process",

        start: "top 75%"

    }

});

/* ==========================================
   CLIENTS
========================================== */

gsap.from(".client", {

    scale: .8,

    opacity: 0,

    stagger: .08,

    duration: .6,

    scrollTrigger: {

        trigger: ".clients",

        start: "top 80%"

    }

});

/* ==========================================
   TESTIMONIAL
========================================== */

gsap.from(".testimonial-card", {

    y: 80,

    opacity: 0,

    duration: 1,

    scrollTrigger: {

        trigger: ".testimonials",

        start: "top 75%"

    }

});

/* ==========================================
   CTA
========================================== */

gsap.from(".cta h2", {

    y: 50,

    opacity: 0,

    duration: .8,

    scrollTrigger: {

        trigger: ".cta",

        start: "top 75%"

    }

});

gsap.from(".cta a", {

    scale: .8,

    opacity: 0,

    duration: .8,

    delay: .2,

    scrollTrigger: {

        trigger: ".cta",

        start: "top 75%"

    }

});

/* ==========================================
   FOOTER
========================================== */

gsap.from("footer > *", {

    y: 50,

    opacity: 0,

    stagger: .15,

    duration: .8,

    scrollTrigger: {

        trigger: "footer",

        start: "top 90%"

    }

});

/* ==========================================
   FLOATING ELEMENTS
========================================== */

gsap.to(".circle-one", {

    y: -30,

    repeat: -1,

    yoyo: true,

    duration: 3,

    ease: "sine.inOut"

});

gsap.to(".circle-two", {

    y: 20,

    repeat: -1,

    yoyo: true,

    duration: 4,

    ease: "sine.inOut"

});

gsap.to(".circle-three", {

    rotation: 360,

    repeat: -1,

    duration: 12,

    ease: "none"

});

/* ==========================================
   END
========================================== */

console.log("GSAP animations initialized.");