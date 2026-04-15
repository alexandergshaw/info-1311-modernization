/* ============================================================
   Modern Portfolio — Script
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Theme Toggle ---------- */
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  themeToggle.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Mobile Navigation ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Scroll Reveal Animation ---------- */
  var revealElements = document.querySelectorAll(".reveal");

  function handleReveal() {
    var windowHeight = window.innerHeight;
    revealElements.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        el.classList.add("visible");
      }
    });
  }

  // Run once on load, then on scroll
  handleReveal();
  window.addEventListener("scroll", handleReveal, { passive: true });

  /* ---------- Navbar Background on Scroll ---------- */
  var navbar = document.getElementById("navbar");

  function handleNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  handleNavbar();
  window.addEventListener("scroll", handleNavbar, { passive: true });
})();
