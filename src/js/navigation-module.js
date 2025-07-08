import createAboutPage from "./about-page";
import createHomePage from "./home-page";
import createMenuPage from "./menu-page";

export function loadInitialPage() {
    const homeButton = document.querySelector("#home-button");
    createHomePage();
    homeButton.classList.add("nav-button-active");
}

export function handleRoutes() {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const aboutButton = document.querySelector("#about-button");
    const shopNowButton = document.querySelector(".shop-now-button");

    const removeAllActiveClass = () => {
        homeButton.classList.remove("nav-button-active");
        menuButton.classList.remove("nav-button-active");
        aboutButton.classList.remove("nav-button-active");
    }

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
        shopNowButton.addEventListener("click", (e) => {
            createMenuPage();
        })
    };

    const init = () => {
        bindEvents();
    }

    init();
}