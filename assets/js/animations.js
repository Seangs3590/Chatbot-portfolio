// assets/js/animations.js
document.addEventListener("DOMContentLoaded", () => {
  // Animate feature elements on scroll
  const features = document.querySelectorAll(".feature");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );
  
  features.forEach(feature => observer.observe(feature));
});
