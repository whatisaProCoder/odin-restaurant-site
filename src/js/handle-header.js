export default function headerHandler() {
    const headerElement = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            headerElement.classList.add("header-scroll-behavior");
        } else {
            headerElement.classList.remove("header-scroll-behavior");
        }
    });
}