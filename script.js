console.log("Praveen AI Portfolio Loaded Successfully 🚀");

// ===============================
// Contact Form
// ===============================
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("✅ Thank you! Your message has been sent.");
        form.reset();
    });
}

// ===============================
// Mobile Menu
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// ===============================
// Dark / Light Mode
// ===============================
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        themeBtn.textContent =
            document.body.classList.contains("light-theme")
                ? "☀️"
                : "🌙";
    });
}

// ===============================
// Back To Top Button
// ===============================
const backBtn = document.getElementById("backToTop");

if (backBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backBtn.classList.add("show");
        } else {
            backBtn.classList.remove("show");
        }

    });

    backBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ===============================
// Scroll Animation
// ===============================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("fade-up");
    observer.observe(section);
});

console.log("✅ All JavaScript Loaded Successfully");