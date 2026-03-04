const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll("nav a");

const getNavHeight = () => header.offsetHeight;

menuToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        e.preventDefault();

        window.scrollTo({
            top: targetSection.offsetTop - getNavHeight() + 1,
            behavior: "smooth",
        });

        nav.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
    });
});