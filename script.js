// ===============================
// SAMORE LUXE V2
// Premium JavaScript
// ===============================

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.background = "rgba(0,0,0,0.95)";
    navbar.style.backdropFilter = "blur(18px)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.45)";
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Reveal animation
const revealItems = document.querySelectorAll("section, .product");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

}, {
  threshold: 0.15
});

revealItems.forEach(item => {

  item.style.opacity = "0";
  item.style.transform = "translateY(50px)";
  item.style.transition = "all .8s ease";

  observer.observe(item);

});

// Product hover animation
document.querySelectorAll(".product").forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});

// Current year in footer (optional)
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");

if (footerText) {
  footerText.innerHTML = `© ${year} Samore Luxe. All Rights Reserved.`;
}

console.log("Samore Luxe Website Loaded Successfully");
