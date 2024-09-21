const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const divUlContainer = document.createElement("div");
document.querySelector("body").append(divUlContainer);
divUlContainer.setAttribute("id", "div-ul-container-el");
const uLEl = document.createElement("ul");
uLEl.setAttribute("id", "ul-el");
document.querySelector("#div-ul-container-el").append(uLEl);

let myLeads = [];

inputBtn.addEventListener("click", () => {
  let inputValue = inputEl.value;
  myLeads.push(inputValue);

  const liEl = document.createElement("li");
  liEl.textContent = inputValue;
  liEl.setAttribute("class", "li-el");

  const aEl = document.createElement("a");
  aEl.href = "inputValue";
  aEl.textContent = inputValue;
  liEl.appendChild(aEl);
  uLEl.appendChild(liEl);
  console.log(myLeads);

  clearField();
  console.log(myLeads);
});

let clearField = () => {
  inputEl.value = "";
};
