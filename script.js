console.log("Praveen AI Portfolio Loaded Successfully 🚀");
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
console.log("Stats section loaded successfully.");
const themeBtn = document.getElementById("theme-toggle");
const backBtn = document.getElementById("backToTop");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeBtn.textContent =
        document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

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
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("fade-up");
    observer.observe(section);
});