// Efek Fade-in Hero Section
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = 0;
    heroText.style.transition = "opacity 1.5s ease-in-out";

    setTimeout(() => {
        heroText.style.opacity = 1;
    }, 300);
});

// Efek Scroll Reveal untuk Misi dan Program
function scrollReveal() {
    const revealSections = document.querySelectorAll(".mission-section, .program-section");

    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}

// Tambahkan event listener untuk scroll
window.addEventListener("scroll", scrollReveal);

// Inisiasi efek saat halaman dimuat
scrollReveal();
