document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");
  const nav = document.querySelector(".mobile_navbar_li");

  const navLinks = document.querySelectorAll(".mobile_navbar_li a")

  menuBtn.addEventListener("click", () => { nav.classList.add("active") });
  closeBtn.addEventListener("click", () => { nav.classList.remove("active") });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});
