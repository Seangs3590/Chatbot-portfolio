// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Highlight navigation links on click
  const navLinks = document.querySelectorAll(".nav-links li a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      navLinks.forEach(l => l.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
  
  // Additional interactive logic can be added here.
  console.log("Main.js loaded: All systems are go!");
});
