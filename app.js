// Selectors
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector("#overlay");
const titleInput = document.querySelector(".title-input");
const description = document.querySelector("#Description");
const displayInputTitle = document.querySelector("#display-input-title");
const displayInputDescription = document.querySelector(
  "#display-input-description"
);

// Eventlistners
titleInput.addEventListener("keyup", displayTitle);
description.addEventListener("keyup", displayDescription);

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal"); //This will select the closest parent of the button and check if the parent has class of modal if yes then call closemodal function.
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

// Functions
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function displayTitle() {
  displayInputTitle.innerHTML = titleInput.value;
}
function displayDescription() {
  displayInputDescription.innerHTML = description.value;
}
