// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("mobile-menu-overlay");
const closeBtn = document.getElementById("close-menu-btn");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.add("active");
  overlay.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.remove("active");
  overlay.addEventListener("transitionend", handleTransitionEnd);
  document.body.style.overflow = "";
}

function handleTransitionEnd(e) {
  if (e.propertyName === "opacity" && !overlay.classList.contains("active")) {
    overlay.style.visibility = "hidden";
    overlay.removeEventListener("transitionend", handleTransitionEnd);
  }
}

overlay.style.visibility = "hidden";
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
document.querySelectorAll("#mobile-menu a").forEach((el) => {
  el.addEventListener("click", function () {
    closeMenu();
  });
});

// RWD: resize 時自動關閉選單並恢復狀態
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMenu();
});

// header scroll effect
const header = document.querySelector("header");
function onScroll() {
  if (window.scrollY > 10) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
}
window.addEventListener("scroll", onScroll);
document.addEventListener("DOMContentLoaded", onScroll);
