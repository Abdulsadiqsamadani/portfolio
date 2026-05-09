document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");
  const nav = document.querySelector(".mobile_navbar_li");

  menuBtn.addEventListener("click", () => { nav.classList.add("active") });
  closeBtn.addEventListener("click", () => { nav.classList.remove("active") });
});
