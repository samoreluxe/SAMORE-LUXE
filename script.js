// ================================
// SAMORE LUXE V2
// Premium Website Script
// ================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    navbar.style.background = "rgba(0,0,0,0.92)";
    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

  } else {

    navbar.style.background = "rgba(0,0,0,.35)";
    navbar.style.boxShadow = "none";

  }

});

// Reveal animation
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

document.querySelectorAll("section").forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "all .8s ease";

  observer.observe(section);

});

// Hero animation
window.addEventListener("load", () => {

  const hero = document.querySelector(".hero-content");

  hero.style.opacity = "0";
  hero.style.transform = "translateY(30px)";

  setTimeout(() => {

    hero.style.transition = "1.2s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";

  }, 300);

});
