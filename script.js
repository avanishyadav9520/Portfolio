/* =========================
   TYPING ANIMATION
========================= */

const words = [
    "Web Developer",
    "Java Developer",
    "Frontend Developer",
    "Computer Science Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    }else{

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){
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


/* =========================
   SCROLL REVEAL
========================= */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .contact-card, .about-box"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    },

    {
        threshold:0.15
    }

);


cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(card);

});