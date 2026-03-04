// Offset fix for fixed navbar
const navHeight = document.querySelector("header").offsetHeight;

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - navHeight,
            behavior: "smooth"
        });
    });
});