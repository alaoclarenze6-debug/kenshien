const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("menu-links");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active"); // animate hamburger
  links.classList.toggle("active");  // show links
});
