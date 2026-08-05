/* ==========================================================
   NOVA STUDIO
   CURSOR CONTROLLER
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initCustomCursor();

    initMagneticButtons();

    initCursorText();

    initCursorFollower();

});

/* ==========================================
   CUSTOM CURSOR
========================================== */

function initCustomCursor() {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function animate() {

        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        cursor.style.left = currentX + "px";
        cursor.style.top = currentY + "px";

        requestAnimationFrame(animate);

    }

    animate();

}

/* ==========================================
   MAGNETIC BUTTONS
========================================== */

function initMagneticButtons() {

    const buttons = document.querySelectorAll(

        ".hero-btn,.menu-btn,.cta a"

    );

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `
                translate(${x * 0.25}px, ${y * 0.25}px)
            `;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translate(0,0)";

        });

    });

}

/* ==========================================
   CURSOR STATES
========================================== */

function initCursorText() {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    const hoverTargets = document.querySelectorAll(

        ".project-grid article,.service-card,img"

    );

    hoverTargets.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            cursor.style.width = "90px";
            cursor.style.height = "90px";
            cursor.style.background = "rgba(255,255,255,.15)";
            cursor.style.backdropFilter = "blur(8px)";
            cursor.style.border = "1px solid white";

            cursor.innerHTML = `
                <span style="
                    font-size:12px;
                    color:white;
                    font-weight:600;
                    letter-spacing:1px;
                ">
                    VIEW
                </span>
            `;

            cursor.style.display = "flex";
            cursor.style.alignItems = "center";
            cursor.style.justifyContent = "center";

        });

        item.addEventListener("mouseleave", () => {

            cursor.innerHTML = "";

            cursor.style.width = "18px";
            cursor.style.height = "18px";
            cursor.style.background = "transparent";
            cursor.style.backdropFilter = "";
            cursor.style.border = "2px solid white";

        });

    });

}

/* ==========================================
   CURSOR FOLLOW EFFECT
========================================== */

function initCursorFollower() {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    const links = document.querySelectorAll("a,button");

    links.forEach((link) => {

        link.addEventListener("mouseenter", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(1.8)";

        });

        link.addEventListener("mouseleave", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(1)";

        });

    });

}

/* ==========================================
   DISABLE CURSOR ON TOUCH DEVICES
========================================== */

if (
    window.matchMedia("(pointer: coarse)").matches
) {

    const cursor = document.getElementById("cursor");

    if (cursor) {

        cursor.style.display = "none";

    }

}

/* ==========================================
   END
========================================== */

console.log("Cursor controller initialized.");