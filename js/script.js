const menu = document.querySelector("#menu");
const header = document.querySelector("header");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  menu.style.color = "#5dabf8";
  header.classList.toggle("toggle");
});

window.addEventListener("load", () => {
  menu.classList.remove("fa-times");
  header.classList.remove("toggle");
});

//  Smooth Scrolling
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    header.classList.remove("toggle");
    menu.classList.remove("fa-times");
  });
});

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  target.scrollIntoView({ behavior: "smooth" });
}

// Scroll to top
// Select the scroll-to-top button
const button = document.querySelector(".top");

// Show the button when the user scrolls down
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Smooth scroll to the top of the page when the button is clicked
button.addEventListener("click", function (e) {
  e.preventDefault();
  const target = document.querySelector(button.getAttribute("href"));
  target.scrollIntoView({ behavior: "smooth" });
});

// Function to calculate age
function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust age if birthday hasn't occurred yet this year
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Current Age
const birthdate = "2004-04-28";
const ageSpan = document.querySelector(".Age");
ageSpan.innerHTML = calculateAge(birthdate);