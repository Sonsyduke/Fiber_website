const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  sidebar.style.display = "block";
  hamburger.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
  hamburger.style.display = "block";
});
