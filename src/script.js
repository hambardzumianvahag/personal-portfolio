const burgerMenuButton = document.getElementById("burger-menu");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const profile = document.getElementById("profile");

burgerMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.src = "./img/burger-menu.png";
    profile.style.paddingTop = "5px";
  } else {
    menuIcon.src = "./img/burger-close.png";
    profile.style.paddingTop = "260px";
  }
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  toggleTheme();
});

document
  .getElementById("mobile-theme-toggle")
  .addEventListener("click", function () {
    toggleTheme();
  });

function toggleTheme() {
  const htmlElement = document.documentElement;
  const currentTheme = htmlElement.classList.contains("dark")
    ? "dark"
    : "light";

  if (currentTheme === "light") {
    htmlElement.classList.remove("light");
    htmlElement.classList.add("dark");
    document.getElementById("theme-icon").src = "./img/dark-icon.png";
    document.getElementById("mobile-theme-icon").src = "./img/dark-icon.png";
  } else {
    htmlElement.classList.remove("dark");
    htmlElement.classList.add("light");
    document.getElementById("theme-icon").src = "./img/light-icon.png";
    document.getElementById("mobile-theme-icon").src = "./img/light-icon.png";
  }
}
