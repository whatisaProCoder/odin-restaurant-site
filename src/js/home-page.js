import shoppingCartIcon from "../icons/shopping-cart.svg";
import chanaChatImage from "../images/chana-chat.png";
import chickenCurryImage from "../images/chicken-curry+.png";
import authBBQPlatterImage from "../images/auth-bbq-platter.png"
import chickenBiriyaniImage from "../images/chicken-biriyani.png";

const cardObjectInfoList = [
    {
        img_src: chickenCurryImage,
        scale: 1,
        mainText: "Chicken curry+",
        subText: "with roti and pulao"
    },
    {
        img_src: authBBQPlatterImage,
        scale: 0.875,
        mainText: "Auth-BBQ Platter",
        subText: "with 7+ authentic items"
    }
]

function createCard(img_src, scale, mainText, subText) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${img_src}" style="scale: ${scale}">
        <div class="info-section">
        <div class="main-text">${mainText}</div>
        <div class="sub-text">${subText}</div>
    `;
    return card;
}

function populateCardSection(parentElement) {
    cardObjectInfoList.forEach((cardInfo) => {
        parentElement.appendChild(
            createCard(cardInfo.img_src, cardInfo.scale, cardInfo.mainText, cardInfo.subText)
        );
    });
}

export default function createHomePage() {
    const contentElement = document.querySelector("#content");

    contentElement.innerHTML = `
        <div class="hero-section">
            <div class="hero-info-section">
                <div class="big-text">Eat the best spicy food in<br>your neighborhood, on a<br>chill evening.</div>
                <div class="shop-now-button">
                    <img>
                    Shop Now
                </div>
            </div>
            <img>
        </div>
        <div class="popular-items-section">
            <div class="cards-section">
            </div>
            <div class="big-text">The most popular<br><em>thalis</em> we make.</div>
        </div>
        <div class="biriyani-section">
            <div class="info-section">
                <div class="big-text">Biriyani of<br>various varieties</div>
                <div class="food-names">
                    <ul>
                        <li>Veg biriyani</li>
                        <li>Egg biriyani</li>
                        <li>Chicken biriyani</li>
                    </ul>
                </div>
            </div>
            <img>
        </div>
    </div>
    `;

    // setting dynamic image urls
    document.querySelector(".shop-now-button>img").src = shoppingCartIcon;
    document.querySelector(".hero-section>img").src = chanaChatImage;
    document.querySelector(".biriyani-section img").src = chickenBiriyaniImage;

    // dynamically adding cards
    populateCardSection(document.querySelector(".cards-section"));
}