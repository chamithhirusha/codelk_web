// Navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 56) {
        navbar.classList.add("navbar-scrolled");
    } else if (window.scrollY < 56) {
        navbar.classList.remove("navbar-scrolled");
    }
});

// Clients
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}