import chickenCurryImage from "../images/chicken-curry+.png";
import authBBQPlatterImage from "../images/auth-bbq-platter.png";
import chickenBiriyaniImage from "../images/chicken-biriyani.png";
import vegBiriyaniImage from "../images/veg-biriyani.png";
import eggBiriyaniImage from "../images/egg-biriyani.png";
import chickenNoodlesImage from "../images/chicken-noodles.png";
import eggNoodlesImage from "../images/egg-noodles.png";
import mixedNoodlesImage from "../images/mixed-noodles.png";

const thalis_CardInfoList = [
    {
        img_src: authBBQPlatterImage,
        scale: 0.875,
        mainText: "Auth-BBQ Platter",
        subText: "with 7+ authentic items"
    },
    {
        img_src: chickenCurryImage,
        scale: 1,
        mainText: "Chicken curry+",
        subText: "with roti and pulao"
    }
];

const biriyani_CardInfoList = [
    {
        img_src: chickenBiriyaniImage,
        scale: 0.975,
        mainText: "Chicken biriyani",
        subText: "with fresh green peas"
    },
    {
        img_src: vegBiriyaniImage,
        scale: 1,
        mainText: "Veg biriyani",
        subText: "with secret spice recipe"
    },
    {
        img_src: eggBiriyaniImage,
        scale: 1.125,
        mainText: "Egg biriyani",
        subText: "with potato, fresh salad"
    },
];

const noodles_CardInfoList = [
    {
        img_src: chickenNoodlesImage,
        scale: 0.8,
        mainText: "Chicken noodles",
        subText: "with roasted nuggets"
    },
    {
        img_src: eggNoodlesImage,
        scale: 1.15,
        mainText: "Egg noodles",
        subText: "fresh and boiled"
    },
    {
        img_src: mixedNoodlesImage,
        scale: 0.95,
        mainText: "Mixed noodles",
        subText: "with chilli-chicken"
    },
];

function createCard(img_src, scale, mainText, subText) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${img_src}" style="scale: ${scale}">
        <div class="info-section">
            <div class="main-text">${mainText}</div>
            <div class="sub-text">${subText}</div>
        </div>
    `;
    return card;
}

function populateCardSection(parentElement, cardObjectInfoList) {
    cardObjectInfoList.forEach((cardInfo) => {
        parentElement.appendChild(
            createCard(cardInfo.img_src, cardInfo.scale, cardInfo.mainText, cardInfo.subText)
        );
    });
}

function handleHeaderBackgroundElement() {
    const headerBackgroundElement = document.querySelector(".header-background");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            headerBackgroundElement.classList.add("header-background-scroll-behavior");
        } else {
            headerBackgroundElement.classList.remove("header-background-scroll-behavior");
        }
    });
}

export default function createMenuPage() {
    const contentElement = document.querySelector("#content");

    contentElement.innerHTML = `
        <div class="header-background"></div>
        <div class="section-name">
            <div class="text">Thalis</div>
            <div class="line"></div>
        </div>
        <div id="thalis-grid" class="menu-grid"></div>
        <div class="section-name">
            <div class="text">Biriyani</div>
            <div class="line"></div>
        </div>
        <div id="biriyani-grid" class="menu-grid"></div>
        <div class="section-name">
            <div class="text">Noodles</div>
            <div class="line"></div>
        </div>
        <div id="noodles-grid" class="menu-grid"></div>
        <div class="space"></div>
    `;

    // dynamically adding cards
    populateCardSection(document.querySelector("#thalis-grid"), thalis_CardInfoList);
    populateCardSection(document.querySelector("#biriyani-grid"), biriyani_CardInfoList);
    populateCardSection(document.querySelector("#noodles-grid"), noodles_CardInfoList);

    // handle header background
    handleHeaderBackgroundElement();
}