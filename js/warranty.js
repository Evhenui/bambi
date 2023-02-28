export let warranty = function () {
  const linkWarranty = document.querySelector("[data-link-warranty]");

  console.log()
  if (linkWarranty) {
    const warrantyBtnClose = document.querySelector(
      "[data-warranty-btn-close-pop-up]"
    );
    const warranryPupUp = document.querySelector("[data-warranty-pop-up]");
    const warrantyContent = document.querySelector("[data-warranty-content]");
    linkWarranty.addEventListener("click", () => {
      warranryPupUp.classList.add("active");
    });
    warrantyBtnClose.addEventListener("click", () => {
      warranryPupUp.classList.remove("active");
    });
    warranryPupUp.addEventListener("click", () => {
      warranryPupUp.classList.remove("active");
    });
    warrantyContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
};
