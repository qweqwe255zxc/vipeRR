// disappearing header on scroll
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        // scroll down
        header.style.transform = "translateY(-100%)";
    } else {
        // scroll up
        header.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // avoid negative scroll
});