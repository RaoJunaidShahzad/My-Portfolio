// // Dark/Light Theme Toggle
// const themeToggle = document.getElementById("theme-toggle");
// const body = document.body;

// themeToggle.addEventListener("click", () => {
//   body.classList.toggle("light-theme");
//   themeToggle.textContent = body.classList.contains("light-theme")
//     ? "🌞"
//     : "🌙";
// });

// Skill Animations
const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  const percent = skill.getAttribute("data-percent");
  skill.style.setProperty("--width", `${percent}%`);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar Toggle
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.setAttribute("data-visible", "true");
});

closeIcon.addEventListener("click", () => {
  navLinks.setAttribute("data-visible", "false");
});

navLinks.addEventListener("click", () => {
  navLinks.setAttribute("data-visible", "false");
});
