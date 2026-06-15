/* ==========================================
   Harwardia Academy v2
   Enterprise Website Script
========================================== */

/* ==========================
   Page Fade In
========================== */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

/* ==========================
   Navbar Scroll Effect
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 6px 20px rgba(0,0,0,.08)";

        header.style.background =
        "rgba(255,255,255,.98)";

    }else{

        header.style.boxShadow = "none";

        header.style.background =
        "rgba(255,255,255,.95)";
    }

});

/* ==========================
   Scroll Reveal Animation
========================== */

const revealElements =
document.querySelectorAll(".reveal");

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==========================
   FAQ Accordion
========================== */

const accordionButtons =
document.querySelectorAll(".accordion-header");

accordionButtons.forEach(button => {

    button.addEventListener("click", function(){

        const content =
        this.nextElementSibling;

        const isOpen =
        content.style.maxHeight;

        document
        .querySelectorAll(".accordion-content")
        .forEach(item => {

            item.style.maxHeight = null;

        });

        if(!isOpen){

            content.style.maxHeight =
            content.scrollHeight + "px";

        }

    });

});

/* ==========================
   Statistics Counter
========================== */

const counters =
document.querySelectorAll(".stat-number");

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection) return;

    const sectionTop =
    statsSection.getBoundingClientRect().top;

    if(sectionTop <
    window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter => {

            const target =
            parseInt(
            counter.getAttribute("data-target")
            );

            let current = 0;

            const increment =
            Math.ceil(target / 120);

            const timer =
            setInterval(() => {

                current += increment;

                if(current >= target){

                    current = target;

                    clearInterval(timer);

                }

                counter.innerText =
                current.toLocaleString();

            },15);

        });

    }

}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);

/* ==========================
   Back To Top Button
========================== */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(!backToTop) return;

    if(window.scrollY > 500){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

if(backToTop){

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

/* ==========================
   Active Navigation Link
========================== */

const currentPage =
window.location.pathname.split("/")
.pop();

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        link.style.color = "#1E63D5";
        link.style.fontWeight = "700";

    }

});

/* ==========================
   Smooth Anchor Scroll
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

/* ==========================
   Gallery Hover Enhancement
========================== */

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform =
        "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
        "scale(1)";

    });

});

/* ==========================
   Contact Form Validation
========================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",
    function(e){

        const name =
        document.getElementById("name");

        const email =
        document.getElementById("email");

        const message =
        document.getElementById("message");

        if(
            !name.value.trim() ||
            !email.value.trim() ||
            !message.value.trim()
        ){

            e.preventDefault();

            alert(
            "Please complete all required fields."
            );

            return;
        }

    });

}

/* ==========================
   Hero Text Animation
========================== */

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

    heroTitle.style.opacity = "0";
    heroTitle.style.transform =
    "translateY(30px)";

    setTimeout(() => {

        heroTitle.style.transition =
        "all 1s ease";

        heroTitle.style.opacity = "1";

        heroTitle.style.transform =
        "translateY(0)";

    },300);

}

/* ==========================
   End of Script
========================== */
