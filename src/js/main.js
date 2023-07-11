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

  // Show/hide button
  const showTableList = document.querySelector("#show-table-list");
  const contentTableBody = document.querySelector(".article__tbody");
  if (showTableList && contentTableBody) {
    showTableList.addEventListener("click", () => {
      contentTableBody.classList.toggle("open");
      showTableList.classList.toggle("open");
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

  // Splide
  const splideOptions = {
    type: "loop",
    autoWidth: true,
    speed: 600,
    perPage: 3,
    gap: 20,
    focus: "center",
    arrowPath:
      "M19,27.05a.82.82,0,0,0,.59-.26l6-6.49a.78.78,0,0,0,.15-.22v0h0a1.69,1.69,0,0,0,.05-.24h0v-.06a.77.77,0,0,0-.06-.3h0l0-.06a1.43,1.43,0,0,0-.14-.2h0l-6-6a.81.81,0,0,0-1.14,1.14L23.07,19H15a.8.8,0,0,0,0,1.6h8.17l-4.76,5.16A.8.8,0,0,0,19,27.05Z",
    pagination: false,
    updateOnMove: true,
    breakpoints: {
      1199: {
        perPage: 1,
      },
      767: {
        type: "slide",
        autoWidth: false,
        focus: false,
      },
    },
  };

  if (document.querySelector(".splidePrograms")) {
    var splidePrograms = new Splide(".splidePrograms", splideOptions);
    splidePrograms.mount();
  }
  splideProgressBar(splidePrograms);

  if (document.querySelector(".splidePostTeam")) {
    var splidePostTeam = new Splide(".splidePostTeam", {
      ...splideOptions,
      gap: 80,
    });
    splidePostTeam.mount();
  }
  splideProgressBar(splidePostTeam);

  function splideProgressBar(slider) {
    // Set default width of progress bar
    const progressBar = slider.root.querySelector(".splide__progress-bar");
    let progressBarWidth = 100 / slider.length;
    progressBar.style.width = `${progressBarWidth}%`;

    // Progress bar on slider moving
    slider.on("mounted move", function () {
      var end = slider.Components.Controller.getEnd() + 1;
      var rate = Math.min((slider.index + 1) / end, 1);
      progressBar.style.width = String(100 * rate) + "%";
    });

    // Refresh on resize
    slider.on("resize", function () {
      slider.refresh();
    });
  }

  console.log("DOM fully loaded and parsed");
});
