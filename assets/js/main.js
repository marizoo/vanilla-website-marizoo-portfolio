/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ----------- Menu Show ----------
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
// ----------- Menu Hidden ----------
// validate if constant exists & close menu when close icon is clicked
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // when we click on each "nav__link", we remove the "show-menu" class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // when the scroll is greater than 50vh, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("nav-theme-icon");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== POPULAR SWIPER ===============*/
let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        // rotate: 50,
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
});

/*=============== MIXITUP FILTER FEATURED ===============*/
var mixerFeatured = mixitup(".projects__content", {
    selectors: {
        target: ".projects__card, .projects__card-long",
    },
    animation: {
        duration: 300,
    },
});

/* Link active featured */
const linkFeatured = document.querySelectorAll(".projects__item");

function activeFeatured() {
    linkFeatured.forEach((l) => l.classList.remove("active-featured"));
    this.classList.add("active-featured");
}
linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350vh, add the show-scroll class to the a tag with the scroll-
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// I turned this off.
// const sr = ScrollReveal({
//     origin: "top",
//     distance: "60px",
//     duration: 2500,
//     delay: 400,
//     // reset: true,
// });
// sr.reveal(`.home__data`);
// sr.reveal(`.section__title`, { delay: 200 });
// sr.reveal(`.section__subtitle`, { delay: 300 });
// sr.reveal(`.projects__filters`, { delay: 400 });
// sr.reveal(
//     `.products__container, .projects__content, .about__cardContainer, .contact__container, .footer__content `,
//     {
//         delay: 500,
//         interval: 100,
//         origin: "bottom",
//     }
// );
// sr.reveal(``, { delay: 1000, origin: "bottom" });
// sr.reveal(`.about__story-Container`, { origin: "left" });
// sr.reveal(``, { origin: "right" });
// sr.reveal(``, { delay: 600, origin: "bottom" });
// sr.reveal(``, { interval: 300 });
// sr.reveal(``, { interval: 100 });

/*=============== EMAIL JS ===============*/
// listen to the form submission
document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "SERVICE_ID";
        const templateID = "TEMPLATE_ID";

        // send the email here
        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert(
                    "YAY! Thank You for your message, I'll get back to you asap!"
                );
                document.getElementById("contact-form").reset();
            },
            (error) => {
                console.log("FAILED...", error);
                alert("Oops.. something went wrong, please try again", error);
            }
        );
    });
