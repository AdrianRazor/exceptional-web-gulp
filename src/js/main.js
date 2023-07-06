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

  // Open mobile filters
  const filterBtn = document.querySelector(".blog__head p");
  const filterBody = document.querySelector(".blog__filters");
  if (filterBtn && filterBody) {
    filterBtn.addEventListener("click", () => {
      filterBody.classList.toggle("open");
    });
  }
  // Clear filters
  const clearBtn = document.querySelector(".blog__btn-clear");
  const checkboxes = document.querySelectorAll(".checkbox input");
  if (clearBtn && checkboxes) {
    clearBtn.addEventListener("click", () => {
      checkboxes.forEach((el) => {
        el.checked = false;
      });
      filterBody.classList.remove("open");
    });
  }

  // Footer dropdown
  const footerDrop = document.querySelectorAll(".footer__list--primary");
  if (footerDrop) {
    footerDrop.forEach((drop) => {
      const footerDropBtn = drop.querySelector("p");

      if (footerDropBtn) {
        footerDropBtn.addEventListener("click", () => {
          drop.classList.toggle("open");
        });
      }
    });
  }

  console.log("DOM fully loaded and parsed");
});
