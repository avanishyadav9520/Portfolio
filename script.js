// ===============================
// TYPING EFFECT
// ===============================

const words = [
    "Web Developer",
    "Java Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "Computer Science Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ===============================
// SMOOTH NAVIGATION
// ===============================

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", function(event) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .contact-card, .about-box"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);
            }
        });
    },

    {
        threshold: 0.15
    }
);


cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(card);
});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});


// ===============================
// PROJECT BUTTON EFFECT
// ===============================

const liveButtons =
    document.querySelectorAll(".live-btn");

liveButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "scale(1)";
    });
});


// ===============================
// SKILL CARD EFFECT
// ===============================

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";
    });
});


// ===============================
// CUBE MOUSE INTERACTION
// ===============================

const cube =
    document.querySelector(".cube");

const cubeArea =
    document.querySelector(".cube-area");

if (cube && cubeArea) {

    cubeArea.addEventListener("mousemove", (event) => {

        const rect =
            cubeArea.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            (y / rect.height - 0.5) * -25;

        const rotateY =
            (x / rect.width - 0.5) * 25;

        cube.style.animationPlayState =
            "paused";

        cube.style.transform =
            `rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    });


    cubeArea.addEventListener("mouseleave", () => {

        cube.style.animationPlayState =
            "running";

        cube.style.transform = "";
    });
}


// ===============================
// PAGE LOAD EFFECT
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log(
        "Avanish Yadav Portfolio Loaded Successfully"
    );

    console.log(
        "Web Developer | Java Developer | MERN Stack"
    );
});


// ===============================
// CURRENT YEAR
// ===============================

const footerYear =
    document.querySelector("footer p");

if (footerYear) {

    const year =
        new Date().getFullYear();

    footerYear.innerHTML =
        `© ${year} Avanish Yadav | All Rights Reserved.`;
}


// ===============================
// CONTACT CARD CLICK EFFECT
// ===============================

const contactCards =
    document.querySelectorAll(".contact-card");

contactCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform =
            "scale(0.97)";

        setTimeout(() => {

            card.style.transform =
                "scale(1)";

        }, 150);
    });
});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "Welcome to Avanish Yadav's Portfolio 🚀"
);

console.log(
    "Built with HTML, CSS and JavaScript."
);
