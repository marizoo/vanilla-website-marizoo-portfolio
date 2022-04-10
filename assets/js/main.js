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
        target: ".projects__cardV1",
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

/*=============== VIDEO TOGGLE ===============*/
function toggleVideo() {
    const trailer = document.querySelector(".play-video-container");
    const video = document.querySelector(".play-video");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 102
function toggleVideo102() {
    const trailer = document.querySelector(".play-video-container102");
    const video = document.querySelector(".play-video102");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 103
function toggleVideo103() {
    const trailer = document.querySelector(".play-video-container103");
    const video = document.querySelector(".play-video103");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 201
function toggleVideo201() {
    const trailer = document.querySelector(".play-video-container201");
    const video = document.querySelector(".play-video201");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 202
function toggleVideo202() {
    const trailer = document.querySelector(".play-video-container202");
    const video = document.querySelector(".play-video202");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 203
function toggleVideo203() {
    const trailer = document.querySelector(".play-video-container203");
    const video = document.querySelector(".play-video203");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 301
function toggleVideo301() {
    const trailer = document.querySelector(".play-video-container301");
    const video = document.querySelector(".play-video301");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 302
function toggleVideo302() {
    const trailer = document.querySelector(".play-video-container302");
    const video = document.querySelector(".play-video302");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 303
function toggleVideo303() {
    const trailer = document.querySelector(".play-video-container303");
    const video = document.querySelector(".play-video303");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 401
function toggleVideo401() {
    const trailer = document.querySelector(".play-video-container401");
    const video = document.querySelector(".play-video401");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 402
function toggleVideo402() {
    const trailer = document.querySelector(".play-video-container402");
    const video = document.querySelector(".play-video402");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 403
function toggleVideo403() {
    const trailer = document.querySelector(".play-video-container403");
    const video = document.querySelector(".play-video403");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 501
function toggleVideo501() {
    const trailer = document.querySelector(".play-video-container501");
    const video = document.querySelector(".play-video501");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 502
function toggleVideo502() {
    const trailer = document.querySelector(".play-video-container502");
    const video = document.querySelector(".play-video502");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
// 503
function toggleVideo503() {
    const trailer = document.querySelector(".play-video-container503");
    const video = document.querySelector(".play-video503");
    trailer.classList.toggle("active");
    video.currentTime = 0;
    video.pause();
}
