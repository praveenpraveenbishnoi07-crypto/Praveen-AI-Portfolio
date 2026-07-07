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