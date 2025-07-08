import createAboutPage from "./about-page";
import createHomePage from "./home-page";
import createMenuPage from "./menu-page";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");
const contactNowButton = document.querySelector(".contact-now-button");

export function loadInitialPage() {
    createHomePage();
    homeButton.classList.add("nav-button-active");
}

export const removeAllActiveClass = () => {
    homeButton.classList.remove("nav-button-active");
    menuButton.classList.remove("nav-button-active");
    aboutButton.classList.remove("nav-button-active");
}

export function handleRoutes() {
    const bindEvents = () => {
        homeButton.addEventListener("click", (e) => {
            removeAllActiveClass();
            createHomePage();
            homeButton.classList.add("nav-button-active");
        });
        menuButton.addEventListener("click", (e) => {
            removeAllActiveClass();
            createMenuPage();
            menuButton.classList.add("nav-button-active");
        })
        aboutButton.addEventListener("click", (e) => {
            removeAllActiveClass();
            createAboutPage();
            aboutButton.classList.add("nav-button-active");
        });
        contactNowButton.addEventListener("click", (e) => {
            alert("Restaurant Landline : 9000X 6000X");
        });
    };

    const init = () => {
        bindEvents();
    }

    init();
}