document.addEventListener("DOMContentLoaded", function (event) {
  const root = document.documentElement;

  // Burger
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger");
  if (header && burger) {
    burger.addEventListener("click", () => {
      root.classList.toggle("block");
      header.classList.toggle("open");
      burger.classList.toggle("open");
    });
  }

  console.log("DOM fully loaded and parsed");
});
