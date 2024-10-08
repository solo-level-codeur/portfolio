// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
  // Typing effect for the title
  const titleElement = document.getElementById("title");
  const titleText = titleElement.innerText;
  titleElement.innerText = "";
  let i = 0;

  function typeWriter() {
    if (i < titleText.length) {
      titleElement.innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  // Highlight active navigation item
  const navItems = document.querySelectorAll(".menu li");
  const sections = document.querySelectorAll(
    "section, .container-skill, .container-projet, .container-contact"
  );

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((li) => {
      li.classList.remove("active");
      if (li.textContent.toLowerCase() === current) {
        li.classList.add("active");
      }
    });
  });

  // Animate project cards on hover
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });

  // Smooth scrolling for navigation items
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission handling
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Form submitted! (Note: This is a demo, no data was actually sent)");
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Fermer le menu lors du clic sur un lien
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burgerMenu.classList.remove("active");
      menu.classList.remove("active");
    });
  });
});

// Theme toggle functionality
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Save the current theme preference to localStorage
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Check for saved theme preference on page load
window.addEventListener("DOMContentLoaded", (event) => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }
});
