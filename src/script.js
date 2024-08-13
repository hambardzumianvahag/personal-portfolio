const burgerMenuButton = document.getElementById("burger-menu");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const nextIcon = document.getElementById("next-icon");
const exIcon = document.getElementById("ex-icon");

burgerMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.src = "./src/img/burger-menu.png";
  } else {
    menuIcon.src = "./src/img/burger-close.png";
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
    nextIcon.src = "./src/img/next-icon-light.png";
    exIcon.src = "./src/img/ex-icon-light.png";
    document.getElementById("theme-icon").src = "./src/img/dark-icon.png";
    document.getElementById("mobile-theme-icon").src =
      "./src/img/dark-icon.png";
  } else {
    htmlElement.classList.remove("dark");
    htmlElement.classList.add("light");
    nextIcon.src = "./src/img/next-icon-dark.png";
    exIcon.src = "./src/img/ex-icon-dark.png";
    document.getElementById("theme-icon").src = "./src/img/light-icon.png";
    document.getElementById("mobile-theme-icon").src =
      "./src/img/light-icon.png";
  }
}
