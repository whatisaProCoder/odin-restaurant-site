import createAboutPage from "./about-page";
import createHomePage from "./home-page";
import createMenuPage from "./menu-page";

export function loadInitialPage() {
    createHomePage();
}

export function handleRoutes() {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const aboutButton = document.querySelector("#about-button");

    const bindEvents = () => {
        homeButton.addEventListener("click", (e) => {
            createHomePage();
        });
        menuButton.addEventListener("click", (e) => {
            createMenuPage();
        })
        aboutButton.addEventListener("click", (e) => {
            createAboutPage();
        });
    };

    const init = () => {
        bindEvents();
    }

    init();
}