import excellenceBubbleSVG from "../design/excellence-bubble.svg";

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

export default function createAboutPage() {
    const contentElement = document.querySelector("#content");

    contentElement.innerHTML = `
        <div class="header-background"></div>
        <div class="about-section">
        <div>
        <div class="paragraph-heading">About Us</div>
        <div class="paragraph-text">
        <p>Nestled in the heart of Kolkata since 2010, <b>Chillax Restaurant</b> has been serving up more than just food — we’ve been serving memories. What began as a humble eatery in the bustling lanes of the city quickly captured the hearts (and appetites) of locals and visitors alike.</p>
        <p>Fueled by passion, tradition, and a love for bold, unforgettable flavors, our restaurant saw growing demand year after year. Word of mouth turned into loyal followings, and soon, we weren’t just another place to dine — we were the place.</p>
        <p>From the spices in our signature dishes to the warm, welcoming ambiance, every detail is a tribute to Kolkata’s rich culture and culinary heritage. Over the years, [Your Restaurant Name] has evolved into a name that locals trust and tourists seek — a legend in the making, one plate at a time.</p>
        </div>
        </div>
        <div>
        <div class="paragraph-heading">Founder's Vision</div>
        <div class="paragraph-text-founder">
        When we opened the doors of <b>Chillax Restaurant</b> in 2010, it was more than just a restaurant — it was a dream brought to life. Inspired by the vibrant spirit of Kolkata and a deep-rooted passion for food, the founder envisioned a place where tradition and innovation could coexist on every plate. Their mission was simple yet powerful: to create a space where people from all walks of life could gather, connect, and celebrate the joy of honest, flavorful food. Today, that vision continues to guide everything we do, as we strive to deliver not just meals, but moments worth remembering.
        </div>
        </div>
        <img class="excellence-bubble-element">
        </div>
    `;

    // dynamically set src
    document.querySelector(".excellence-bubble-element").src = excellenceBubbleSVG;

    // handle header background
    handleHeaderBackgroundElement();
}