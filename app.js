// Selectors
const main = document.querySelector("#main");
const button = document.querySelector(".btn");

// Event Lisners
button.addEventListener("click", addCard);

// !Functions
function addCard(event) {
  // DIV Container --> The pop-up Card
  const contDiv = document.createElement("div");
  contDiv.classList.add("cont-div");
  main.appendChild(contDiv);

  //   DIV1 To fill Information
  const data = document.createElement("div");
  data.classList.add("data");
  contDiv.appendChild(data);

  // Title Form
  const titleForm = document.createElement("form");
  titleForm.classList.add("title");
  data.appendChild(titleForm);
  titleForm.setAttribute("onsubmit", "return false;"); //prevents the Form from submitting when hit enter after in input tag.

  // DIV for input and icon
  const inputIcon = document.createElement("div");
  inputIcon.classList.add("input-icon");
  titleForm.appendChild(inputIcon);

  // Input
  const input = document.createElement("input");
  input.classList.add("title-input");
  inputIcon.appendChild(input);
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "write Something");

  // Icon
  const titleIcon = document.createElement("i");
  titleIcon.innerHTML = "<i class='fas fa-search'></i>";
  titleIcon.classList.add("title-icon");
  inputIcon.appendChild(titleIcon);

  // Description
  const description = document.createElement("textarea");
  description.classList.add("data-description");
  data.appendChild(description);

  // DIV2 Seperator Line
  const line = document.createElement("div");
  line.classList.add("line");
  contDiv.appendChild(line);

  // DIV3 To Display Information
  const dispData = document.createElement("div");
  dispData.classList.add("display-data");
  contDiv.appendChild(dispData);

  // Cross Icon
  const crossIcon = document.createElement("i");
  crossIcon.innerHTML = "<i class='fas fa-times'></i>";
  crossIcon.classList.add("cross-icon");
  contDiv.appendChild(crossIcon);
}
