const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const divUlContainer = document.createElement("div");
document.querySelector("body").append(divUlContainer);
divUlContainer.setAttribute("id", "div-ul-container-el");
const uLEl = document.createElement("ul");
uLEl.setAttribute("id", "ul-el");
document.querySelector("#div-ul-container-el").append(uLEl);

let myLeads = [];

// console.log(myLeads);
// console.log(displayLeads);

inputBtn.addEventListener("click", () => {
  let inputValue = inputEl.value;
  myLeads.push(inputValue);

  const liEl = document.createElement("li");

  liEl.textContent = inputValue;
  uLEl.append(liEl);
  uLEl.appendChild(liEl)
  console.log(myLeads);
//   console.log(liEl.textContent);

  clearField();
});

let clearField = () => {
  inputEl.value = "";
};
