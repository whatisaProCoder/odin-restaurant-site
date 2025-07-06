import shoppingCartIcon from "../icons/shopping-cart.svg";
import chanaChatImage from "../images/chana-chat.png";
import chickenCurryImage from "../images/chicken-curry+.png";
import authBBQPlatterImage from "../images/auth-bbq-platter.png"
import chickenBiriyaniImage from "../images/chicken-biriyani.png";

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
                <div class="card"><img id="first-card">
                    <div class="info-section">
                        <div class="main-text">Chicken curry+</div>
                        <div class="sub-text">with roti and pulao</div>
                    </div>
                </div>
                <div class="card">
                    <img id="second-card" style="scale: 0.875;">
                    <div class="info-section">
                        <div class="main-text">Auth-BBQ Platter</div>
                        <div class="sub-text">with 7+ authentic items</div>
                    </div>
                </div>
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
    document.querySelector("#first-card").src = chickenCurryImage;
    document.querySelector("#second-card").src = authBBQPlatterImage;
    document.querySelector(".biriyani-section img").src = chickenBiriyaniImage;
}